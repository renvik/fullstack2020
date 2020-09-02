import React from 'react'
// kuten Query, EI vaadi muutoksia

const SearchFilter = ({ filter, handleFilter }) => {

    return (
        <div>
            find countries <input value={filter} onChange={handleFilter} />
        </div>
    )
}

export default SearchFilter