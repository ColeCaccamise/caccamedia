import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://caccamedia.com';
const description =
	'Caccamedia owns and operates a collection of internet businesses founded by Cole Caccamise, spanning YouTube content and indie game development. Get in touch at cole@caccamedia.com.';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Caccamedia',
		template: '%s · Caccamedia',
	},
	description,
	applicationName: 'Caccamedia',
	keywords: [
		'Caccamedia',
		'Caccamedia LLC',
		'Cole Caccamise',
		'Hyperapta Studios',
		'indie game studio',
		'internet businesses',
	],
	authors: [{ name: 'Cole Caccamise', url: 'https://colecaccamise.com' }],
	creator: 'Cole Caccamise',
	publisher: 'Caccamedia LLC',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: siteUrl,
		siteName: 'Caccamedia',
		title: 'Caccamedia',
		description,
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Caccamedia',
		description,
		creator: '@colecaccamise',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Caccamedia',
	legalName: 'Caccamedia LLC',
	url: siteUrl,
	email: 'cole@caccamedia.com',
	description,
	founder: {
		'@type': 'Person',
		name: 'Cole Caccamise',
		url: 'https://colecaccamise.com',
		sameAs: [
			'https://x.com/colecaccamise',
			'https://youtube.com/@ColeCaccamise',
		],
	},
	subOrganization: [
		{
			'@type': 'Organization',
			name: 'Hyperapta Studios',
			url: 'https://hyperapta.com',
		},
	],
	sameAs: ['https://x.com/colecaccamise'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`dark:dark bg-app-bg text-high-contrast-text ${inter.className}`}
			>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
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
