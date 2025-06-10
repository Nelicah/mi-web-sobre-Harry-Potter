function Input({ filter, characterFiltered }) {
  return (
    <>
      <input
        className="input-name"
        onInput={filter}
        value={characterFiltered.name}
        type="text"
        name="name"
        id="name"
      />
    </>
  );
}

export default Input;
