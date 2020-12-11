import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { addInputToTable, changeShowAddUser } from "../../store/actionCreators";
import "./style.scss";

const AddUser = ({ addInputToTable, changeShowAddUser }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handlerChangeInputs = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value.trim(),
    });
  };

  const checkInputs = () => {
    if (
      user.id &&
      user.firstName &&
      user.lastName &&
      user.email &&
      user.phone
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <Fragment>
      <div className="popup-adduser" onClick={changeShowAddUser}></div>
      <div className="popup-adduser__content">
        <input
          type="text"
          placeholder="Id"
          name="id"
          onChange={handlerChangeInputs}
          onKeyUp={checkInputs}
          value={user.id}
        />

        <input
          type="text"
          placeholder="Firstname"
          name="firstName"
          onChange={handlerChangeInputs}
          onKeyUp={checkInputs}
          value={user.firstName}
        />

        <input
          type="text"
          placeholder="Lastname"
          name="lastName"
          onChange={handlerChangeInputs}
          onKeyUp={checkInputs}
          value={user.lastName}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handlerChangeInputs}
          onKeyUp={checkInputs}
          value={user.email}
        />

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handlerChangeInputs}
          onKeyUp={checkInputs}
          value={user.phone}
        />

        <Button
          className="popup-adduser__add"
          disabled={isDisabled}
          onClick={() => {
            addInputToTable(user);
            changeShowAddUser();
          }}
          text="Добавить в таблицу"
        />
      </div>
    </Fragment>
  );
};

const mapDispatch = { addInputToTable, changeShowAddUser };
export default connect(null, mapDispatch)(AddUser);
