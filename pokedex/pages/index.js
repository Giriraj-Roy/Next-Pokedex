import React,{ useState } from "react"

export default function Home({data}) {

  // const [disable, setDisable] = useState(false)
  // console.log(pokemon)

  return (
        <>
          sdd
          {data}
        </>


  )
}

export async  function getStaticProps(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    console.log(response);
    const result = response ? response.json() : null;

    // const res = response.then ( function (response) {
    //   return response.json()
    // })
    // const res = result.then(function (results){ return results})
    // console.log(res);

    return {
      props : {
        data : response.json() || null,
      },
    }
}






// export async function getStaticProps(context){
//   const pokemon
//   let pokemon = ["haha"];
//   const results = [];
//   const [results, setResults] = useState([]);

//   try{

//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
//     const {results} = response.json();
//     console.log(results.data);
//     const pokemon = {results && ({results.map ( (result, ind) => {
//       const index = ("00" + (ind+1)).slice(-3);
//       const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`
//       return{
//         ...result,
//         image
//       }
//     })}) : NULL}
//   }
//   catch(err){
//     console.log(err);
//   }
//   return{
//     props : results/*{pokemon}*/,
//   }
// }