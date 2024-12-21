import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App(props) {
  return (
    <>
      <Card username="Ankit" />
      <br></br>
      <Card username="React" />
    </>
  );
}

export default App;
