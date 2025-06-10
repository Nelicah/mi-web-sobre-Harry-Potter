import Input from "../form/Input";
import Select from "../form/Select";
import List from "../characters/List";

function LandingPage({
  characterFilter,
  characterFiltered,
  charactersFiltered,
}) {
  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <Input filter={characterFilter} characterFiltered={characterFiltered} />
        <Select
          filter={characterFilter}
          characterFiltered={characterFiltered}
        />
      </form>
      <article>
        <List charactersFiltered={charactersFiltered} />
      </article>
    </>
  );
}

export default LandingPage;
