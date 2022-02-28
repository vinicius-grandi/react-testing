import { useState } from 'react';

function App() {
  const [list, setList] = useState(['-1']);
  const [val, setVal] = useState(0);
  const [item, setItem] = useState('');

  const addToList = (item) => setTimeout(
    () => setList([...list, item]) , 1000);

  return (
    <>
      <input
        type="text"
        placeholder="item"
        data-cy="text-input"
        onChange={ (e) => setItem(e.target.value) }
      />
      <br />
      <button
        type="button"
        data-testid="add+1-button"
        data-cy="add+1-button"
        onClick={ () => {
          addToList(val);
          setVal(val + 1);
        } }
      >
        Add+1
      </button>
      <button
        type="button"
        data-testid="add-item-button"
        data-cy="add-item-button"
        onClick={ () => {
          addToList(item);
        } }
      >
        Add Item
      </button>
      <ul data-cy="list">
        { list.map((elem) => <li key={elem} data-cy={elem}>{elem}</li>) }
      </ul>
    </>
  );
}

export default App;
