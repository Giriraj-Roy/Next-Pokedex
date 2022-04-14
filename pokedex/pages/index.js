// import Layout from '../components/Layout'

import React,{ useState } from "react"

export default function Home({pokemon}) {

  const [disable, setDisable] = useState(false)

  console.log(pokemon)
  return (
        <>
        Pokedex
        {pokemon}
        </>


  )
}

export async function getStaticProps(context){
  // const pokemon
  let pokemon = ["haha"];
  let results = [];
  // const [results, setResults] = useState([]);

  try{

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    results = response.json();
    // console.log(result.data);
    pokemon = results.map( (result, ind) => {
      const index = ("00" + (ind+1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`
      return{
        ...result,
        image
      }
    })
  }
  catch(err){
    console.error(err);
  }
  return{
    props : {pokemon},
  }
}
