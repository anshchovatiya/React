// https://themesflat.co/html/ecomus/index.html
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Header from "./components/common/Header"
import TopBar from "./components/common/TopBar"
import HomePage from "./components/pages/HomePage";
import BottomNav from "./components/common/BottomNav";


function App() {

  return (
    <>
        <TopBar/>
        <Header/>
        <HomePage/>
        <BottomNav/>
    </>
  )
}

export default App
