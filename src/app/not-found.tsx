import Link from 'next/link'

export default function Custom404() {
	return (
		<main className='flex h-full flex-col items-center justify-center gap-4'>
			<h2 className='text-xl font-semibold'>404 Not Found</h2>
			<p>Could not find the requested invoice.</p>
			<Link
				href='/'
				className='inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 mx-auto mb-12 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
			>
				Home
			</Link>
		</main>
	)
}
