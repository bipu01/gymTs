import { useEffect, useState } from "react"
import { imageProp } from "../../declaration"
import { Blurhash } from "react-blurhash";

export const ImageComponent = (prop:imageProp) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        const img= new Image();
        img.onload =()=>{
            setLoaded(true)
        }
        img.src=prop.src;

    },[prop.src])

  return (
    <>
        {!loaded &&
            (<Blurhash hash="9CBMV+~B" punch={1} height={"100%"} width={"100%"}/>)
        }
        {loaded &&
            (<img  className="object-cover h-100%" src={prop.src} alt={prop.alt} onLoad={() => setLoaded(true)} />)
        }
    </>
  )
}

export const HeroImageComponent  = (prop:imageProp) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        const img= new Image();
        img.onload  = () => {
            setLoaded(true);
        };
        img.src= prop.src

    },[prop.src])

    return (
        <>
        {!loaded && (<Blurhash hash="9CBMV+~B" punch={1} height={"100%"}  width={"100%"} />)}
        {loaded && 
            (<img className="object-cover h-100% xl:absolute xl:h-96 rounded-sm " src={prop.src} alt={prop.alt} onLoad={()=> setLoaded(true)}/>)
        }
        </>
    )


};

