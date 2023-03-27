import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const Clock = () => {
	let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	const [currTime, setCurrTime] = useState(time);

	const updateTime = () => {
		time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		setCurrTime(time);
	};

	useEffect(() => {
		const interval = setInterval(updateTime, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<p className='font-semibold'>
			<FontAwesomeIcon className='mr-1' icon={faClock} /> {currTime}
		</p>
	);
};
