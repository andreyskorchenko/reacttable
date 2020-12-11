import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  changeCurrentPage,
  tableSortId,
  tableSortFirstName,
  tableSortLastName,
  tableSortEmail,
  tableSortPhone,
} from "../../store/actionCreators";

import "./style.scss";

const Table = ({
  users,
  page,
  sort,
  order,
  changeCurrentPage,
  tableSortId,
  tableSortFirstName,
  tableSortLastName,
  tableSortEmail,
  tableSortPhone,
}) => {
  const [infoUser, setInfoUser] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [lastID, setLastID] = useState(null);

  const handlerShowInfo = (id) => {
    if (lastID != id) {
      setLastID(id);
      setInfoUser(users.filter((user) => user.id === id)[0]);
      setShowInfo(true);
    } else {
      setShowInfo(!showInfo);
    }
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / 50); i++) {
    pages.push(i);
  }

  let classNameID = sort === "id" ? "table__active" : "";
  let classNameFirstName = sort === "firstName" ? "table__active" : "";
  let classNameLastName = sort === "lastName" ? "table__active" : "";
  let classNameEmail = sort === "email" ? "table__active" : "";
  let classNamePhone = sort === "phone" ? "table__active" : "";

  classNameID += order === "asc" ? " table__asc" : "";
  classNameFirstName += order === "asc" ? " table__asc" : "";
  classNameLastName += order === "asc" ? " table__asc" : "";
  classNameEmail += order === "asc" ? " table__asc" : "";
  classNamePhone += order === "asc" ? " table__asc" : "";

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th className={classNameID} onClick={tableSortId}>
              id
            </th>
            <th className={classNameFirstName} onClick={tableSortFirstName}>
              firstName
            </th>
            <th className={classNameLastName} onClick={tableSortLastName}>
              lastName
            </th>
            <th className={classNameEmail} onClick={tableSortEmail}>
              email
            </th>
            <th className={classNamePhone} onClick={tableSortPhone}>
              phone
            </th>
          </tr>
        </thead>

        <tbody>
          {[...users.slice(page * 50 - 50, page * 50)].map((user) => (
            <tr
              key={user.id + Math.random() * 1000}
              onClick={() => handlerShowInfo(user.id)}
              className={
                infoUser.id == user.id && showInfo ? "table__selected" : ""
              }
            >
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showInfo && (
        <div className="information">
          <p>
            Выбран пользователь{" "}
            <b>{infoUser.firstName + " " + infoUser.lastName}</b>
          </p>
          Описание:
          <br />
          <textarea defaultValue={infoUser?.description}></textarea>
          <p>
            Адрес проживания: <b>{infoUser?.address?.streetAddress}</b>
          </p>
          <p>
            Город: <b>{infoUser?.address?.city}</b>
          </p>
          <p>
            Провинция/штат: <b>{infoUser?.address?.state}</b>
          </p>
          <p>
            Индекс: <b>{infoUser?.address?.zip}</b>
          </p>
        </div>
      )}

      {pages.length > 1 && (
        <div className="pagination">
          {pages.map((pagination) => (
            <div
              key={pagination}
              className={`pagination__pages ${
                pagination == page ? "pagination__pages_active" : ""
              }`}
              onClick={() => {
                changeCurrentPage(pagination);
              }}
            >
              <p>{pagination}</p>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

const filterUsers = (users, search) => {
  return users.filter((user) => {
    let id = user.id.toString().includes(search);
    let firstName = user.firstName.toLowerCase().includes(search.toLowerCase());
    let lastName = user.lastName.toLowerCase().includes(search.toLowerCase());
    let email = user.email.toLowerCase().includes(search.toLowerCase());
    let phone = user.phone.toLowerCase().includes(search.toLowerCase());

    if (id || firstName || lastName || email || phone) {
      return user;
    }
  });
};

const mapProps = ({ users, page, sort, order, search }) => ({
  users: filterUsers(users, search),
  page,
  sort,
  order,
  search,
});

const mapDispatch = {
  changeCurrentPage,
  tableSortId,
  tableSortFirstName,
  tableSortLastName,
  tableSortEmail,
  tableSortPhone,
};

export default connect(mapProps, mapDispatch)(Table);
