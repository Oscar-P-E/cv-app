import TextareaAutosize from "react-textarea-autosize";
import { ChangeEvent } from "react";
import { InfoType } from '../types';



type EditableContentProps = {
  info: InfoType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const EditableContent: React.FC<EditableContentProps> = ({
  info,
  handleChange,
}) => {
  return (
    <div className="content">
      <div className="mb-4">
        <div className="">
          <h1 className=" mb-2 text-7xl font-black text-cyan-600">
            <TextareaAutosize
              name="name"
              value={info.name}
              onChange={handleChange}
              className="w-full max-w-xl text-center"
            />
          </h1>
        </div>
        <div className="leading-tight">
          <div className="mb-4 mt-10">
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              className="mb-2 w-full max-w-xl text-center text-lg font-extrabold text-red-800 no-underline"
            />
            <p className="mt-0 text-center text-lg font-extrabold">
              📞{" "}
              <input
                type="tel"
                name="phone"
                value={`${info.phone}`}
                onChange={handleChange}
                className="text-center"
              />
            </p>
          </div>
        </div>
        <div className="relative mt-8 rounded-3xl border-none bg-gray-100 px-10 py-4 text-gray-600">
          <div className="absolute left-4 top-4 text-3xl text-cyan-600">❝</div>
          <div className="absolute bottom-4 right-4 text-3xl text-cyan-600">
            ❞
          </div>
          <p className="relative z-10 font-serif font-light italic">
            <TextareaAutosize
              name="intro"
              value={info.intro}
              onChange={handleChange}
              className="w-full max-w-xl"
            />
          </p>
        </div>
      </div>
      <div className="mb-4 mt-12">
        <h2 className="mb-4 text-2xl font-extrabold text-cyan-800">
          <input
            type="text"
            name="firstHeader"
            value={info.firstHeader}
            onChange={handleChange}
            className="text-center"
          />
        </h2>
        <p className="font-bold">
          <input
            type="text"
            name="firstSubHeader"
            value={info.firstSubHeader}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
        <p>
          <TextareaAutosize
            name="firstTextOne"
            value={info.firstTextOne}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
        <p>
          <TextareaAutosize
            name="firstTextTwo"
            value={info.firstTextTwo}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
      </div>
      <hr className="mb-4" />
      <div className="mb-4">
        <h2 className="mb-4 text-2xl font-extrabold  text-cyan-800">
          <input
            type="text"
            name="secondHeader"
            value={info.secondHeader}
            onChange={handleChange}
            className="text-center"
          />
        </h2>
        <p className="font-bold">
          <input
            type="text"
            name="secondSubHeader"
            value={info.secondSubHeader}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
        <p>
          <TextareaAutosize
            name="secondTextOne"
            value={info.secondTextOne}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
        <p>
          <TextareaAutosize
            name="secondTextTwo"
            value={info.secondTextTwo}
            onChange={handleChange}
            className="w-full max-w-xl text-center"
          />
        </p>
      </div>
    </div>
  );
};

export default EditableContent;
