import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";
library.add(fas);

function App() {
  return (
    <main>
      <Header></Header>
    </main>
  );
}

export default App;
