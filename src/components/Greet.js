import React from "react";

// function Greet(){
//         return <h1> Hallo Nupnup </h1>
// }

const Greet = probs => {
        // console.log(props)
        const {name, heroName} = probs
        return (
                <div>
                        <h1>Hallo {name} a.k.a {heroName}</h1> 
                </div>
                ) 
}

export default Greet // cara (1) supaya komponennnya bisa diakses dan dipanggil di folder lain