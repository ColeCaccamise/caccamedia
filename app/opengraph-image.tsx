import { ImageResponse } from 'next/og';

export const alt = 'Caccamedia — internet businesses founded by Cole Caccamise';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundColor: '#0a0a0a',
					color: '#fafafa',
					padding: 96,
					fontFamily: 'sans-serif',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div
						style={{
							fontSize: 96,
							fontWeight: 700,
							letterSpacing: '-0.04em',
						}}
					>
						Caccamedia
					</div>
					<div
						style={{
							fontSize: 40,
							color: '#a1a1a1',
							marginTop: 28,
							maxWidth: 900,
						}}
					>
						Internet businesses founded by Cole Caccamise
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						fontSize: 30,
						color: '#a1a1a1',
					}}
				>
					<div style={{ display: 'flex' }}>caccamedia.com</div>
					<div style={{ display: 'flex' }}>cole@caccamedia.com</div>
				</div>
			</div>
		),
		{ ...size }
	);
}
