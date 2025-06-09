import "../styles/App.scss";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterFiltered, setCharacterFiltered] = useState("");

  // Use Effect
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const handleInputCharacterFiltered = (ev) => {
    setCharacterFiltered(ev.target.value);
  };

  const charactersFiltered = characters.filter((eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(characterFiltered.toLocaleLowerCase())
  );

  return (
    <div className="dark-mode">
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <form action="">
          <input
            onInput={handleInputCharacterFiltered}
            value={characterFiltered.name}
            type="text"
            name=""
            id=""
          />
        </form>
        <article>
          <ul className="container-cards">
            {charactersFiltered.map((eachCharacter) => (
              <li className="cards" key={eachCharacter.id}>
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
