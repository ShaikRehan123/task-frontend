import axios from "axios";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import EditFamilyForm from "../../components/EditFamilyForm";
import Sidebar from "../../components/Sidebar";
import UploadFamilyForm from "../../components/UploadFamilyForm";
import { UserTable } from "../../components/UserTable";
const Admin = ({ family }) => {
  console.log(family);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [udpateModalId, setUpdateModalId] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [modal2IsOpen, set2IsOpen] = useState(false);

  function open2Modal() {
    set2IsOpen(true);
  }

  function afterOpen2Modal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function close2Modal() {
    set2IsOpen(false);
  }
  return (
    <div className="bg-[#6dd3e7]">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <UploadFamilyForm
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
        <EditFamilyForm
          modalIsOpen={modal2IsOpen}
          afterOpenModal={afterOpen2Modal}
          closeModal={close2Modal}
          id={udpateModalId}
        />
        <UserTable
          family={family}
          setUpdateModalId={setUpdateModalId}
          openModal={open2Modal}
        />
        <div className="mt-2">
          <button
            className="rounded-lg bg-cyan-600 p-3 text-white shadow-md shadow-cyan-300"
            onClick={() => {
              openModal();
            }}
          >
            Add Person
          </button>
        </div>
      </div>
      <ToastContainer />
      <Sidebar />
    </div>
  );
};

export default Admin;

export async function getServerSideProps({ req, res }) {
  const cookie = getCookie("user_detail", { req, res });
  if (cookie == undefined || cookie == {}) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  } else {
    try {
      let response = await axios({
        method: "get",
        url: "http://localhost:8080/get_all_family",
        json: true,
      });
      return {
        props: {
          family: response.data.data,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }
}
