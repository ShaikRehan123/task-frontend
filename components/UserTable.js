import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function UserTable({ family, setUpdateModalId, openModal }) {
  console.log(family);
  const router = useRouter();
  return (
    <>
      <table className="w-[75%] border-2 border-cyan-200 shadow-2xl">
        <thead className="text-white">
          <tr>
            <th className="border-r-2 bg-cyan-700 py-3">Id</th>
            <th className="border-r-2 bg-cyan-700 py-3">Name</th>
            <th className="border-r-2 bg-cyan-700 py-3">View</th>
            <th className="border-r-2 bg-cyan-700 py-3">Update</th>
            <th className="bg-cyan-700 py-3">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center text-cyan-900">
          {family.map((person) => {
            return (
              <tr
                className="border-r-2 bg-cyan-200 transition-all duration-300 "
                key={person.id}
              >
                <td className=" py-3 px-6 ">{person?.id}</td>
                <td className="py-3 px-6">{person?.name}</td>
                <td className=" py-3 px-6">
                  <div
                    className="flex cursor-pointer items-center justify-center space-x-2"
                    onClick={() => {
                      router.push(`/user/${person.id}`);
                    }}
                  >
                    <AiFillEye className="text-2xl text-green-500" />
                    <span className="hidden lg:block">Go to Person</span>
                  </div>
                </td>
                <td className=" py-3 px-6">
                  <div
                    className="items- flex cursor-pointer justify-center space-x-2"
                    onClick={() => {
                      setUpdateModalId(person.id);
                      openModal();
                    }}
                  >
                    <AiFillEdit className="text-2xl text-yellow-500" />
                    <span className="hidden lg:block">Edit Person</span>
                  </div>
                </td>
                <td className=" py-3 px-6">
                  <div
                    className="items- flex cursor-pointer justify-center space-x-2"
                    onClick={async function () {
                      try {
                        let response = await axios({
                          method: "delete",
                          url: `http://localhost:8080/delete_family?id=${person.id}`,
                          json: true,
                        });
                        if (response.data.status == 200) {
                          toast.error("Successfully Deleted user", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                          router.reload();
                        }
                      } catch (err) {
                        throw err;
                      }
                    }}
                  >
                    <AiFillDelete className="text-2xl text-red-500 shadow-sm" />
                    <span className="hidden lg:block">Delete Person</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}
