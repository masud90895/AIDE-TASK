import React from "react";
import { toast } from "react-hot-toast";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const role = form.role.value;
    const plan = form.plan.value;
    const status = form.status.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      `https://api.imgbb.com/1/upload?key=25b08f5eaf567ebb996f971a9098c761`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const user = {
          name,
          email,
          userName,
          role,
          plan,
          status,
          image: data?.data?.display_url,
        };
        if (data?.data?.display_url) {
          fetch("https://aide-server-gray.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("user added successfully");
              form.reset();
            });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[#975EFE] text-3xl">Add User</h1>
      </div>
      <>
        <div>
          <div className="flex flex-no-wrap items-start">
            <div className="w-full ">
              <form onSubmit={handleAddUser} className=" px-2">
                <div className="bg-white rounded shadow  py-3">
                  {/* end */}

                  <div className="mt-10 px-7">
                    <div className="flex justify-start mt-8 ">
                      <div className="max-w-2xl  rounded-lg shadow-xl bg-gray-50">
                        <div>
                          <label className="inline-block mb-2 text-gray-500">
                            Upload your image
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                              <div className="flex flex-col items-center justify-center pt-7">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Attach a Image
                                </p>
                              </div>
                              <input
                                type="file"
                                name="image"
                                className="opacity-0"
                                accept="image/*"
                                required
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Name
                        </p>
                        <input
                          name="name"
                          placeholder="Inter your name..."
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          required
                        />
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          User Name
                        </p>
                        <input
                          name="userName"
                          placeholder="User Name..."
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          required
                        />
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Email
                        </p>
                        <input
                          name="email"
                          placeholder="Email..."
                          type="email"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="text-base font-medium leading-none text-gray-800"
                        >
                          Select an Role
                        </label>
                        <select
                          id="role"
                          defaultValue="Subscriber"
                          name="role"
                          className="bg-gray-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        >
                          <option value="Admin">Admin</option>
                          <option value="Editor">Editor</option>
                          <option value="Subscriber">Subscriber</option>
                          <option value="Author">Author</option>
                          <option value="Maintainer">Maintainer</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="plan"
                          className="text-base font-medium leading-none text-gray-800"
                        >
                          Select an Plan
                        </label>
                        <select
                          id="plan"
                          defaultValue="Enterprise"
                          name="plan"
                          className="bg-gray-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        >
                          <option value="Enterprise">Enterprise</option>
                          <option value="Team">Team</option>
                          <option value="Company">Company</option>
                          <option value="Basic">Basic</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="status"
                          className="text-base font-medium leading-none text-gray-800"
                        >
                          Select an status
                        </label>
                        <select
                          id="status"
                          defaultValue="Active"
                          name="status"
                          className="bg-gray-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        >
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr className="h-[1px] bg-gray-100 my-14" />
                  <button className="bg-purple-700 md:ml-4 rounded hover:bg-purple-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddUser;
