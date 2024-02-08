'use client'

import Image from 'next/image'
import Link from 'next/link'
import yodaImage from '../../public/hero.png'

export default function HomePage() {
	return (
		<section className='flex flex-row gap-8 py-8'>
			<div className='flex flex-col gap-16 max-md:gap-8'>
				<div className='text-[4.5rem] max-laptop-l:text-[3.5rem] max-md:text-[2.5rem]'>
					Find all your favorite characters
				</div>
				<div className='text-[2rem] max-laptop-l:text-[1.5rem] max-md:text-[1rem]'>
					You can find out all the information about your favorite characters
				</div>
				<Link
					className='text-xl text-black bg-yellow-400 w-fit py-4 px-12 rounded-lg shadow-button'
					href={'/characters'}
				>
					See more...
				</Link>
			</div>
			<div className='max-mobile:hidden'>
				<Image src={yodaImage} width={888} height={678} alt='Yoda image' />
			</div>
		</section>
	)
}
