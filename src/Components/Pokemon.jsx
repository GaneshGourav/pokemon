export const Pokemom = ({pokemonData}) =>{

    return <>
    {
        pokemonData.map((el)=>{
         return    <div>
            <h1>pokemon tiitle</h1>
            <img src="" alt="" />
            <h1>{el.name}</h1>
        </div>
        })
    }
   
    </>
}