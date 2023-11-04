import { createContext } from "react";

interface SearchContextValue {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<undefined | SearchContextValue>(
  undefined
);
