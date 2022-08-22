import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";
import Poster from "./components/poster";
library.add(fas);

function App() {
  return (
    <main>
      <Header></Header>
      <Poster></Poster>
    </main>
  );
}

export default App;
