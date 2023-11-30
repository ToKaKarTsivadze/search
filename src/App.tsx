import "./App.css";
import Search from "./components/search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechApi from "./components/APIs/recipesApi";
import StoreApi from "./components/APIs/storeApi";
import TodoApi from "./components/APIs/todoApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SearchContext } from "./components/useContext/context";
import RecipesApi from "./components/APIs/recipesApi";

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
              <Route path="/recipes" element={<RecipesApi />} />
              <Route
                path="/store"
                element={<StoreApi searchingFor={search} />}
              />
              <Route
                path="/todos"
                element={<TodoApi searchingFor={search} />}
              />
            </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
