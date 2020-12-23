import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setUsers, changeShowAddUser } from "../store/actionCreators";

import Preloader from "../components/Preloader";
import AddUser from "../components/AddUser";
import Search from "../components/Search";
import Table from "../components/Table";
import Button from "../components/Button";

const Small = ({ setUsers, dataType, showAddUser, changeShowAddUser }) => {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(async () => {
    if (dataType === "big") {
      const req = await fetch(
        "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      );

      setUsers(await req.json());
    } else {
      const req = await fetch(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      );

      setUsers(await req.json());
    }

    setIsPreloader(false);
  }, []);

  return (
    <Fragment>
      {isPreloader && <Preloader />}
      {showAddUser && <AddUser />}
      <Search />
      <Table />
      <Button className="add-user" text="Add" onClick={changeShowAddUser} />
    </Fragment>
  );
};

const mapState = ({ dataType, showAddUser }) => ({ dataType, showAddUser });
const mapDispatch = { setUsers, changeShowAddUser };

export default connect(mapState, mapDispatch)(Small);
