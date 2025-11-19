import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from "../store/RegisterSlice";
import { useDispatch } from "react-redux";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import axios from "axios";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    // Close modal logic here
    dispatch(setIsRegisterModalOpen(false));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const response = await axios.post("http://localhost:5000/api/register", {
      // form data here
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 "
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg min-w-[1000px] flex flex-row gap-4 h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/2 rounded-2xl">Hello world</div>
        <div className="w-1/2 bg-linear-to-br from-blue-300 to-blue-700 rounded-tl-2xl rounded-bl-2xl rounded-tr-xl rounded-br-xl">
          <h1 className="text-3xl font-semibold text-gray-200 text-center mt-8 mb-12">
            View your Own API
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-4 text-white w-8/12 mx-auto">
              <input
                type="text"
                className="border-b border-white bg-transparent outline-none mb-4 text-lg p-2"
                placeholder="First Name:"
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
            </div>
            <div className="flex flex-col justify-center gap-4 text-white w-8/12 mx-auto">
              <input
                type="text"
                className="border-b border-white bg-transparent outline-none mb-4 text-lg p-2"
                placeholder="Last Name:"
                onChange={(e) => dispatch(setLastName(e.target.value))}
              />
            </div>
            <div className="flex flex-col justify-center gap-4 text-white w-8/12 mx-auto">
              <input
                type="text"
                className="border-b border-white bg-transparent outline-none mb-4 text-lg p-2"
                placeholder="Email:"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className="flex flex-col justify-center gap-4 text-white w-8/12 mx-auto">
              <input
                type="text"
                className="border-b border-white bg-transparent outline-none mb-4 text-lg p-2"
                placeholder="Password:"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-full mt-8 hover:bg-gray-200 cursor-pointer w-86"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
