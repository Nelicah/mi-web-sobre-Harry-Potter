function Select({ filter, characterFiltered, characterFilter }) {
  return (
    <>
      <div className="input-and-selects">
        <label htmlFor="role">Filter by House:</label>
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
          <option value="">All Houses</option>
        </select>
      </div>
      <div className="input-and-selects">
        <label htmlFor="role">Filter by status:</label>
        <select
          id="alive"
          value={characterFiltered.alive}
          onChange={characterFilter}
        >
          <option value="">All</option>
          <option value="true">Alive</option>
          <option value="false">Dead</option>
        </select>
      </div>
      <div className="input-and-selects">
        <label htmlFor="role">Filter by rol:</label>
        <select
          id="role"
          value={characterFiltered.role}
          onChange={characterFilter}
        >
          <option value="">All</option>
          <option value="student">Students</option>
          <option value="staff">Staff</option>
        </select>
      </div>
    </>
  );
}

export default Select;
