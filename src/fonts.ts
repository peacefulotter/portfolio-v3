import { Roboto_Mono, Playfair_Display, Work_Sans } from 'next/font/google'

export const roboto = Roboto_Mono({
    weight: "300", 
    subsets: ['latin'],
    variable: '--font-roboto',
})

export const robotoBold = Roboto_Mono({
    weight: "500", 
    subsets: ['latin'],
    variable: '--font-roboto-bold',
})

export const playfair = Playfair_Display({
    weight: "500", 
    subsets: ['latin'],
    variable: '--font-playfair',
})

export const workSans = Work_Sans({
    weight: "500", 
    subsets: ['latin'],
    variable: '--font-worksans',
})