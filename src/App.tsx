import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lilongwe", "Blantyre", "Zomba", "Rumphi", "Nkhata Bay"];
  let heading = "Cities (MW)";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>World
      </Alert>
    </div>
  );
}

export default App;
