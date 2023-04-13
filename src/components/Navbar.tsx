
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'
import { SiLeetcode, SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'

import { roboto, robotoBold } from '~/fonts';
import { Page } from '~/types';

interface INav {
    index: number;
    pages: Page[];
}

const NavBtn = ( { page, i, active, onClick }: any ) => {

    const { id, name } = page;

    // font-size: 1.3em;
    return (
        <div 
            className={`flex flex-col text-[var(--8)] cursor-pointer hover:text-[var(--5)] ${active ? 'font-extrabold' : ''}`}
            onClick={onClick(id)}
        >
            <span className={`${active ? robotoBold.variable + ' font-RobotoBold' : roboto.variable + ' font-Roboto'}`}>0{i + 1}</span>
            {name}
        </div>
    )
}

const NavSocial = ( { Icon, href }: { href: string, Icon: IconType } ) => {
    return (
        <a 
            className='group cursor-pointer'
            target="_blank" 
            href={href} 
            rel="noopener noreferrer" 
        >
            <Icon className='text-[var(--6)] text-3xl hover:text-[var(--5)]' />
        </a>
    )
}

const NavBar: FC<INav> = ( { pages, index } ) => {

    const onClick = (id: string) => () => {
        window.scrollTo( {
            top: (document.getElementById(id) as any).offsetTop,
            behavior: 'smooth',
        } );
    }
    
    return (
        <div className='fixed inset-0 flex flex-col justify-between h-full w-min py-10 px-10 text-xl'>
            <div className='flex flex-col gap-10'>
                { pages.map( (page: Page, i: number) => 
                    <NavBtn key={`navbtn${i}`} page={page} i={i} active={i === index} onClick={onClick}/>
                ) }
            </div>
            <div className='flex flex-col gap-10 ml-2'>
                <NavSocial href='https://github.com/PeacefulOtter/' Icon={SiGithub} />
                <NavSocial href='https://www.linkedin.com/in/natmai/' Icon={SiLinkedin} />
                <NavSocial href='https://leetcode.com/peacefulotter/' Icon={SiLeetcode} />
                <NavSocial href='https://www.instagram.com/ssh.nathan/' Icon={SiInstagram} />
            </div>
        </div>
    )
}

export default NavBar;