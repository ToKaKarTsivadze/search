import "./App.css";
import Search from "./components/search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechApi from "./components/APIs/techApi";
import StoreApi from "./components/APIs/storeApi";
import PeopleApi from "./components/APIs/peopleApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SearchContext } from "./components/useContext/context";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchContext.Provider value={{ search, setSearch }}>
          <BrowserRouter>
            <Search />
            <Routes>
              <Route path="/tech" element={<TechApi />} />
              <Route
                path="/store"
                element={<StoreApi searchingFor={search} />}
              />
              <Route path="/people" element={<PeopleApi />} />
            </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
