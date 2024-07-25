import Link from 'next/link';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
	const ventures = [
		{
			name: 'YouTube | Cole Caccamise',
			description: 'Aesthetic tech videos.',
			url: 'https://youtube.com/@ColeCaccamise',
		},
		{
			name: 'Founder Supply (launching soon)',
			description: 'Premium Framer templates for startups & founders. ',
			url: 'https://founder.supply/',
		},
		{
			name: 'SaaSKit UI (coming soon)',
			description: 'An open-source UI library for modern SaaS applications.',
			// url: 'https://saaskit.design/',
		},
	];

	return (
		<div className='flex flex-col gap-24 items-left px-4 py-8'>
			<div className='flex flex-col gap-4 px-3'>
				{' '}
				<h1 className='text-2xl font-semibold'>Caccamedia</h1>
				<p>
					Caccamedia owns and operates a collection of business ventures founded
					by{' '}
					<Link
						href='https://colecaccamise.com?ref=caccamedia'
						target='_blank'
						className='no-underline'
					>
						Cole Caccamise
					</Link>
					.
				</p>
			</div>

			<div>
				<div className='px-3'>
					<span className='block font-medium mb-6'>Ventures</span>
				</div>

				<div className='flex flex-col gap-4'>
					{ventures.map((venture) => (
						<Link
							key={venture.name}
							href={venture.url ? venture.url : '#'}
							target={venture.url ? '_blank' : ''}
							className={`p-3 no-underline rounded-md ${
								venture.url
									? 'cursor-pointer hover:bg-sidebar-bg opacity-100'
									: 'cursor-wait opacity-80'
							}`}
						>
							<span className='flex gap-1 items-center'>
								{venture.name} {venture.url && <ArrowTopRightIcon />}
							</span>
							<p>{venture.description}</p>
						</Link>
					))}
				</div>
			</div>

			<div className='flex gap-6 sm:gap-6 justify-center sm:justify-between items-center'>
				<span className='text-low-contrast-text'>
					&copy; {new Date().getFullYear()} Caccamedia
				</span>

				<div className='flex items-center gap-4'>
					<Link
						href='mailto:cole@caccamedia.com'
						className='no-underline text-low-contrast-text hover:text-high-contrast-text'
					>
						Contact
					</Link>
					<Link
						href='https://x.com/colecaccamise'
						target='_blank'
						className='no-underline text-low-contrast-text hover:text-high-contrast-text'
					>
						<FontAwesomeIcon
							icon={faXTwitter}
							width={20}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
