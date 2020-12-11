import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const SelectData = () => {
  return (
    <div className="select-data">
      <Link to="/small">
        <div className="select-data__small">
          <img src="../../assets/img/icons/small-data.svg" alt="small" />
          <p>Мало данных</p>
        </div>
      </Link>

      <Link to="/big">
        <div className="select-data__big">
          <img src="../../assets/img/icons/big-data.svg" alt="big" />
          <p>Много данных</p>
        </div>
      </Link>
    </div>
  );
};

export default SelectData;
