export type textProp ={
    text?:string
}

export type bodyProp ={
    paragraph: string,
    heading: string,
    highlitedText?:string,

    trainerTitle:string,
    trainerName: string,
    trainerAvailability: {from:string, to:string},
    trainerImage?:string,
    trainerAge?:number,
    trainerPh?: number,

    btnText?:string
}

export type programsWeOfferProps ={
    paragraph: string,
    heading: string,
    highlitedText?:string,

    heroImg:string,

    trainerTitle:string,
    trainerName: string,
    trainerAvailability: {from:string, to:string},
    trainerImage?:string,
    trainerAge?:number,
    trainerPh?: number,

    btnText?:string
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
