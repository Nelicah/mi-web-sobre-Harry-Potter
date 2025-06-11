function Select({ filter, characterFiltered, characterFilter }) {
  return (
    <>
      <div className="input-and-selects">
        <label htmlFor="role">Filtrar por casa:</label>
        <select
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
      </div>
      <div className="input-and-selects">
        <label htmlFor="role">Filtrar por estado:</label>
        <select
          id="alive"
          value={characterFiltered.alive}
          onChange={characterFilter}
        >
          <option value="">Todos</option>
          <option value="true">Vivos</option>
          <option value="false">Muertos</option>
        </select>
      </div>
      <div className="input-and-selects">
        <label htmlFor="role">Filtrar por rol:</label>
        <select
          id="role"
          value={characterFiltered.role}
          onChange={characterFilter}
        >
          <option value="">Todos</option>
          <option value="student">Estudiantes</option>
          <option value="staff">Staff</option>
        </select>
      </div>
    </>
  );
}

export default Select;
