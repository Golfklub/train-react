import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetUserApiFunc } from "../store/Provider";

function Api() {
  const [data, setData] = useState({ users: [] });

  const { list, setList } = useContext(GetUserApiFunc);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setData({
        users: result.data,
      });
    };

    fetchData();
  }, []);

  console.log("Data", data);
  console.log("List", list);
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Api;
