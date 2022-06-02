import { useState } from "react";
import Head from "next/head";
import { FaRegUser, FaHome, FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/router";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      {showSidebar ? (
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  right-10 top-6 z-30 flex cursor-pointer items-center"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`fixed top-0 right-0 z-40  h-full w-[35vw] bg-blue-600 p-10 pl-20 text-white  duration-300 ease-in-out ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          className="mt-20 flex cursor-pointer space-x-4 text-4xl font-semibold text-white underline"
          onClick={() => {
            router.push("/");
          }}
        >
          <FaUserAlt />
          <h1 className="text-3xl">User View </h1>
        </div>
        {/* <div
          className="mt-20 flex cursor-pointer space-x-4 text-4xl font-semibold text-white underline"
          onClick={() => {
            router.push("/admin");
          }}
        >
          <FaHome />
          <h1 className="text-3xl">Home</h1>
        </div>
        <div
          className="mt-20 flex cursor-pointer space-x-4 text-4xl font-semibold text-white underline"
          onClick={() => {
            router.push("/admin/family");
          }}
        >
          <FaRegUser />
          <h1 className="text-3xl">Family Members</h1>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
