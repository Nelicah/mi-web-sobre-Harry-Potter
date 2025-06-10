import Card from "./Card";

function List({ charactersFiltered }) {
  return (
    <ul className="container-cards">
      {charactersFiltered.map((eachCharacter) => (
        <li
          className={`cards ${eachCharacter.house.toLowerCase()}`}
          key={eachCharacter.id}
        >
          <Card character={eachCharacter} />
        </li>
      ))}
    </ul>
  );
}

export default List;
