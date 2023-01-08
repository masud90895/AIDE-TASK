import React, { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsClipboard,
  BsMoon
  
} from "react-icons/bs";
import {AiOutlineDown} from "react-icons/ai";
import {RxAvatar} from "react-icons/rx"
import {HiOutlineClipboardList} from "react-icons/hi"

import { Menu} from "@headlessui/react";
import { toast } from "react-hot-toast";

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  const [navShow, setNavShow] = useState(true);


  return (
    <>
      <div className="w-full h-full bg-[#F4F5FA]">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div
            className={`absolute print:hidden lg:relative w-64 h-screen  bg-[#F4F5FA] hidden  ${
              navShow ? "lg:block" : "lg:hidden"
            }`}
          >
            <aside className=" fixed print:hidden z-10 top-0 pb-3 px-6 w-full flex flex-col  h-screen  bg-[#F4F5FA] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
              <div className="flex items-center justify-between text-xl">
                <Link to="/" className="font-bold  py-4">
                  <div title="home">ADMIN PANEL</div>
                </Link>
                {/* link add  */}
              </div>
              <div>
                <Menu>
                  <Menu.Button className="py-2 flex items-center w-full justify-between text-xl">
                   
                  <Link to="/admin">
                      <div className="flex items-center gap-2">
                        <BsClipboard />
                        <h1> All User </h1>
                      </div>
                  </Link>
                      <div className="text-right">
                      <AiOutlineDown />
                      </div>
                 
                  </Menu.Button>
                  <Menu.Items className="flex flex-col justify-end">
                    <Menu.Item className='text-right py-2'>
                      {({ active }) => (
                        <button
                        onClick={()=>toast.error("This Route is Not Activated")}
                          className={`${active && "bg-blue-500"}`}
                          
                        >
                          Users Sub Menu-1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item className='text-right'>
                      {({ active }) => (
                        <button onClick={()=>toast.error("This Route is Not Activated")}
                          className={`${active && "bg-blue-500"}`}
                          
                        >
                          Users Sub Menu-3
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <hr />
                <Link to='add-user'><h1 className="flex items-center gap-2 text-xl py-4"><RxAvatar/>Add User</h1></Link>
                <hr />
                <Link to='add-product'><h1  className="flex items-center gap-2 text-xl py-4"><HiOutlineClipboardList/>Add Product</h1></Link>
              </div>
            </aside>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full print:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full print:hidden h-full absolute z-40  transform -translate-x-full"
            }
            id="mobile-nav"
          >
            <div className="bg-gray-800 print:hidden opacity-50 absolute h-full w-full lg:hidden" />
            <div className="absolute z-40 sm:relative w-64 md:w-96  pb-4 bg-[#F4F5FA] lg:hidden transition duration-150 ease-in-out h-full">
              <aside className="   px-6 w-full flex flex-col justify-between h-screen  bg-[#F4F5FA] transition duration-300  lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                  <div className="flex items-center justify-between text-2xl">
                    <Link to="/" className=" py-4">
                      <div title="home">ADMIN PANEL</div>
                    </Link>
                    <BsFillArrowLeftCircleFill
                      onClick={() => setShow(!show)}
                      className="text-[#975EFE]"
                    />

                    
                  </div>
              <div>
                <Menu>
                  <Menu.Button className="py-2 flex items-center w-full justify-between text-xl">
                   
                  <Link to="/admin">
                      <div className="flex items-center gap-2">
                        <BsClipboard />
                        <h1> All User </h1>
                      </div>
                  </Link>
                      <div className="text-right">
                      <AiOutlineDown />
                      </div>
                 
                  </Menu.Button>
                  <Menu.Items className="flex flex-col justify-end">
                    <Menu.Item className='text-right py-2'>
                      {({ active }) => (
                        <button
                        onClick={()=>toast.error("This Route is Not Activated")}
                          className={`${active && "bg-blue-500"}`}
                          
                        >
                          Users Sub Menu-1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item className='text-right'>
                      {({ active }) => (
                        <button onClick={()=>toast.error("This Route is Not Activated")}
                          className={`${active && "bg-blue-500"}`}
                          
                        >
                          Users Sub Menu-3
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <hr />
                <Link to='add-user'><h1 className="flex items-center gap-2 text-xl py-4"><RxAvatar/>Add User</h1></Link>
                <hr />
                <Link to='add-product'><h1  className="flex items-center gap-2 text-xl py-4"><HiOutlineClipboardList/>Add Product</h1></Link>
              </div>
                  
                </div>
              </aside>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="w-full">
            {/* Navigation starts */}
            <nav className="h-16 print:hidden flex items-center lg:items-stretch justify-end lg:justify-between bg-[#F4F5FA]   z-10 ">
              <div className="hidden lg:flex w-full pr-6 lg:mx-[80px]">
                <div className="w-1/2 h-full hidden lg:flex items-center ">
                  {navShow ? (
                    <BsFillArrowLeftCircleFill
                      onClick={() => setNavShow(!navShow)}
                      className="text-[#975EFE] text-2xl"
                    />
                  ) : (
                    <BsFillArrowRightCircleFill
                      onClick={() => setNavShow(!navShow)}
                      className="text-[#975EFE] text-2xl"
                    />
                  )}
                </div>
                <div className="w-1/2 hidden lg:flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    
                    <div className="h-full w-20 flex items-center justify-center  mr-4 cursor-pointer text-gray-600">
                    <BsMoon onClick={()=>toast.error("this feature not available right now")} className="font-bold text-xl"/>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center ">
                      <div className="relative cursor-pointer text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        <div className="w-2 h-2 rounded-full bg-red-400  absolute inset-0 mt-1 mr-1 m-auto" />
                      </div>
                    </div>
                    <div  className="h-full w-20 flex items-center justify-center ">
                      <div className="relative cursor-pointer text-gray-600">
                        <img className="w-[40px] rounded-2xl" src="https://s3-alpha-sig.figma.com/img/e0f4/5fcb/04a5be3e74157ed546f35c0cb9e966aa?Expires=1673827200&Signature=ZTOsumFi61mxDEBR6a~EwpmDPhLNQPpgC5s7R~JyPycJfTrpJCk5Wnc3oyo~q8jXnqwEE65SWzi9p0nqhKRxKUPscWuAvk7c6JO5HWhRBPWmGh9hOpbVwjQuBWqp3wzBEipWeetO4nossuRRJoMcD1MAIp4JY7XG9dOvyrfOpwb-D0TOEm6HTF2Sip~pg-VfQvkxnGoxDU1TVOWA9Z-YloKR21Bs5L0O--GuetOtAmGiGC4jhIAOhJ4zq-Kryix9bSZRDD5lHHovHpuoDXDhAkIfHX~csI46IdKulPM1EfkFGw3cyPZ4bS98FqJibHDA2G2Bajgr0~Q2v0ta5ZgTgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="w-2 h-2 rounded-full bg-[#56CA00]  absolute inset-0 mb-1 mr-1 m-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <div className="lg:hidden flex w-full pr-6 lg:mx-[80px]">
                <div className="w-1/2 h-full lg:hidden flex items-center ">
                  {navShow ? (
                    <BsFillArrowLeftCircleFill
                      onClick={() => setNavShow(!navShow)}
                      className="text-[#975EFE] text-2xl"
                    />
                  ) : (
                    <BsFillArrowRightCircleFill
                      onClick={() => setNavShow(!navShow)}
                      className="text-[#975EFE] text-2xl"
                    />
                  )}
                </div>
                <div className=" lg:hidden flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    
                    <div className="h-full w-20 flex items-center justify-center  cursor-pointer text-gray-600">
                    <BsMoon className="font-bold text-xl"/>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center ">
                      <div className="relative cursor-pointer text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        <div className="w-2 h-2 rounded-full bg-red-400  absolute inset-0 mt-1 mr-1 m-auto" />
                      </div>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center ">
                      <div className="relative cursor-pointer text-gray-600">
                        <img className="w-[40px] rounded-2xl" src="https://s3-alpha-sig.figma.com/img/e0f4/5fcb/04a5be3e74157ed546f35c0cb9e966aa?Expires=1673827200&Signature=ZTOsumFi61mxDEBR6a~EwpmDPhLNQPpgC5s7R~JyPycJfTrpJCk5Wnc3oyo~q8jXnqwEE65SWzi9p0nqhKRxKUPscWuAvk7c6JO5HWhRBPWmGh9hOpbVwjQuBWqp3wzBEipWeetO4nossuRRJoMcD1MAIp4JY7XG9dOvyrfOpwb-D0TOEm6HTF2Sip~pg-VfQvkxnGoxDU1TVOWA9Z-YloKR21Bs5L0O--GuetOtAmGiGC4jhIAOhJ4zq-Kryix9bSZRDD5lHHovHpuoDXDhAkIfHX~csI46IdKulPM1EfkFGw3cyPZ4bS98FqJibHDA2G2Bajgr0~Q2v0ta5ZgTgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="w-2 h-2 rounded-full bg-[#56CA00]  absolute inset-0 mb-1 mr-1 m-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                )}
              </div>
            </nav>
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="lg:mx-[80px]">
              {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
