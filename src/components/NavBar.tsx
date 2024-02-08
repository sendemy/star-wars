'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logoImage from '../../public/logo.png'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<div className='flex justify-center border-b-2 bg-[#1F2A63] border-black text-white'>
			<div className='flex flex-row justify-between w-[1440px] max-laptop-l:mx-16 max-mobile:mx-8'>
				<span>
					<Image src={logoImage} width={75} height={45} alt='Logo' />
				</span>
				<nav className='flex flex-row justify-center items-center text-lg gap-8'>
					<Link
						className={pathname === '/' ? 'border-b-2 border-white' : ''}
						href={'/'}
					>
						Home
					</Link>
					{/* underlining the current page */}
					<Link
						className={
							pathname === '/characters' ? 'border-b-2 border-white' : ''
						}
						href={'/characters'}
					>
						Characters
					</Link>
				</nav>
			</div>
		</div>
	)
}
