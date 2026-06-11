'use client';

import { useEffect, useState } from 'react';

export default function CopyrightYear({ initialYear }: { initialYear: number }) {
	const [year, setYear] = useState(initialYear);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return <>{year}</>;
}
