import Head from "next/head";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import axios from "axios";
const Home = ({ family }) => {
  console.log(family);
  return (
    <>
      <Head>
        <title>My Family</title>
      </Head>
      <div className="min-h-screen space-y-4 bg-gray-200 selection:bg-blue-400 selection:bg-opacity-40 selection:text-white">
        <Navbar />
        <div className="w-full space-y-8 pb-4">
          {family?.map((person) => {
            return (
              <Profile
                key={person?.id}
                name={person?.name}
                id={person?.id}
                photo={person?.photograph_url}
                description={person?.description}
                showReadMore={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps({ req, res }) {
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
