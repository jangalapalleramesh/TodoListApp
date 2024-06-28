import React from 'react'

const SearchBar = ({filterText,onSetFilterText}) => {
  return (
  <form className="form-group">        
    <div class="input-group mb-3">
      <input type="text" 
        className="form-control" 
        placeholder="Search.................." 
        autoFocus
        required
        value = {filterText}
        onChange={(e) => onSetFilterText(e.target.value)}
        />
          
    </div>
  </form>
  )
}

export default SearchBar
