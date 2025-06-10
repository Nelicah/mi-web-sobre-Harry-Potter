import { Link } from "react-router";

function Card({ character }) {
  return (
    <Link to={"/detail/" + character.id}>
      <img
        className="card-image"
        src={
          character.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
        alt={character.name}
      />
      <div className="card-text">
        <h2>{character.name}</h2>
        <p>{character.species}</p>
      </div>
    </Link>
  );
}

export default Card;
