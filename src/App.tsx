import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lilongwe", "Blantyre", "Zomba", "Rumphi", "Nkhata Bay"];
  let heading = "Cities (MW)";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    return <Alert children="Show Up"></Alert>;
  };

  return (
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        World
      </Button>
    </div>
  );
}

export default App;
