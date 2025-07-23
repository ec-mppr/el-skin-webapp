import React, { useState, createContext, useMemo } from 'react';

export const SearchContext = createContext<{search: string, setSearch: (x: string) => void}>({
  search: '',  
  setSearch: () => null
});

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [search, setSearch] = useState<string>('');
  
  const contextValue = useMemo(() => ({
    search,
    setSearch
  }), [search]);

  return (
    <SearchContext value={contextValue}>
      {children}
    </SearchContext>
  );
};