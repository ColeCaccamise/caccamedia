import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
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
				<PlausibleProvider
					domain='caccamedia.com'
					trackOutboundLinks={true}
				>
					<main className='py-20 flex flex-col h-full items-center'>
						{children}
					</main>
				</PlausibleProvider>
			</body>
		</html>
	);
}
