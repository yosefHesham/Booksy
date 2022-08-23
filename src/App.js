import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home";
library.add(fas);

function App() {
  return (
    <main id="main">
      <Home></Home>
    </main>
  );
}

export default App;
