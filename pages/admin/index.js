import { getCookie } from "cookies-next";
const Admin = () => {
  return <div></div>;
};

export default Admin;

export const getServerSideProps = ({ req, res }) => {
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
    return {
      redirect: {
        permanent: false,
        destination: "/admin/family",
      },
      props: {},
    };
  }
};
