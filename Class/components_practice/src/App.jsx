import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import According from "./Components/According";
import AlertCustom from "./Components/Alert";
import CurrentPagePath from "./Components/Location";
import ButtonsExa from "./Components/Buttons";
import { ButtonGroupExa } from "./Components/Buttons";
import Cards from "./Components/card";
import { SecondCard } from "./Components/card";

function App() {
  return (
    <div className="MainAppContainer">
      <CurrentPagePath />
      <According />
      <AlertCustom />
      <ButtonsExa />
      <div className="row container">
        <Cards
          ImageLink="https://images.unsplash.com/photo-1723581048670-bdd958641c2e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          colour="success"
          tittle="first tittle"
        />
        <Cards
          ImageLink="https://images.unsplash.com/photo-1721832281439-96e1d0042b4c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          colour="danger"
          tittle="second tittle"
        />
        <Cards
          ImageLink="https://images.unsplash.com/photo-1723451119471-dff8dd414e80?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          colour="warning"
          tittle="second tittle"
        />
      </div>
      <div className="d-flex gap-3">
        <SecondCard
          ImageLink="https://images.unsplash.com/photo-1723015891294-e3b121c897b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Text="This is Description text of the landscape Card 1"
        />
        <SecondCard
          ImageLink="https://images.unsplash.com/photo-1691143288064-adaa46f8b839?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Text="This is Description text of the landscape Card 2"
        />
      </div>
        <ButtonGroupExa/>
    </div>
  );
}

export default App;
