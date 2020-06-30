import React from 'react'
// parametrina filter handleFilter. Filter on useStaten getteri ja setFilter setteri
// input-fieldin perusteella asettaa hakusana ja asettaa tilan state hookissa
// tutki tämän ja appin vuorovaikutus ja käytetyt termit, vertaa alkuperäiseen ja phonebookkiin

const Haku = ( {filter, handleFilter}) => {
// kun kenttään kirjoitetaan asetetaan filterille arvo ja kutsutaan tapahtumankäsittelijää handleFilter
// onChange on tapahtumankäsittelijän määrittelevä attribuutti, joka saa parametriksi tapahtumankäsittelijän handleFilter
// nimentä tulee olla sama kuin appissa, komponentit sisällä sama const-rivillä ja returnissa    
    return (
        <div>
            find a country <input value={filter} onChange={handleFilter}/>

        </div>
    )
}

export default Haku