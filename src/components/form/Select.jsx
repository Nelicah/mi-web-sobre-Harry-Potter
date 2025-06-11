function Select({ filter, characterFiltered, characterFilter }) {
  return (
    <>
      <label htmlFor="role">Filtrar por casa:</label>
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
      <select
        id="alive"
        value={characterFiltered.alive}
        onChange={characterFilter}
      >
        <option value="">Todos</option>
        <option value="true">Vivos</option>
        <option value="false">Muertos</option>
      </select>
      <select
        id="role"
        value={characterFiltered.role}
        onChange={characterFilter}
      >
        <option value="">Todos</option>
        <option value="student">Estudiantes</option>
        <option value="staff">Staff</option>
      </select>
    </>
  );
}

export default Select;
