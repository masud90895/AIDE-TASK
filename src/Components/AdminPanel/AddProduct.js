import React from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
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
          description,
          image: data?.data?.display_url,
        };
        if (data?.data?.display_url) {
          fetch("http://localhost:5000/products", {
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
                  <div className="pt-6 border-gray-300 mt-2 px-7">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Product Description
                    </p>
                    <div className="mt-10 border border-gray-300 rounded">
                      <div className="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                        <div className="flex h-full gap-2 p-2 rounded cursor-pointer hover:bg-blue-50 w-fit">
                          <p className="text-sm leading-none text-gray-600">
                            Normal
                          </p>{" "}
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.625 4.3125L6 7.6875L9.375 4.3125"
                              stroke="#475569"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center gap-5 ml-0 lg:ml-7 md:ml-3">
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.8335 4.99984C5.8335 4.77882 5.92129 4.56686 6.07757 4.41058C6.23385 4.2543 6.44582 4.1665 6.66683 4.1665H10.8335C11.5106 4.16646 12.1716 4.37262 12.7287 4.75753C13.2857 5.14245 13.7123 5.68788 13.9517 6.32123C14.1911 6.95458 14.232 7.64582 14.0688 8.30296C13.9057 8.96011 13.5463 9.55199 13.0385 9.99984C13.5463 10.4477 13.9057 11.0396 14.0688 11.6967C14.232 12.3539 14.1911 13.0451 13.9517 13.6784C13.7123 14.3118 13.2857 14.8572 12.7287 15.2421C12.1716 15.6271 11.5106 15.8332 10.8335 15.8332H6.66683C6.44582 15.8332 6.23385 15.7454 6.07757 15.5891C5.92129 15.4328 5.8335 15.2209 5.8335 14.9998V4.99984ZM10.8335 9.1665C11.2755 9.1665 11.6994 8.99091 12.012 8.67835C12.3246 8.36579 12.5002 7.94187 12.5002 7.49984C12.5002 7.05781 12.3246 6.63389 12.012 6.32133C11.6994 6.00877 11.2755 5.83317 10.8335 5.83317H7.50016V9.1665H10.8335ZM7.50016 10.8332H10.8335C11.2755 10.8332 11.6994 11.0088 12.012 11.3213C12.3246 11.6339 12.5002 12.0578 12.5002 12.4998C12.5002 12.9419 12.3246 13.3658 12.012 13.6783C11.6994 13.9909 11.2755 14.1665 10.8335 14.1665H7.50016V10.8332Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={10}
                              height={12}
                              viewBox="0 0 10 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.833496 1.00033C0.833496 0.779312 0.921294 0.56735 1.07757 0.41107C1.23385 0.25479 1.44582 0.166992 1.66683 0.166992H8.3335C8.55451 0.166992 8.76647 0.25479 8.92275 0.41107C9.07903 0.56735 9.16683 0.779312 9.16683 1.00033C9.16683 1.22134 9.07903 1.4333 8.92275 1.58958C8.76647 1.74586 8.55451 1.83366 8.3335 1.83366H5.8335V10.167H8.3335C8.55451 10.167 8.76647 10.2548 8.92275 10.4111C9.07903 10.5674 9.16683 10.7793 9.16683 11.0003C9.16683 11.2213 9.07903 11.4333 8.92275 11.5896C8.76647 11.7459 8.55451 11.8337 8.3335 11.8337H1.66683C1.44582 11.8337 1.23385 11.7459 1.07757 11.5896C0.921294 11.4333 0.833496 11.2213 0.833496 11.0003C0.833496 10.7793 0.921294 10.5674 1.07757 10.4111C1.23385 10.2548 1.44582 10.167 1.66683 10.167H4.16683V1.83366H1.66683C1.44582 1.83366 1.23385 1.74586 1.07757 1.58958C0.921294 1.4333 0.833496 1.22134 0.833496 1.00033Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 14.5882H15V16H5V14.5882ZM6.85714 12.6824C7.24571 13.054 7.70773 13.3424 8.21429 13.5294C8.78065 13.7606 9.38721 13.8805 10 13.8824C10.6128 13.8805 11.2193 13.7606 11.7857 13.5294C12.2759 13.3298 12.7192 13.0324 13.0879 12.6559C13.4566 12.2794 13.7427 11.8319 13.9286 11.3412C14.1505 10.8025 14.2715 10.2285 14.2857 9.64706V4H12.7143V9.64706C12.7138 10.0563 12.6413 10.4624 12.5 10.8471C12.3974 11.183 12.2274 11.4951 12 11.7647C11.7599 12.0131 11.4672 12.2059 11.1429 12.3294C10.7806 12.4767 10.3916 12.5488 10 12.5412C9.60839 12.5488 9.21938 12.4767 8.85714 12.3294C8.52587 12.1855 8.23258 11.9681 8 11.6941C7.77097 11.4257 7.60072 11.1132 7.5 10.7765C7.36902 10.4135 7.2967 10.0323 7.28571 9.64706V4H5.71429V9.64706C5.70569 10.2241 5.80247 10.798 6 11.3412C6.18927 11.8418 6.48107 12.2984 6.85714 12.6824Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <textarea
                        className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                        placeholder="Start typing here ..."
                        name="description"
                        required
                      />
                    </div>
                  </div>
                  <hr className="h-[1px] bg-gray-100 my-14" />
                  <button className="bg-purple-700 md:ml-4 rounded hover:bg-purple-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
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
