'use client';
import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const navigation = [
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' }
];

export default function Home() {
	const scrollToEnd = () =>
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});

	return (
		<>
			<div className='flex flex-col  items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative'>
				<Image
					src='/imgs/DSC05266-32.jpg'
					alt='Seth Jones'
					height={2000}
					width={2000}
					className='animate-title absolute right-0 w-1/2 lg:max-w-xl filter mix-blend-difference opacity-60'
				/>
				<Image
					src='/imgs/DSC05123-16.jpg'
					alt='Seth Jones'
					height={2000}
					width={2000}
					className='animate-title absolute left-0 w-1/2 lg:max-w-xl filter mix-blend-difference opacity-60'
				/>

				<nav className='my-16 animate-fade-in mix-blend-difference'>
					<ul className='flex items-center justify-center gap-4'>
						{navigation.map((item) => (
							<Link key={item.href} href={item.href} className='text-sm duration-500 text-white hover:text-zinc-400'>
								{item.name}
							</Link>
						))}
					</ul>
				</nav>
				<div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
				<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
				<h1 className='mix-blend-difference z-10 text-3xl font-signature text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
					Seth A. Jones
				</h1>

				<div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
				<div className='my-16 text-center animate-fade-in mix-blend-difference'>
					<h2 className='text-sm text-zinc-400'>Seth Jones a Actor and Voice Actor on the rise.</h2>
					<h2 className='w-full pt-8' onClick={scrollToEnd}>
						<ChevronDown className='text-white animate-bounce mx-auto' />
					</h2>
				</div>
			</div>
			<div>Test</div>
		</>
	);
}
