import { React, useState } from 'react';
import { Search, Label, Input } from '../../pages/Main/styles';

function SearchComponent(onSearch) {
  const [query, setQuery] = useState('');

  return (
    <Search>
      <Label htmlFor="query">Buscar</Label>
      <Input 
        type="search" 
        name="query" 
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
      <button type="button">Limpar</button>
      <button type="button" onClick={() => onSearch(query)}>Procurar</button>
    </Search>
  );
}

export default SearchComponent;

