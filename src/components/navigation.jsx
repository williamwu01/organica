import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import CompanyLogo from '../assets/logo-svg.png';
import Hamburger from '../components/Hamburger';

export default function Navigation() {
	const { language } = useContext(LanguageContext); 
	const translationText = translationData[language] || translationData['mn'];

	return (
		<header className='fixed top-0 w-full shadow-md bg-white z-50'>
			<div className='bg-[#525252] w-full'>
				<div className='relative px-4 w-full xl:max-w-[1200px] mx-auto text-white text-[14px] py-2'>
					<div className='w-full flex justify-between'>
						<nav className='hidden sm:flex gap-5 items-center'>
							<a className='hover:opacity-80 duration-300' href="tel:+97699999999">+(976) 99114426</a>
							<a className='hover:opacity-80 duration-300' href="mailto:example@gmail.com">nomin1124@gmail.com</a>
						</nav>
						<nav className='w-full sm:w-auto flex items-center gap-5'>
							<a className='hidden sm:block hover:opacity-80 duration-300' href="/#about-us">{translationText.navigationUpper1}</a>
							<a className='hidden sm:block hover:opacity-80 duration-300' href="/contact">{translationText.navigationUpper2}</a>
							<div className='w-full sm:w-auto flex justify-between sm:justify-start sm:gap-2'>
								<a className='hover:opacity-80 duration-300' href="">
									<img className='rounded-sm w-fit h-[20px]' src="./english-lang.svg" alt="EN" />
								</a>
								<a className='hover:opacity-80 duration-300' href="">
									<img className='rounded-sm w-fit h-[20px]' src="./mongolian-lang.png" alt="MN" />
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<div className='px-4 relative max-w-[1200px] mx-auto py-6 text-[14px] flex justify-between items-end'>
				<a href="/">
					<img className='w-auto h-[48px]' src={CompanyLogo} alt="" />
				</a>
				<nav className='hidden md:flex gap-6 items-center'>
					<a href="/">{translationText.navigation1}</a>
					<a href="/beverages">{translationText.navigation2}</a>
					<a href="/food">{translationText.navigation3}</a>
					<a href="/household">{translationText.navigation4}</a>
					<a className='bg-[#FF6D00] px-6 py-3 text-white' href="">{translationText.navigationButton}</a>
				</nav>
			</div>
			<Hamburger />
		</header>
	)
}
