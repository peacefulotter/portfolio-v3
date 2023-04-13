import { IconType } from "react-icons";

const Emoji = ( { Icon, inView }: { Icon: IconType, inView: boolean } ) => {
    return (
        <div className={`font-thin text-[var(--text-color)] text-5xl mt-3 ${inView ? 'inView' : ''} stroke-0`}><Icon /></div>    
    )
}

export default Emoji;