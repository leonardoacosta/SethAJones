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
			<div className='flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative'>
				<div>
					<nav className='my-8 animate-fade-in mix-blend-difference'>
						<ul className='flex items-center justify-center gap-4'>
							{navigation.map((item) => (
								<Link key={item.href} href={item.href} className='text-sm duration-500 text-zinc-300 hover:text-zinc-300'>
									{item.name}
								</Link>
							))}
						</ul>
					</nav>
				</div>
				<div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />

				<h1 className='mix-blend-difference z-10 text-3xl font-signature text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
					Seth A. Jones
				</h1>

				<div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
				<div className='my-16 text-center animate-fade-in mix-blend-difference'>
					<h2 className='text-sm text-zinc-300'>Seth Jones - fall in love with the process</h2>
					<h2 className='w-full pt-8' onClick={scrollToEnd}>
						<ChevronDown className='text-white animate-bounce mx-auto' />
					</h2>
				</div>
				<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
				<Image
					src='/imgs/16.jpg'
					alt='Seth Jones'
					height={2000}
					width={2000}
					className='animate-title  object-center mx-auto w-1/2 lg:max-w-xl filter mix-blend-difference opacity-60'
				/>
			</div>
			<div className='px-6 my-24 md:max-w-4xl mx-auto text-zinc-300'>
				<h1 className='text-xl my-2 text-zinc-300 text-center'>About</h1>
				<p>
					Seth Jones a Actor and Voice Actor on the rise. Seth has been working in voice over since 2018 and his most notable
					roles are providing additional voice over for the indie film Ark Exodus, commercial work, and continuing work at
					Crunchyroll where he has been apart of <u>Attack on Titan</u>, <u>One Piece</u>, <u>Chainsaw Man</u>,{' '}
					<u>Arifureta Season 2</u>, <u>Fruit of Evolution</u>, <u>Laid Back Camp</u>, <u>Black Summoner</u>,{' '}
					<u>I’m the Villainess</u>, and <u>Dead Mount Death Play</u>.
				</p>
				<br />
				<p>
					He continues to push forward by constantly learning and improving, being trained by talent such as{' '}
					<u>Victoria Atkin</u>,<u>Tabitha Ray</u>, <u>Max Hambleton</u>, <u>Jason Lord</u>, <u>Morgan Berry</u>,{' '}
					<u>Jose Sandoval</u>, and <u>Joel McDonald</u>. The goals he is trying to achieve are to be working with AAA
					studios in gaming and animation, as well as work in commercial and e-learning settings. Seth has always had a
					passion for animation/pop culture, Anime, comics, and video games. Drawn in by talent that has the power to move
					people, to evoke emotions, and to have actors connect people with the characters through acting alone is what
					inspires Seth to pursue voice acting. “Fall in love with the process”, is a phrase he continues to say to help keep
					himself and others motivated to keep pursuing voice acting.
				</p>
				<br />
				<p>
					When Seth isn’t working towards voice over, he is a gamer, typically playing a RPG, avid anime watcher, Anime
					Convention coordinator/consultant, and looks for motivational quotes or phrases that he likes to then put out into
					the world himself as he feels that if you keep preaching positivity and help spread it, you in turn not only help
					yourself, but also elevate others around you to do and be better. “It’s all about falling in love with the process,
					it’s where you will be 90% of your time.”
				</p>
				<br />
				<Link href='/resume.docx' className='text-xl duration-500 text-zinc-400 hover:text-zinc-300 hover:underline'>
					Resume
				</Link>
			</div>
			<div className='w-screen h-1/2 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative'>
				<h1 className='mx-auto px-6 my-24 md:max-w-4xl mix-blend-difference z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline  text-center whitespace-nowrap bg-clip-text '>
					Follow
				</h1>
				<nav className='my-16 animate-fade-in mix-blend-difference'>
					<ul className='flex items-center justify-between mx-auto px-6 my-24 md:max-w-4xl'>
						<Link
							href='https://www.instagram.com/sethj.va'
							className='text-sm duration-500 text-white hover:text-zinc-300 hover:underline'
						>
							Instagram
						</Link>
						<Link
							href='https://twitter.com/VaSethj'
							className='text-sm duration-500 text-white hover:text-zinc-300 hover:underline'
						>
							Twitter
						</Link>
						<Link
							href='https://www.tiktok.com/@sethjonesva'
							className='text-sm duration-500 text-white hover:text-zinc-300 hover:underline'
						>
							TikTok
						</Link>
						<Link
							href='https://www.threads.net/@sethjonesva'
							className='text-sm duration-500 text-white hover:text-zinc-300 hover:underline'
						>
							Threads
						</Link>
					</ul>
				</nav>
				<div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
				<Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
				<div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
			</div>
			<div className='px-6 my-24 md:max-w-4xl mx-auto text-zinc-300'>
				<h1 className='text-xl my-2 text-zinc-300  text-center'>Headshots</h1>
				<div className='flex gap-2 flex-wrap justify-center'>
					{/* <Image
						src='/imgs/1.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
					<Image
						src='/imgs/5.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/> */}
					<Image
						src='/imgs/8.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
					{/* <Image
						src='/imgs/16.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/> */}
					<Image
						src='/imgs/21.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
					{/* <Image
						src='/imgs/22.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/> */}
					<Image
						src='/imgs/24.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
					{/* <Image
						src='/imgs/26.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/> */}
					<Image
						src='/imgs/28.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>

					<Image
						src='/imgs/35.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
					<Image
						src='/imgs/32.jpg'
						alt='Seth Jones'
						height={2000}
						width={2000}
						className='h-96 object-scale-down inline-block w-auto'
					/>
				</div>
			</div>

			<div className='px-6 my-24 md:max-w-4xl mx-auto text-zinc-300'>
				<h1 className='text-xl my-2 text-zinc-300 text-center'>Reels</h1>
				<div className='md:flex gap-4'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/9dVezHcaNho'
						title='YouTube video player'
						// frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						// allowfullscreen
					></iframe>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/KADkbBpdlVo'
						title='YouTube video player'
						// frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						// allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
}
