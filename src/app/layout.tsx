import Navbar from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Star Wars App',
	description: 'Star Wars App',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' style={{ height: '100%' }}>
			<body className={`${inter.className} flex flex-col min-h-screen m-0`}>
				<div className='flex flex-col w-full h-screen'>
					<Navbar />
					<main className='flex-1'>{children}</main>
				</div>
			</body>
		</html>
	)
}
