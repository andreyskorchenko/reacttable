import React, { useState } from "react";
import { connect } from "react-redux";
import { searchTable, clearSearchTable } from "../../store/actionCreators";
import Button from "../Button";
import "./style.scss";

const Search = ({ searchTable, clearSearchTable }) => {
  const [searchText, setSearchText] = useState("");

  const handlerChangeInput = (e) => {
    setSearchText(e.target.value.trim());
  };

  const handlerClear = () => {
    setSearchText("");
    clearSearchTable();
  };

  const handlerSearchTable = () => {
    if (searchText !== "") {
      searchTable(searchText);
    } else {
      setSearchText("");
      clearSearchTable();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Введите текст..."
        value={searchText}
        onChange={handlerChangeInput}
      />
      {searchText !== "" && (
        <div className="search__clear" onClick={handlerClear}></div>
      )}
      <Button text="Найти" onClick={handlerSearchTable} />
    </div>
  );
};

const mapDispatch = {
  searchTable,
  clearSearchTable,
};

export default connect(null, mapDispatch)(Search);
