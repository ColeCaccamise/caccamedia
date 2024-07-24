import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Caccamedia',
	description:
		'Caccamedia owns and operates a collection of business ventures founded by Cole Caccamise.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`dark:dark bg-app-bg text-high-contrast-text inter.className`}
			>
				<main className='py-20 flex flex-col h-full items-center'>
					{children}
				</main>
				<GoogleAnalytics gaId='G-925P4MT7PB' />
			</body>
		</html>
	);
}
