import { createContext } from "react";

interface SearchContextValue {
  search: string | null;
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SearchContext = createContext<undefined | SearchContextValue>(
  undefined
);
