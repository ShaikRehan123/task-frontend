import axios from "axios";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import { Carousel } from "react-responsive-carousel";

const Person = ({ family }) => {
  console.log(family);
  return (
    <>
      <Navbar />
      <div className="mb-4 mt-4 space-y-4">
        <div className=" ">
          <Profile
            key={family[0]?.id}
            name={family[0]?.name}
            id={family[0]?.id}
            photo={family[0]?.photograph_url}
            description={family[0]?.description}
            showReadMore={true}
            education={family[0]?.education_details}
          />
        </div>
        <div className="mx-auto w-[95%] rounded-md shadow-lg">
          <Carousel
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            {family[0]?.album?.map((photo) => {
              return (
                <div key={photo}>
                  <img src={photo} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Person;

export async function getServerSideProps({ params }) {
  try {
    let response = await axios({
      method: "get",
      url: `http://localhost:8080/get_person_by_id?id=${params.id}`,
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
