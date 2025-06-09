import "../styles/App.scss";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterFiltered, setCharacterFiltered] = useState({
    name: "",
    house: "Gryffindor",
  });

  // Use Effect
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const handleInputCharacterNameFiltered = (ev) => {
    setCharacterFiltered({
      ...characterFiltered,
      name: ev.target.value,
    });
  };
  const handleInputCharacterHouseFiltered = (ev) => {
    setCharacterFiltered({
      ...characterFiltered,
      house: ev.target.value,
    });
  };

  const charactersFiltered = characters
    .filter((eachCharacter) =>
      eachCharacter.name
        .toLocaleLowerCase()
        .includes(characterFiltered.name.toLocaleLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.house.includes(characterFiltered.house)
    );

  return (
    <div className="dark-mode">
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <input
            className="input-name"
            onInput={handleInputCharacterNameFiltered}
            value={characterFiltered.name}
            type="text"
            name="name"
            id="name"
          />
          <select
            className="select-houses"
            onInput={handleInputCharacterHouseFiltered}
            name="houses"
            id="houses"
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="">Todas las casas</option>
          </select>
        </form>
        <article>
          <ul className="container-cards">
            {charactersFiltered.map((eachCharacter) => (
              <li
                className={`cards ${eachCharacter.house.toLowerCase()}`}
                key={eachCharacter.id}
              >
                <img
                  className="card-image"
                  src={
                    eachCharacter.image ||
                    "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
                  }
                  alt={eachCharacter.name}
                />
                <h2>{eachCharacter.name}</h2>
                <p>{eachCharacter.species}</p>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
