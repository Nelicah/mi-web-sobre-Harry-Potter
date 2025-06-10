import { Link } from "react-router";

function Card({ character }) {
  return (
    <Link to={"/detail/" + character.name}>
      <img
        className="card-image"
        src={
          character.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
        alt={character.name}
      />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </Link>
  );
}

export default Card;
