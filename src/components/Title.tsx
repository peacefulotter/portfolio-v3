import { playfair } from "~/fonts"


const Title = ( { title }: { title: string } ) => {
    return (
        <div className={`${playfair.variable} font-Playfair text-9xl mb-4 text-[var(--text-highlight)]`}>{title}</div>
    )
}

export default Title;