import Dropdown from './Dropdown'

interface Props {
	onFilterChange: (key: string, value: string) => void
}

export default function Filters({ onFilterChange }: Props) {
	function handleDropdownClick(key: string, value: string) {
		onFilterChange(key, value)
	}

	return (
		<div className='flex flex-row gap-4 my-8 items-center'>
			<div className='font-bold'>Filter by:</div>
			<Dropdown
				name='Gender'
				keyName='gender'
				menuItems={{
					all: 'all',
					female: 'female',
					hermaphrodite: 'hermaphrodite',
					male: 'male',
					none: 'none',
					'no gender': 'n/a',
				}}
				onButtonClick={handleDropdownClick}
			/>
			<Dropdown
				name='Eye color'
				keyName='eye_color'
				menuItems={{
					all: 'all',
					black: 'black',
					blue: 'blue',
					brown: 'brown',
					gold: 'gold',
					gray: 'gray',
					hazel: 'hazel',
					orange: 'orange',
					pink: 'pink',
					red: 'red',
					unknown: 'unknown',
					white: 'white',
					yellow: 'yellow',
				}}
				onButtonClick={handleDropdownClick}
			/>
			<Dropdown
				name='Skin color'
				keyName='skin_color'
				menuItems={{
					all: 'all',
					blue: 'blue',
					brown: 'brown',
					dark: 'dark',
					fair: 'fair',
					gold: 'gold',
					green: 'green',
					grey: 'grey',
					light: 'light',
					metal: 'metal',
					orange: 'orange',
					pale: 'pale',
					red: 'red',
					tan: 'tan',
					unknown: 'unknown',
					white: 'white',
					yellow: 'yellow',
				}}
				onButtonClick={handleDropdownClick}
			/>
		</div>
	)
}
