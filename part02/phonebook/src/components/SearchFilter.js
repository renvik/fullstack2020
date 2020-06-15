import React from 'react'

const SearchFilter = ({ filter, handler }) => {
  return (
    <div>
        filter by name: <input value={filter} onChange={handler} />
    </div>
  )
}

export default SearchFilter