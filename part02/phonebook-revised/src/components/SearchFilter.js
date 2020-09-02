import React from 'react'
// tämä komponentti vastaa hakufiltteri-kentästä
// saa argumenttina hakukentän arvon (tässä filter) ja tapahtumankäsittelijän:
// -> kun kentän arvo (onChange) muuttuu niin kutsutaan handleFilterChange-funktiota (tässä handler)

const SearchFilter = ({ filter, handler}) => {
    return (
        <div>
            filter by name: <input value={filter} onChange={handler} />
        </div>
    )
}

export default SearchFilter