import React, { useEffect, useState } from "react";
import AllUserTables from "./AllUserTables";
const nextRef = React.createRef();
const chackRef = React.createRef()
const options = {
  orientation: "landscape",
  unit: "in",
  format: [10, 5],
};

const Allusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div >
      <div ref={nextRef} className="mb-10">
        <h1 className="text-[#975EFE] text-3xl">All users</h1>
      </div>
      {users?.length > 0 ? (
        <AllUserTables chackRef={chackRef} nextRef={nextRef} options={options} />
      ) : (
        <div className="text-center text-4xl text-red-600 font-bold">
          <h1>No User Found</h1>
        </div>
      )}
    </div>
  );
};

export default Allusers;
