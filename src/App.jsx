import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  // Fetch con Promesa
  // const getUsers = () => {
  //   fetch('https://randomuser.me/api/')
  //     .then((res) => res.json() res.ok)
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // Axios con Promesas
  // const getUserAxios = () => {
  //   axios
  //     .get('https://randomuser.me/api/')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // Fetch con Async/Await
  // const getUsersAsyncAwait = async () => {
  //   try {
  //     const res = await fetch('https://randomuser.me/api/');
  //     const data = await res.json();

  //     console.log(data);
  //   } catch (error) {
  //     console.log('Papuh tuvimos un error :v');
  //     console.log(error);
  //   }
  // };

  // Axios con Async/Await
  const getUsersAxiosAsync = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/');

      console.log(res.data);
      setUser(res.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // API REST => Retornan información en formato JSON
    // getUsers();
    // getUsersAsyncAwait();
    // getUserAxios();
    getUsersAxiosAsync();

    // Api de geolocalización
    // El callback dentro de "getCurrentPosition" no se ejecuta hasta que el usuario acepte los permisos
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('El usuario acepto su compartir su ubicación');
      console.log(position);
    });
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-white text-5xl">
      <h1>
        {user && user.name.title} {user?.name.first} {user?.name.last}
      </h1>
    </div>
  );
};

export default App;
