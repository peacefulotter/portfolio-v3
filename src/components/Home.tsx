import { TbPlant, TbPlant2 } from 'react-icons/tb'

import Title from "./Title";

const Home = () => {
    return (
        <>
        <div className='background-img absolute w-full h-full bg-no-repeat' style={{background: 'url(./bg.png)'}}></div>
        <div className='flex flex-col items-center -mt-28 py-13 px-14 backdrop-blur'>
           <TbPlant2 className='stroke-1 text-6xl text-[var(--text-color)]'/>
           <Title title='Nathan Maire' />
           <div className="text-xl mt-2">Computer Science MSC. Student <span>@ <a href='https://www.epfl.ch/en/'>EPFL</a></span></div>
        </div>
        </>
    )
}

export default Home;