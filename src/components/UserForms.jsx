
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './userForm.css'

export const UserForms = ({ getUsers, userSelected, selectUser }) => {
  //Hook useForm for react
  const { handleSubmit, register, reset } = useForm();
  //empty fields by default
  const emptyReset = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  useEffect(() => {
    if (userSelected) {
      alert("se detecto el cambio");
      //reset(userSelected);
      //load the fields to update
      reset({
        first_name: userSelected.first_name,
        last_name: userSelected.last_name,
        email: userSelected.email,
        password: userSelected.password,
        birthday: userSelected.birthday,
      });
    } else {
      reset(emptyReset);
    }
  }, [userSelected]);

  const submit = (data) => {
    console.log(data);
    if (userSelected) {
      //update data
      axios
        .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers();
          selectUser(null);
        });
    } else {
      //create user
      axios.post("https://users-crud.academlo.tech/users/", data).then(() => {
        getUsers();
        reset(emptyReset);
      });
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="first_name">Nombre: </label>
        <input
          type="text"
          id="first_name"
          placeholder="Ingrese su Nombre"
          {...register("first_name")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="last_name">Apellidos: </label>
        <input
          type="text"
          id="last_name"
          placeholder="Ingrese su Apellido"
          {...register("last_name")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="email">Correo: </label>
        <input
          type="email"
          id="email"
          placeholder="jhonDoe@domine.com"
          {...register("email")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="password">Contraseña: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="date">Fecha de Nacimiento: </label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>

      <div>
        <button className="submit">Enviar</button>
      </div>
    </form>
  );
};
