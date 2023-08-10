import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lilongwe", "Blantyre", "Zomba", "Rumphi", "Nkhata Bay"];

  //return <div><Message></Message></div>;
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
