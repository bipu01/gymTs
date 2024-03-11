export type textProp ={
    text:string
}

export type bodyProp ={
    paragraph: string,
    heading: string,
    highlitedText?:string
}

export type trainerCardProp ={
    name: string,
    availability: {from:string, to:string},
    image?:string,
    age?:number,
    ph?: number
}

// interface time{
//     from:number,
//     to : number
// }