import React, { useState } from "react";
import URL from 'https://644bfc2317e2663b9dfd613c.mockapi.io/api/v1/users';




const CatchId = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const handleSubmit = () => {
    const matchingName = URL.find(name);
    if(matchingName) {
      setId(matchingName.id);
    }
  };
  return (
    <form onSubmit={handleSubmit}>

    </form>
  );
};
export default CatchId;