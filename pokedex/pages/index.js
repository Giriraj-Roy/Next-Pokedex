import React,{ useState } from "react"

export default function Home(/*{data}*/) {

  // const [disable, setDisable] = useState(false)
  const [fruit, setFruit] = useState('')
  const addFruit = async () => {
    const response = await fetch('/api/customers',
    {
      method: "POST",
      body: JSON.stringify( {fruit : fruit}),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  return (
        <>
          <input
          type='text'
          value={fruit}
          onChange = { (e) => setFruit(e.target.value)}
          />
          {/* {data} */}
          <button type="submit" onClick={addFruit}>Add Fruit</button>
        </>


  )
}

// export async  function getStaticProps(){
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
//     console.log(response);
//     const result = response ? response.json() : null;


//     return {
//       props : {
//         data : response.json() || null,
//       },
//     }
// }
