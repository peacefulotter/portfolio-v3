import { useEffect, useRef, useState } from 'react';

import Wrapper from '~/components/Wrapper';
import NavBar from '~/components/Navbar';
import Home from '~/components/Home';
import Work from '~/components/Work';
import Projects from '~/components/Projects/Projects';
import Contact from '~/components/Contact';

import { Elt, Page } from '~/types';


const pages: Page[] = [
	{ name: 'Home',     id: 'home', 	  Component: Home },
	{ name: 'Work', 	  id: 'work', 	  Component: Work },
	{ name: 'Projects', id: 'projects', Component: Projects },
	{ name: 'Contact',  id: 'contact',  Component: Contact },
]


function App() 
{
	const ref = useRef<Elt>(null)
	const [index, setIndex] = useState<number>(0)

	useEffect( () => {
		if ( ref.current === null ) return;
		const { children } = ref.current;

		const calcIndex = () => {
			let i = -1;
			let val = 9999;
			[].forEach.call( children, (elt: any, j: number) =>
			{
				const { top } = elt.getBoundingClientRect();
				const abs = Math.abs(top)
				if ( abs < val )
				{
					i = j;
					val = abs
				}
			} )
			setIndex(i)
		}

		calcIndex()
		document.addEventListener('scroll', calcIndex)
		return () => document.removeEventListener('scroll', calcIndex)
	}, [])

	return (
		<div className="App" >
			<NavBar index={index} pages={pages}/>
			<div className="app-wrapper" ref={ref}>
				{ pages.map( ( { Component, id }, i ) =>
					<Wrapper id={id} key={`wrapper-${i}`}>
						<Component />
					</Wrapper> 
				) }
			</div>
		</div>
	);
}

export default App;
