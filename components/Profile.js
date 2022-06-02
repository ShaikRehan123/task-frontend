import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
const Profile = ({
  name,
  description,
  photo,
  id,
  showReadMore = true,
  education,
}) => {
  const router = useRouter();
  return (
    <div className="mx-auto flex w-[95%] flex-col items-center justify-between space-x-4 rounded-md bg-emerald-400 p-3 text-white opacity-80 shadow-lg shadow-emerald-300 blur-0 lg:flex-row">
      <img src={photo} className="rounded-full" />
      <div className="flex flex-col space-y-1">
        <h1 className="text-3xl text-amber-300 underline ">{name}</h1>
        <p className="text-lg text-gray-500">Description</p>
        <span className="text-justify text-2xl [white-space:initial]">
          {description}
        </span>
        {education && (
          <>
            <p className="text-lg text-gray-500">Education</p>
            <span className="text-justify text-2xl [white-space:initial]">
              {education}
            </span>
          </>
        )}

        {!showReadMore && (
          <div
            className="flex h-10 w-32 cursor-pointer items-center space-x-2 rounded-lg bg-blue-400 p-2"
            onClick={() => {
              router.push(`/user/${id}`);
            }}
          >
            <button>Read More</button>
            <BsArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
