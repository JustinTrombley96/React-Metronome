import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import BasicCard from '../components/Card';

export const useDarkMode = () => {
	const [ darkValue, setDarkValue ] = useLocalStorage('Dark Key');
	useEffect(
		() => {
			let body = document.querySelector('body', BasicCard);
			darkValue ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
		},
		[ darkValue ],
	);
	return [ darkValue, setDarkValue ];
};
