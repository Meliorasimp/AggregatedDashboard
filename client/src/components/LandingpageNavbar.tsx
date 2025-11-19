import monitor from "../assets/monitor.png";
import "../styles/index.css";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch } from "react-redux";

const LandingpageNavbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="h-[10vh] bg-blue-50 w-full flex justify-between items-center">
      <div className="flex items-center ml-12 text-2xl font-semibold text-primary-color">
        <img src={monitor} alt="Monitor Icon" className="w-8 h-8" />
        <h1 className=" ml-4">DataMix</h1>
      </div>
      <div className="flex gap-16 text-lg text-primary-color items-center">
        <h1 className="hover:border-b cursor-pointer">Home</h1>
        <h1 className="hover:border-b cursor-pointer">API</h1>
        <h1 className="hover:border-b cursor-pointer">About</h1>
        <h1 className="hover:border-b cursor-pointer">Contact</h1>
      </div>
      <button
        className="mr-12 text-lg text-primary-color bg-gray-400 px-5 py-1 rounded-full hover:bg-gray-500 cursor-pointer"
        onClick={() => dispatch(setIsRegisterModalOpen(true))}
      >
        Login
      </button>
    </nav>
  );
};

export default LandingpageNavbar;
