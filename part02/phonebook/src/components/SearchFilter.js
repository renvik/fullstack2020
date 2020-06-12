import React from 'react'

const SearchFilter = ({ filter, handler }) => {
  return (
    <div>
        results: <input value={filter} onChange{handler} />
    </div>
  )
}

export default SearchFilter