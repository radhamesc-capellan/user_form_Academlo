import React, { useEffect, useState } from "react";
import { UserForms } from "./components/UserForms";
import { UserList } from "./components/UserList";
import axios from "axios";
//import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    //get data from api
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUserList(res.data));
  }, []);

  const getUsers = () => {
    //update api data on render
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUserList(res.data));
  };
  //function to trigger user selection / update
  const selectUser = (user) => {
    setUserSelected(user);
  };

  console.log(userSelected);

  //console.log(userList);

  return (
    <>
      <div className="App">
        {/* <NavBar /> */}
          <section className="left-form">
            <UserList
              userList={userList}
              selectUser={selectUser}
              getUsers={getUsers}
            />
          </section>
          
          <section className="right-form">
            <UserForms
              getUsers={getUsers}
              userSelected={userSelected}
              selectUser={selectUser}
            />
          </section>
          </div>
    </>
  );
};

export default App;
