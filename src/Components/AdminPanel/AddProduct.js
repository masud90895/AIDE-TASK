import React from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
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
        const product = {
          name,
          price,
          image: data?.data?.display_url,
        };
        if (data?.data?.display_url) {
          fetch("https://aide-server-gray.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Product added successfully");
              form.reset();
            });
        }
      });
  };
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-[#975EFE] text-3xl">Add Product</h1>
      </div>
      <>
        <div>
          <div className="flex flex-no-wrap items-start">
            <div className="w-full ">
              <form onSubmit={handleAddProduct} className=" px-2">
                <div className="bg-white rounded shadow  py-3">
                  {/* end */}

                  <div className="mt-10 px-7">
                    <p className="text-xl font-semibold leading-tight text-gray-800">
                      Products Details
                    </p>
                    <div className="flex justify-start mt-8 ">
                      <div className="max-w-2xl  rounded-lg shadow-xl bg-gray-50">
                        <div>
                          <label className="inline-block mb-2 text-gray-500">
                            Image Upload
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
                          Product Name
                        </p>
                        <input
                          name="name"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          required
                        />
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Product Price
                        </p>
                        <input
                          name="price"
                          type="number"
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="h-[1px] bg-gray-100 my-3" />
                  <button className="bg-purple-700 md:ml-6 rounded  hover:bg-purple-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    Add Product
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

export default AddProduct;
