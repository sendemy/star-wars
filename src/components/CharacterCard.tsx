import { Character } from '@/types'
import { checkValue } from '@/utils/functions'
import { useState } from 'react'
import Modal from './Modal'

interface Props {
	character: Character
}

export default function CharacterCard({ character }: Props) {
	const { name, height, mass, gender, birth_year } = character

	const [showModal, setShowModal] = useState<boolean>(false)

	function defineStyles(gender: string) {
		switch (gender) {
			case 'male':
				return 'bg-green-300'
			case 'female':
				return 'bg-violet-300'
			case 'hermaphrodite':
				return 'bg-yellow-300'
			default:
				return 'hidden'
		}
	}

	return (
		<>
			<div
				onClick={() => setShowModal(true)}
				className='flex flex-col gap-y-4 rounded-md bg-white p-4 text-gray-900 shadow-md border border-gray-300 hover:bg-gray-50'
			>
				<div>
					<span className='text-xl font-bold'>{name}</span>
				</div>

				<div className='flex flex-row gap-x-4 text-center'>
					<div className='flex flex-col'>
						<span className='border border-black rounded-full p-1'>
							{checkValue(height, '?', true)}
						</span>
						<span>height</span>
					</div>
					<div className='flex flex-col'>
						<span className='border border-black rounded-full p-1'>
							{checkValue(mass, '?', true)}
						</span>
						<span>mass</span>
					</div>
				</div>

				<div className='flex flex-row gap-x-2'>
					<span className={defineStyles(gender) + ' rounded px-1'}>
						{gender}
					</span>
					{birth_year !== 'unknown' && (
						<span className='bg-cyan-300 rounded px-1'>{birth_year}</span>
					)}
				</div>
			</div>
			{showModal && <Modal toggleModal={setShowModal} character={character} />}
		</>
	)
}
