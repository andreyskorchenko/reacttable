import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDataType } from "../../store/actionCreators";
import "./style.scss";

const SelectData = () => {
  const dispatch = useDispatch();

  return (
    <div className="select-data">
      <Link to="/viewtable">
        <div
          className="select-data__small"
          onClick={() => dispatch(setDataType("small"))}
        >
          <img src="../../assets/img/icons/small-data.svg" alt="small" />
          <p>Мало данных</p>
        </div>
      </Link>

      <Link to="/viewtable">
        <div
          className="select-data__big"
          onClick={() => dispatch(setDataType("big"))}
        >
          <img src="../../assets/img/icons/big-data.svg" alt="big" />
          <p>Много данных</p>
        </div>
      </Link>
    </div>
  );
};

export default SelectData;
