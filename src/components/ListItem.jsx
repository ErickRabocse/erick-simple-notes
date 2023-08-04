import "../app.css";

const ListItem = ({ item, id, handleClick }) => {
  return (
    <>
      <label htmlFor="toDoTask" className="listItem">
        <input
          className="listItemInput"
          type="checkbox"
          name="toDoTask"
          data-list-item-checkbox
        />
        <span data-list-item-text>{item}</span>
        <button className="listItemBtn" onClick={() => handleClick(id)}>
          ❌
        </button>
      </label>
    </>
  );
};

export default ListItem;
