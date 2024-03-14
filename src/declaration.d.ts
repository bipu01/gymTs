export type textProp ={
    text?:string
}

export type activeBtnProp ={
    text:string,
    styled:boolean
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
}

export type svg={
    fill:string,
}

// interface time{
//     from:number,
//     to : number
// }
