import { Character } from '@/types'
import { checkValue } from '@/utils/functions'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	toggleModal: Dispatch<SetStateAction<boolean>>
	character: Character
}

export default function Modal({ toggleModal, character }: Props) {
	const {
		name,
		gender,
		eye_color,
		hair_color,
		skin_color,
		birth_year,
		height,
		mass,
	} = character

	function handleClose() {
		toggleModal(false)
	}

	function defineGender(gender: string) {
		switch (gender) {
			case 'male':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='64px'
						height='64px'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M15 3C15 2.44772 15.4477 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 8.55229 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41288L15.4671 9.94579C15.4171 9.99582 15.363 10.0394 15.3061 10.0767C16.3674 11.4342 17 13.1432 17 15C17 19.4183 13.4183 23 9 23C4.58172 23 1 19.4183 1 15C1 10.5817 4.58172 7 9 7C10.8559 7 12.5642 7.63197 13.9214 8.69246C13.9587 8.63539 14.0024 8.58128 14.0525 8.53118L18.5836 4H16C15.4477 4 15 3.55228 15 3ZM9 20.9963C5.68831 20.9963 3.00365 18.3117 3.00365 15C3.00365 11.6883 5.68831 9.00365 9 9.00365C12.3117 9.00365 14.9963 11.6883 14.9963 15C14.9963 18.3117 12.3117 20.9963 9 20.9963Z'
							fill='#0F0F0F'
						/>
					</svg>
				)
			case 'female':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='64px'
						height='64px'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z'
							fill='#0F0F0F'
						/>
					</svg>
				)
			case 'hermaphrodite':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#000000'
						height='64px'
						width='64px'
						version='1.1'
						id='Capa_1'
						viewBox='0 0 492.281 492.281'
					>
						<g>
							<path d='M393.543,222.367c0-61.457-37.81-114.24-91.385-136.335c26.762-13.945,48.077-37.672,58.517-67.387   c2.563-7.295-1.273-15.287-8.568-17.85c-7.294-2.565-15.286,1.273-17.85,8.568c-13.115,37.334-48.527,62.417-88.116,62.417   c-39.59,0-75.001-25.083-88.116-62.417c-2.563-7.294-10.551-11.133-17.85-8.568c-7.295,2.563-11.131,10.554-8.568,17.849   c10.439,29.716,31.753,53.442,58.517,67.388c-53.575,22.095-91.385,74.878-91.385,136.335c0,76.556,58.667,139.658,133.402,146.733   v48.899h-35.006c-7.732,0-14,6.268-14,14s6.268,14,14,14h35.006v32.282c0,7.732,6.268,14,14,14c7.732,0,14-6.268,14-14v-32.282   h35.004c7.732,0,14-6.268,14-14s-6.268-14-14-14h-35.004V369.1C334.876,362.025,393.543,298.923,393.543,222.367z M126.738,222.367   c0-65.839,53.563-119.403,119.402-119.403c65.839,0,119.402,53.564,119.402,119.403c0,65.838-53.564,119.401-119.402,119.401   C180.302,341.769,126.738,288.205,126.738,222.367z' />
							<path d='M326.842,222.367c0-44.499-36.202-80.702-80.701-80.702c-44.499,0-80.701,36.203-80.701,80.701   s36.202,80.701,80.701,80.701C290.64,303.068,326.842,266.865,326.842,222.367z M193.44,222.366   c0-29.06,23.642-52.701,52.701-52.701c29.059,0,52.701,23.642,52.701,52.702c0,29.059-23.642,52.701-52.701,52.701   C217.081,275.068,193.44,251.426,193.44,222.366z' />
						</g>
					</svg>
				)
			default:
				return false
		}
	}

	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-auto mx-auto max-w-3xl'>
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						<div className='flex items-start justify-between gap-4 p-5 border-b border-solid rounded-t'>
							<h3 className='text-3xl font-semibold'>{name}</h3>
							<button
								className='p-1 ml-auto bg-transparent border-0 text-black float-right outline-none focus:outline-none'
								onClick={handleClose}
							>
								<span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32px'
										height='32px'
										viewBox='0 0 24 24'
										fill='none'
									>
										<circle
											opacity='0.5'
											cx='12'
											cy='12'
											r='10'
											stroke='#000000'
											strokeWidth='1.5'
										/>
										<path
											d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
											stroke='#000000'
											strokeWidth='1.5'
											strokeLinecap='round'
										/>
									</svg>
								</span>
							</button>
						</div>
						<div className='flex flex-row items-center p-6 gap-x-4'>
							{defineGender(gender) && (
								<div className='relative items-center w-fit'>
									<span className='my-4 text-lg'>{defineGender(gender)}</span>
								</div>
							)}
							<div className='flex flex-col mx-auto gap-4'>
								<div className='flex flex-col'>
									<span>Height: {checkValue(height)}</span>
									<span>Mass: {checkValue(mass)}</span>
								</div>
								<div className='flex flex-col'>
									<span>Eye color: {checkValue(eye_color)}</span>
									<span>Hair color: {checkValue(hair_color)}</span>
									<span>Skin color: {checkValue(skin_color)}</span>
								</div>
								<div className='flex flex-col'>
									<span>Gender: {checkValue(gender)}</span>
									<span>Birth year: {checkValue(birth_year)}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</>
	)
}
