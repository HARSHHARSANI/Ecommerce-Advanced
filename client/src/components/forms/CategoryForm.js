import React from "react";

const CategoryForm = ({ name, handleSubmit, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control mt-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
