"use client";
import { useState } from "react";
import { app, database } from "./firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function App() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  };

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
    })
      .then(() => {
        alert("data add");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getData = () => {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  return (
    <div className="App">
      <input
        name="email"
        placeholder="Email"
        onChange={(event) => handleInput(event)}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(event) => handleInput(event)}
      />
      <br />
      <button onClick={getData}>Get Data</button>
      <button onClick={handleSubmit}>Send Data</button>
    </div>
  );
}
