import { Fragment } from "react";
function ListGroup() {
  let items = ["Lilongwe", "Blantyre", "Zomba", "Rumphi", "Nkhata Bay"];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
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
