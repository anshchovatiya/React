import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import PostSection from "./components/postsection";

import PageContextProvider from "./store/pageContext";

function App() {
  return (
    <PageContextProvider>
      <div className="MainAppContainer bg-body-tertiary">
        <Header></Header>
        <div className="HeroSection">
          <Sidebar></Sidebar>
          <PostSection></PostSection>
        </div>
        <Footer></Footer>
      </div>
    </PageContextProvider>
  );
}

export default App;
