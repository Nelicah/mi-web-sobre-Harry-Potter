import { Link, useParams } from "react-router";

function CharacterDetail({ characters }) {
  const params = useParams();

  console.log(params);

  /*  const characterFound = characters.find(
    (eachCharacter) => eachCharacter.name === name
  );
  console.log(characterFound);
 */

  /*   //const { image, name, house, alive, gender, species, alternate_names } =
  characterFound; */

  return (
    <>
      {/*   <div>
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
      </div> */}
      <div>
        <Link to="/">Volver</Link>
      </div>
    </>
  );
}

export default CharacterDetail;
