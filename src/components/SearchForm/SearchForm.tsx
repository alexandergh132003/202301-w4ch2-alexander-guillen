interface Change {
  passedCallBack: (userInput: string) => void;
}

const SearchForm = ({ passedCallBack }: Change) => {
  const sendInfoUp = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const input = document.querySelector("input")!;
    passedCallBack(input.value);
  };

  return (
    <form className="search-form">
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input type="text" id="search" className="search form-control" />
        </div>
        <button
          type="submit"
          className="btn btn-info btn-sm col-1"
          onClick={sendInfoUp}
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
