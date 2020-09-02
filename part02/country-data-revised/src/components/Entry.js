import React from 'react'
//komponentti renderöi maan tiedot, jotka se saa argumenttina Country-komponentilta
//first on muuttujan nimi (esim. capital) ja second on arvo (esim. Stockholm)
const Entry = ( {first, second} ) => {
    return (
    <div>
      <p>{first} {second}</p>
    </div>    
    )
}

export default Entry