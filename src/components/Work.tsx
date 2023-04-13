

import { useState } from 'react';
import { FiBriefcase, FiNavigation2 } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

import Title from './Title';
import Emoji from './Emoji';
import Header from './Header';

interface IWork {
    title: string;
    company: string;
    description: string[];
    date: string;
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

const works: IWork[] = [
    { title: 'Student Programmer', company: 'LiRA', date: '02/2022 - 07/2022', description: [lorem, lorem]},
    { title: 'IT Group Work', company: 'CESI', date: '2018 & 2019', description: [lorem, lorem, lorem]},
    { title: 'Observation Internship', company: 'Finquest', date: 'May 2017', description: [lorem, lorem, lorem, lorem]},
]


const WorkBtn = ( { work, active, onClick }: any ) => {
    return (
        <div className={`p-3 cursor-pointer border-b-2 transition-colors ${active ? 'text-[var(--5)] border-[var(--5)]' : 'border-transparent'}`} onClick={onClick}>
            {work.company}
        </div>
    )
}

const Work = () => {

    const [ref, inView] = useInView();
    const [index, setIndex] = useState<number>(0)

    const onClick = (i: number) => () => setIndex(i)

    const work = works[index]

    return (
        <>
        <Header title='Work' Icon={FiBriefcase} subtitle='experiences' />
        <div className='flex gap-16 my-6'>
            <div className='flex flex-col gap-5'>
                { works.map( (work: IWork, i: number) => 
                    <WorkBtn key={`workbtn${i}`} work={work} active={i === index} onClick={onClick(i)}/>
                ) }
           </div>
           <div>
               <div>
                    <div className='text-2xl'>
                        <span>{work.title}</span> @ {work.company}
                    </div>
                   <div className='text-[var(--3)] mb-5 text-lg'>
                        {work.date} 
                   </div>
               </div>
               <div className='h-64'>
                    { work.description.map( (desc: string, i: number) => 
                        <div 
                            key={`workdesc${i}`} 
                            className='flex gap-5 my-4 max-w-3xl'
                        >
                            <span className='mt-1'><FiNavigation2 className='rotate-90 fill-[var(--6)]'/></span>
                            <div>{desc}</div>
                        </div>
                    )}
               </div>
           </div>
        </div>
        </>
    )
}

export default Work;