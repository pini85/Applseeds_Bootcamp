import React, { useState } from "react";

function App() {
  const items = ["one", "two", "three", "four", "five"];

  return (
    <div>
      <SelectableItems items={items} />
    </div>
  );
}

const SelectableItems = props => {
  const { items } = props;

  //We want the user to remove items so we put it in a different variable in state
  const [activeItems, setActiveItems] = useState(items);

  //we want the user to delete what they selected. So we need to know which ones where selected
  const [selectedItems, setSelectedItems] = useState([]);

  const deleteSelectedItems = () => {
    // Whatever we selected we will filter them out and not incljude them in the activeitem State
    setActiveItems(
      activeItems.filter(x => {
        return !selectedItems.includes(x);
      })
    );
  };

  const resetItems = () => {
    setActiveItems(items);
    // we want all the boxes to be unchecked so we reset them
    setSelectedItems([]);
  };

  //This function will put the selected items in selectedItem state and remove them from there.
  const toggleItems = (isChecked, item) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      // include everything expect the item that was unchecked
      setSelectedItems(
        selectedItems.filter(x => {
          return x !== item;
        })
      );
    }
  };

  return (
    <div>
      <button onClick={deleteSelectedItems}>Delete</button>
      <button onClick={resetItems}>Reset</button>
      <ul>
        {activeItems.map(item => {
          return (
            <li key={item}>
              <input
                type="checkbox"
                onChange={e => toggleItems(e.target.checked, item)}
                //make react control if it is checked or not. Controlled.
                checked={selectedItems.includes(item)}
              />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
