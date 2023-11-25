import React from "react";

const SearchForm = ({ keyword, setkeyword }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setkeyword(e.target.value.toLowerCase());
  };

  return (
    <div className="pt-3 pb-3">
      <input 
        type="search"
        placeholder="Search in Category"
        value={keyword}
        onChange={handleSearchChange}
        className="form-control mt-3 mb-3"
      />
    </div>
  );
};

export default SearchForm;
