import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BsFillLaptopFill } from "react-icons/bs";
import { GiPanzerfaust } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbRotateClockwise2 } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiExport } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUserTables = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [hideUser, setHideUser] = useState(false);
  const [hideEmail, setHideEmail] = useState(false);
  const [hideRole, setHideRole] = useState(false);
  const [hidePlan, setHidePlan] = useState(false);
  const [hideStatus, setHideStatus] = useState(false);
  const [hideAction, setHideAction] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setReload(!reload);
          });
      }
    });
  };

  const columns = [
    {
      name: "USER",
      selector: (row) => (
        <div className="flex gap-2 items-center">
          <img
            width={34}
            height={34}
            className="rounded-2xl"
            src={row.image}
            alt=""
          />{" "}
          <div>
            <h1 className="text-[16px]">{row.name}</h1>
            <h1 className="text-gray-600">@{row.userName}</h1>
          </div>
        </div>
      ),
      omit: hideUser,
    },
    {
      name: "EMAIL",
      selector: (row) => <h1 className="text-[14px]">{row.email}</h1>,
      omit: hideEmail,
    },
    {
      name: "ROLE",
      selector: (row) => (
        <div className="flex gap-1 text-[16px]">
          {row.role === "Admin" && (
            <BsFillLaptopFill className="text-red-600" />
          )}
          {row.role === "Author" && (
            <AiTwotoneSetting className="text-gray-600" />
          )}
          {row.role === "Editor" && <GiPanzerfaust className="text-xl" />}
          {row.role === "Maintainer" && (
            <TbRotateClockwise2 className="text-xl text-green-600" />
          )}
          {row.role === "Subscriber" && <RxAvatar className="text-[#9155FD]" />}

          <h1>{row.role}</h1>
        </div>
      ),
      omit: hideRole,
    },
    {
      name: "PLAN",
      selector: (row) => <h1 className="text-[16px]">{row.plan}</h1>,
      omit: hidePlan,
    },
    {
      name: "STATUS",
      selector: (row) => (
        <h1
          className={`py-1 px-3 rounded-2xl ${
            row.status === "Pending" && " text-yellow-900 bg-yellow-300 "
          } ${row.status === "Active" && " text-green-900 bg-green-300 "} ${
            row.status === "Inactive" && " text-gray-900 bg-gray-300 "
          }`}
        >
          {row.status}
        </h1>
      ),
      omit: hideStatus,
    },
    {
      name: "ACTION",

      cell: (row, i) => (
        <div className="dropdown dropdown-top dropdown-left">
          <label tabIndex={0}>
            <HiOutlineDotsVertical />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content border z-50 border-gray-600 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:text-green-900 hover:bg-green-300">
              <Link to={`edit/${row._id}`}>Edit</Link>
            </li>
            <li className="hover:text-red-900 hover:bg-red-300">
              <button onClick={() => handleDelete(row._id)}>Delete</button>
            </li>
          </ul>
        </div>
      ),
      allowOverflow: true,
      button: true,
      width: "56px",
      omit: hideAction,
    },
  ];
  console.log(hideUser);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, [reload]);
  return (
    <div className="bg-white shadow-lg  rounded-xl">
      <div className="md:flex justify-between bg-white pt-5 px-4 print:hidden">
        <div className="md:flex justify-between gap-4">
          <button className="btn btn-outline flex items-center gap-1">
            <BiExport className="text-xl" />
            PDF
          </button>
          <button className="btn btn-outline flex items-center gap-1">
            <BiExport className="text-xl" />
            EXCEL
          </button>
          <button
            onClick={() => window.print()}
            className="btn btn-outline flex items-center gap-1"
          >
            <BiExport className="text-xl" />
            PRINT
          </button>
          {/* <button className="btn btn-outline">SHOW/HIDE COLUMN</button> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-outline">
              SHOW/HIDE COLUMN
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu border border-gray-600 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">USER</span>
                    <input
                      type="checkbox"
                      checked={!hideUser}
                      onChange={() => setHideUser(!hideUser)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">EMAIL</span>
                    <input
                      type="checkbox"
                      checked={!hideEmail}
                      onChange={() => setHideEmail(!hideEmail)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">ROLE</span>
                    <input
                      type="checkbox"
                      checked={!hideRole}
                      onChange={() => setHideRole(!hideRole)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">PLAN</span>
                    <input
                      type="checkbox"
                      checked={!hidePlan}
                      onChange={() => setHidePlan(!hidePlan)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0">
                  <label className="label cursor-pointer">
                    <span className="label-text">STATUS</span>
                    <input
                      type="checkbox"
                      checked={!hideStatus}
                      onChange={() => setHideStatus(!hideStatus)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form-control p-0 text-center">
                  <label className="label cursor-pointer">
                    <span className="label-text">ACTION</span>
                    <input
                      type="checkbox"
                      checked={!hideAction}
                      onChange={() => setHideAction(!hideAction)}
                      className="checkbox ml-3"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs "
            placeholder="Search Invoice"
          />
          <Link to="add-user" className="btn bg-[#9155FD] border-none">
            <button>ADD USER</button>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={users} pagination highlightOnHover />
    </div>
  );
};

export default AllUserTables;
