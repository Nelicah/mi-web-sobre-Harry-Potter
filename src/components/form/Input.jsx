function Input({ filter, characterFiltered }) {
  return (
    <div className="input-and-selects">
      <label htmlFor="role">Search by name:</label>
      <input
        className="input-name"
        onInput={filter}
        value={characterFiltered.name}
        type="text"
        name="name"
        id="name"
      />
    </div>
  );
}

export default Input;
