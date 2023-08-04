import { useState } from "react";
import ListItem from "./components/ListItem";
import "./app.css";

function App() {
  const [listItem, setListItem] = useState("");
  const [listOfItems, setListOfItems] = useState([]);

  function addElement() {
    if (!listItem) {
      alert("Please type a new note");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: listItem,
    };
    setListOfItems((oldList) => [...oldList, item]);
    console.log(listOfItems);
    setListItem("");
  }

  function deleteFn(id) {
    const newArray = listOfItems.filter((el) => el.id !== id);
    setListOfItems(newArray);
  }

  return (
    <>
      <div className="mainContainer">
        <ul className="ulContainer">
          {listOfItems.map((el) => (
            <li key={el.id}>
              <ListItem item={el.value} id={el.id} handleClick={deleteFn} />
            </li>
          ))}
        </ul>

        <div className="inputContainer">
          <h3 className="toDoLabel">Notes</h3>
          <div className="interactiveContainer">
            <input
              className="textInput"
              type="text"
              placeholder="Type here"
              value={listItem}
              onChange={(e) => setListItem(e.target.value)}
            />
            <button className="inputBtn" onClick={() => addElement()}>
              Add new
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
