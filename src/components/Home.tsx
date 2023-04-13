import { TbPlant, TbPlant2 } from 'react-icons/tb'

import Title from "./Title";

const Home = () => {
    return (
        <div className='flex flex-col items-center -mt-28'>
           <TbPlant2 className='stroke-1 text-6xl text-[var(--text-color)]'/>
           <Title title='Nathan Maire' />
           <div className="text-xl mt-2">Computer Science MSC. Student <span>@ <a href='https://www.epfl.ch/en/'>EPFL</a></span></div>
        </div>
    )
}

export default Home;