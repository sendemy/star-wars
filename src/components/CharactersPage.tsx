'use client'

import { useFetchData } from '@/hooks'
import { Character, apiResponse } from '@/types'
import { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import Filters from './Filters'
import Spinner from './Spinner'

export default function CharactersPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [pageId, setPageId] = useState<number>(1)
	const [hasNoData, setHasNoData] = useState<boolean>(false)
	const [charactersData, setCharactersData] = useState<{
		count: number
		hasNext: boolean
		characters: Character[]
	}>({
		count: 0,
		hasNext: false,
		characters: [],
	})
	const [filteredCharacterData, setFilteredCharacterData] = useState<
		Character[]
	>([])
	const [currentFilter, setCurrentFilter] = useState<string[]>(['all', 'all'])

	function handleFilterChange(key: string, value: string) {
		setCurrentFilter(() => [key, value])

		// filter reset
		if (key === 'all') {
			setFilteredCharacterData(() => charactersData.characters)
			return
		}

		const filtered = charactersData.characters.filter((character) => {
			if (key === 'gender') {
				return character[key as keyof Character] === value
			} else {
				return character[key as keyof Character].includes(value)
			}
		})

		setFilteredCharacterData(() => filtered)
	}

	function fetchData(pageNumber: number) {
		setIsLoading(true)

		useFetchData(pageNumber).then((data: apiResponse) => {
			setIsLoading(false)

			// if there's a filter we do not reset it
			// instead we add filtered characters from api to the filter and show
			setCharactersData((prevValue) => {
				if (currentFilter[0] === 'all') {
					setFilteredCharacterData(() => [
						...prevValue.characters,
						...data.results,
					])
				} else {
					setFilteredCharacterData(() =>
						[...prevValue.characters, ...data.results].filter((character) => {
							if (currentFilter[0] !== 'all') {
								return character[currentFilter[0] as keyof Character].includes(
									currentFilter[1]
								)
							}
						})
					)
				}

				return {
					count: data.count,
					hasNext: !!data.next,
					characters: [...prevValue.characters, ...data.results],
				}
			})

			// if there's no data to load we hide 'load more' button
			if (data.next === null) {
				setHasNoData(true)
				setIsLoading(false)
				return
			}
		})
	}

	function handleLoadMore() {
		setPageId((prevValue) => prevValue + 1)

		fetchData(pageId)
	}

	useEffect(() => {
		fetchData(pageId)

		setPageId((prevValue) => prevValue + 1)
	}, [])

	// displaying spinner if characters list is empty
	if (!charactersData.characters.length)
		return (
			<div className='flex items-center justify-center h-screen'>
				<Spinner />
			</div>
		)

	return (
		<div className='flex flex-col mt-8 max-laptop-l:mx-16 max-mobile:mx-8'>
			<div>
				<h1 className='text-4xl font-bold text-center'>
					{charactersData.count} people for you to choose your favorite
				</h1>
			</div>
			<div>
				<Filters onFilterChange={handleFilterChange} />
			</div>
			<div className='flex flex-col justify-center'>
				<div className='grid grid-cols-cards-big max-md:grid-cols-cards-sm gap-x-8 gap-y-10 mb-12'>
					{filteredCharacterData.map((character, index) => (
						<CharacterCard character={character} key={index} />
					))}
				</div>
				{isLoading && <Spinner />}
				{!hasNoData && !isLoading && (
					<button
						className='inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 mx-auto mb-12 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
						onClick={handleLoadMore}
					>
						Load more
					</button>
				)}
			</div>
		</div>
	)
}
