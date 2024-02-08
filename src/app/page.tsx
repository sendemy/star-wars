import HomePage from '@/components/HomePage'

export default function Home() {
	return (
		<div className='flex h-full justify-center text-white bg-gradient-to-b from-[#1F2A63] to-[#17002F]'>
			<div className='flex max-w-[1440px] max-laptop-l:mx-16 max-mobile:mx-8 w-full h-full'>
				<HomePage />
			</div>
		</div>
	)
}
