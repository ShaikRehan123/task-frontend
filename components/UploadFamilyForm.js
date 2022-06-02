import { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
export default function UploadFamilyForm({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) {
  const router = useRouter();
  Modal.defaultStyles = {};

  Modal.setAppElement("body");

  const form = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    try {
      let response = await axios({
        method: "POST",
        url: "http://localhost:8080/upload_family",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      // router.reload();
      toast.success("Successfully created user", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModal();
      router.reload();
      form.current.reset();
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add Family Person"
      >
        <AiOutlineClose
          className="ml-2 mt-2 cursor-pointer text-right text-4xl text-red-400"
          onClick={closeModal}
        />
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={onSubmit} ref={form}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Rehan Shaik"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="education_details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Education Details
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="education_details"
                      name="education_details"
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Write your education details"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    About your Education
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Write about yourself"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description about you
                  </p>
                </div>
                <div>
                  <div className="mt-8 flex justify-center">
                    <div className="max-w-2xl rounded-lg bg-gray-50 shadow-xl">
                      <div className="m-4">
                        <label className="mb-2 inline-block text-gray-500">
                          Select your profile picture
                        </label>
                        <div className="flex w-full items-center justify-center">
                          <label className="flex h-32 w-full flex-col border-4 border-dashed border-blue-200 hover:border-gray-300 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-400 group-hover:text-gray-600"
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
                                Attach a file
                              </p>
                            </div>
                            <input
                              type="file"
                              className="opacity-0"
                              name="profile-picture"
                              accept=".jpg,.png,.jpeg"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-8 flex justify-center">
                    <div className="max-w-2xl rounded-lg bg-gray-50 shadow-xl">
                      <div className="m-4">
                        <label className="mb-2 inline-block text-gray-500">
                          Gallery Upload
                        </label>
                        <div className="flex w-full items-center justify-center">
                          <label className="flex h-32 w-full flex-col border-4 border-dashed border-blue-200 hover:border-gray-300 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-400 group-hover:text-gray-600"
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
                                Attach files
                              </p>
                            </div>
                            <input
                              type="file"
                              className="opacity-0"
                              name="gallery"
                              multiple={true}
                              accept=".jpg,.png,.jpeg"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}
