function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 50 },
    { id: 2, name: "banana", calories: 130 },
    { id: 3, name: "coconut", calories: 80 },
    { id: 4, name: "pear", calories: 110 },
    { id: 5, name: "orange", calories: 25 },
  ];
  /*
  fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  fruits.sort((a, b) => b.name.localeCompare(a.name)); // non-alphabetical
  fruits.sort((a, b) => a.calories - b.calories); // numeric
  fruits.sort((a, b) => b.calories - a.calories); // reverse numeric
  */
  //  const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="basket-title">Basktet</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
export default List;
