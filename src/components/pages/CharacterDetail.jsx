import { Link, useParams } from "react-router";

function CharacterDetail({ characters }) {
  const { idCharacter } = useParams();

  // Mientras se cargan los personajes si compartimos el url del pj
  if (characters.length === 0) {
    return (
      <section className="character-detail">
        <p>Cargando...</p>
      </section>
    );
  }

  const characterFound = characters.find(
    (eachCharacter) => eachCharacter.id === idCharacter
  );

  if (!characterFound) {
    return (
      <section className="character-detail">
        <p>El personaje no existe o el enlace es incorrecto.</p>
      </section>
    );
  }

  const { image, name, house, alive, gender, species, alternate_names } =
    characterFound;

  return (
    <div className={`card-detail  ${house.toLowerCase()}`}>
      <div>
        <img
          className="card-detail-image"
          src={
            image ||
            "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
          }
          alt={name}
        />
      </div>
      <div className="card-detail-container">
        <h2>{name}</h2>
        <dl>
          <dt>Status:</dt>
          <dd>{alive === true ? "alive ❣️" : "dead 💀"}</dd>
        </dl>
        <dl>
          <dt>Species:</dt>
          <dd>{species}</dd>
        </dl>
        <dl>
          <dt>Gender:</dt>
          <dd>{gender}</dd>
        </dl>
        <dl>
          <dt>House:</dt>
          <dd>{house}</dd>
        </dl>
        {alternate_names && alternate_names.length > 0 && (
          <dl className="container-alternative-names">
            <dt>Alternate names:</dt>
            {alternate_names.map((nombre, index) => (
              <dd className="alternate-names" key={index}>
                {nombre}
              </dd>
            ))}
          </dl>
        )}
      </div>
      <div className="back">
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

export default CharacterDetail;
