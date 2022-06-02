import { getCookie, setCookies } from "cookies-next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-medium text-gray-900">
              Login
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:8080/login", {
                  username: userName,
                  password: password,
                })
                .then(function (response) {
                  if (response.data.error !== undefined) {
                    setError(response.data.error);
                  } else {
                    setError("");
                    setCookies("user_detail", JSON.stringify(response.data));
                    router.replace("/admin");
                  }
                })
                .catch(function (error) {
                  throw error;
                });
            }}
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  UserName
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="UserName"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Pasword
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="text-sm">
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Dont Have an Account?
                </a>
              </div>
              <h1 className="text-red-500">{error}</h1>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

export const getServerSideProps = ({ req, res }) => {
  const cookie = getCookie("user_detail", { req, res });
  console.log(cookie);
  if (cookie !== undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};
