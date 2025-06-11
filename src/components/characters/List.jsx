import Card from "./Card";

function List({ charactersFiltered }) {
  return (
    <>
      {charactersFiltered.length === 0 ? (
        <p className="message">
          ¡No existe ningún personaje con esos criterios de búsqueda!
        </p>
      ) : (
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
      )}
    </>
  );
}

export default List;
