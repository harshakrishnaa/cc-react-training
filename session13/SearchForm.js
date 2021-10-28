import React from "react";
import InputWithLabel from "./hooks/InputWithLabel";
const SearchForm=({onSearchInput, onSearchSubmit,searchTerm})=>(
<form onSubmit={onSearchSearchSubmit}>
<InputWithLabel 
   id="search" 
   value={searchTerm}
   onInputChange={onSearchSearchSubmit}
   type="text"
>
<strong>Search For Stories</strong> 
</InputWithLabel> 
<button disabled={!seearchTerm} type="submit"> 
Submit
</button>
</form>
);
export default SearchForm;