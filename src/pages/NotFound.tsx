import sloth from "../assets/images/sloth.png";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="mt-56 flex flex-col justify-center items-center">
        <div className="w-full h-60 bg-cover bg-center bg-no-repeat bg-NotFound relative border-b-4 border-yellow-800 border-opacity-30">
          <div className="absolute top-20 left-32 text-white italic font-charm">
            <h2 className="text-7xl text-yellow-600">404...</h2>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 p-2">
        <section className="m-10 max-w-[800px] flex flex-col justify-center bg-neutral-200 rounded-3xl shadow-2xl">
          <div className="m-20 flex gap-8">
            <div className="flex flex-col w-full gap-10">
              <h3 className="text-2xl text-yellow-900 uppercase font-semibold flex gap-1 items-center">
                Well this is a bit ironic, isn't it...
              </h3>
              <h4 className="text-md">
                Unfortunately our software developers ran out of coffee and left
                me with the task of fixing this page.
              </h4>
              <h4 className="text-md">
                So... it should be ready in a jiffy...
              </h4>
              <img
                className="object-contain h-96 animate-wiggle"
                src={sloth}
                alt="Sloth in a tree facing the camera"
              />
              <h4 className="text-md">
                In the meanwhile, please visit our online shop and find your
                favorite coffee!
              </h4>

              <Link
                className="px-5 pt-2 pb-3 w-fit rounded-xl text-xl border-2 border-yellow-950 text-white bg-yellow-800 bg-opacity-75 hover:text-yellow-950  hover:bg-white hover:border-white hover:shadow-yellow-50 hover:shadow-[0_0_20px_2px]"
                to="../shop"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
