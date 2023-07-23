import "./App.css";
import { useState } from "react";
import EditableContent from "./components/EditableContent";
import NonEditableContent from "./components/NonEditableContent";
import { InfoType } from "./types";

const initialState: InfoType = {
  name: "Johnny Appleseed",
  email: "applelover123@example.com",
  phone: "123-456-7890",
  intro:
    "Innovative Apple full stack full fruit bowl developer with over 50 years experience in responsive cross-platform Visual Basic.",
  firstHeader: "Education",
  firstSubHeader: "Fruit University",
  firstTextOne: "Majored in Apple Studies",
  firstTextTwo: "Graduated June 2023",
  secondHeader: "Experience",
  secondSubHeader: "Apple Lovers Anonymous",
  secondTextOne: "Chief Apple Officer",
  secondTextTwo: "Dates: Started July 2023, and still going strong!",
};

function App() {
  const [info, setInfo] = useState<InfoType>(initialState);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex justify-center bg-gray-600 p-3 text-center ">
      <div className="justify-cente prose prose-lg flex min-h-screen max-w-2xl items-center">
        <div className="paper relative m-4 animate-fadeIn rounded-md bg-gray-200 p-12 shadow-lg">
          <div
            className="corner absolute right-0 top-0 h-0 w-0"
            style={{
              borderTop: "10vw solid rgb(163 163 163)", // bg-neutral-400
              borderLeft: "10vw solid transparent",
            }}
          />

          {editMode ? (
            <EditableContent info={info} handleChange={handleChange} />
          ) : (
            <NonEditableContent info={info} />
          )}

          <div className="mt-8 flex justify-center">
            <button
              onClick={toggleEditMode}
              className="my-4 rounded-xl border-none bg-cyan-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-cyan-900"
            >
              {editMode ? "Save Changes" : "Edit CV"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
