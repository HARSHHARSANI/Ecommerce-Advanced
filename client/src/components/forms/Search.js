import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?${text}`);
  };

  return (
    <form
      className="d-flex my-2 my-lg-0 text-decoration-none "
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        value={text}
        className="form-control ms-2"
        placeholder="Seach"
        onChange={handleChange}
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
      
    </form>
  );
};

export default Search;
