import {Ubuntu_Mono, Roboto, Merriweather} from 'next/font/google'

export const ubuntu = Ubuntu_Mono({
    weight: ['400','700'],
    subsets: ['latin'],
});
export const roboto = Roboto({
    weight: ['100','400','700', '500'],
    subsets: ['latin'],
});
export const merriweather = Merriweather({
    weight: ['300','400','700'],
    subsets: ['latin'],
});