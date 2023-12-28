import Pokemons from "./pages/Pokemons";
import { Provider } from "react-redux";
import { store } from "@/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pokemons />,
    },
    {
      path: "pokemon-detail/:name",
      element: <PokemonDetail />,
    },
  ]);

  return (
    <Provider store={store}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
