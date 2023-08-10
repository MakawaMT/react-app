import { Fragment } from "react";
function ListGroup() {
  const items = ["Lilongwe", "Blantyre", "Zomba", "Rumphi", "Nkhata Bay"];

  /* 
<li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
*/
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
