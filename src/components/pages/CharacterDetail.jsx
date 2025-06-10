import { Link, useParams } from "react-router";

function CharacterDetail({ characters }) {
  const { idCharacter } = useParams();

  const characterFound = characters.find(
    (eachCharacter) => eachCharacter.id === idCharacter
  );

  const { image, name, house, alive, gender, species, alternate_names } =
    characterFound;

  return (
    <>
      <div>
        <img
          src={
            image ||
            "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
          }
          alt={name}
        />
      </div>
      <div>
        <h2>{name}</h2>
        <dl>
          <dt>Estatus:</dt>
          <dd>{alive === true ? "Vivo" : "Muerto"}</dd>
        </dl>
        <dl>
          <dt>Especie:</dt>
          <dd>{species}</dd>
        </dl>
        <dl>
          <dt>Género:</dt>
          <dd>{gender}</dd>
        </dl>
        <dl>
          <dt>Casa:</dt>
          <dd>{house}</dd>
        </dl>
        {alternate_names && alternate_names.length > 0 && (
          <dl>
            <dt>Nombres alternativos:</dt>
            {alternate_names.map((nombre, index) => (
              <dd className="alternate-names" key={index}>
                {nombre}
              </dd>
            ))}
          </dl>
        )}
      </div>
      <div>
        <Link to="/">Volver</Link>
      </div>
    </>
  );
}

export default CharacterDetail;
