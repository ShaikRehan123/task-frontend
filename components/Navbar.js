import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-blue-400 p-2 text-white shadow-lg shadow-blue-200">
      <div className="flex space-x-4">
        <Image
          src="/myfamily.png"
          width={200}
          height={50}
          className="cursor-pointer "
          alt="Logo"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="flex items-center justify-between rounded-md bg-slate-100 bg-opacity-50 p-1">
          <input
            className="w-full bg-transparent text-gray-600 outline-none placeholder:text-gray-400 "
            placeholder="Search Images"
          />
          <AiOutlineSearch className="cursor-pointer text-3xl text-gray-800" />
        </div>
      </div>
      <div className="mr-4 flex items-center space-x-3">
        <span className="duration-400 cursor-pointer text-lg transition-all hover:[box-shadow:0_3px_#3889eb]">
          Home
        </span>
        <span className="duration-400 cursor-pointer text-lg transition-all hover:[box-shadow:0_3px_#3889eb]">
          About
        </span>
        <span className="duration-400 cursor-pointer text-lg transition-all hover:[box-shadow:0_3px_#3889eb]">
          Gallery
        </span>
        <span className="duration-400 cursor-pointer text-lg transition-all hover:[box-shadow:0_3px_#3889eb]">
          Contact
        </span>
        <div className="duration-400 flex cursor-pointer items-center space-x-1 rounded-md bg-slate-300 p-2 text-gray-600 transition-all hover:[box-shadow:0_3px_#3889eb]  ">
          <span
            className="text-lg"
            onClick={() => {
              router.push("/admin");
            }}
          >
            Admin
          </span>
          <RiAdminLine className="text-xl text-gray-900" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
