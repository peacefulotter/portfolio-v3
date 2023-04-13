

import { useInView } from 'react-intersection-observer';

import Title from './Title';
import Emoji from './Emoji';
import { IconType } from 'react-icons';

interface IHeader {
    title: string;
    Icon: IconType;
    subtitle?: string;
}

const Header = ( { title, Icon, subtitle }: IHeader ) => {
    const [ref, inView] = useInView();

    return (
        <div ref={ref} className='flex gap-5 my-4'>
           <Title title={title} />
           <Emoji Icon={Icon} inView={inView} />
           { subtitle && <div className='subtitle'>{subtitle}</div> }
        </div>
    )
}

export default Header;