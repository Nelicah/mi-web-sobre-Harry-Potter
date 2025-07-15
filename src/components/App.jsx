import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/LandingPage";
import CharacterDetail from "./pages/CharacterDetail";
import libros from "../images/libros.webp";
import logoHP from "../images/logo-harry-potter.png";

function App() {
  const [characters, setCharacters] = useState([]);

  const [characterFiltered, setCharacterFiltered] = useState({
    name: "",
    house: "Gryffindor",
    alive: "",
    role: "",
  });

  // Use Effect
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const handleInputCharacterFiltered = (ev) => {
    const { id, value } = ev.target;
    setCharacterFiltered({
      ...characterFiltered,
      [id]: value,
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
    )
    .filter((c) => {
      if (characterFiltered.alive === "true") {
        return c.alive === true;
      } else if (characterFiltered.alive === "false") {
        return c.alive === false;
      }
      return true; // Sin filtro activo
    })
    .filter((c) => {
      if (characterFiltered.role === "student") {
        return c.hogwartsStudent === true;
      } else if (characterFiltered.role === "staff") {
        return c.hogwartsStaff === true;
      }
      return true; // sin filtro aplicado
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleResetFilters = () => {
    setCharacterFiltered({
      name: "",
      house: "Gryffindor",
      role: "",
      alive: "",
    });
  };

  const location = useLocation();

  return (
    <div className="dark-mode">
      <header>
        <img src={logoHP} alt="logo Harry Potter" className="logo" />
        {location.pathname === "/" && (
          <img
            src={libros}
            alt="pila de libros y uno levita"
            className="books-img"
          />
        )}
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                characterFilter={handleInputCharacterFiltered}
                characterFiltered={characterFiltered}
                charactersFiltered={charactersFiltered}
                resetFilters={handleResetFilters}
              />
            }
          />
          <Route
            path="/detail/:idCharacter"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
