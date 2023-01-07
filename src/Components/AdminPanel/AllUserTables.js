import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BsFillLaptopFill } from 'react-icons/bs';
import {GiPanzerfaust} from 'react-icons/gi'
import { AiTwotoneSetting } from'react-icons/ai';
import { TbRotateClockwise2 } from'react-icons/tb';
import { RxAvatar } from'react-icons/rx';

const AllUserTables = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    {
      name: "User",
      selector: (row) => (
        <div className="flex gap-2 items-center">
          <img
            width={34}
            height={34}
            className="rounded-2xl"
            src={row.image}
            alt=""
          />{" "}
          <div >
            <h1 className="text-[16px]">{row.name}</h1>
            <h1 className="text-gray-600">@{row.userName}</h1>
          </div>
        </div>
      ),
    },
    {
      name: "Email",
      selector: (row) => <h1  className="text-[14px]">{row.email}</h1> ,
    },
    {
      name: "Role",
      selector: (row) => <div className="flex gap-1 text-[16px]">
        {
            row.role === "Admin" && <BsFillLaptopFill className="text-red-600"/>
        }
        {
             row.role === "Author" && <AiTwotoneSetting className="text-gray-600"/>
        }
        {
             row.role === "Editor" && <GiPanzerfaust className="text-xl"/>
        }
        {
             row.role === "Maintainer" && <TbRotateClockwise2 className="text-xl text-green-600"/>
        }
        {
             row.role === "Subscriber" && <RxAvatar className="text-[#9155FD]"/>
        }
        

        <h1>{row.role}</h1>
      </div>,
    },
    {
      name: "Plan",
      selector: (row) =><h1  className="text-[16px]">{row.plan}</h1>,
    },
    {
      name: "status",
      selector: (row) => <h1 className={`py-1 px-3 rounded-2xl ${row.status === "Pending" && " text-yellow-900 bg-yellow-300 "} ${row.status === "Active" && " text-green-900 bg-green-300 "} ${row.status === "Inactive" && " text-gray-900 bg-gray-300 "}`}>{row.status}</h1>,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  return <DataTable  columns={columns} data={users} pagination/>;
};

export default AllUserTables;
