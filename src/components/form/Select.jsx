function Select({ filter, characterFiltered }) {
  return (
    <>
      <select
        className="select-houses"
        onInput={filter}
        value={characterFiltered.house}
        name="house"
        id="house"
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="">Todas las casas</option>
      </select>
    </>
  );
}

export default Select;
