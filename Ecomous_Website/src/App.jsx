// https://themesflat.co/html/ecomus/index.html
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { Provider } from 'react-redux'
import { store } from "./store/main";
import { Toaster } from "@/components/ui/toaster"
import { Layout } from "./routes/mainRoute";
import { RouterProvider } from "react-router-dom";



function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Layout} />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
