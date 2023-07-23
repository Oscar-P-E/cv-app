import { InfoType } from "../types";

type NonEditableContentProps = {
  info: InfoType;
};

const NonEditableContent: React.FC<NonEditableContentProps> = ({ info }) => {
  return (
    <div className="content">
      <div className="mb-4">
        <div className="">
          <h1 className=" mb-2 text-7xl font-black text-cyan-600">
            {info.name}
          </h1>
        </div>
        <div className="leading-tight">
          <div className="mb-4 mt-10">
            <a
              href={`mailto:${info.email}`}
              className="mb-2 text-center text-lg font-extrabold text-red-800 no-underline"
            >
              {info.email}
            </a>
            <p className="mt-0 text-center text-lg font-extrabold">
              📞 {info.phone}
            </p>
          </div>
        </div>
        {info.intro && (
          <div className="quotebox relative mt-8 rounded-3xl border-none bg-gray-100 px-10 py-4 text-gray-600">
            <div className="absolute left-4 top-4 text-3xl text-cyan-600">
              ❝
            </div>
            <div className="absolute bottom-4 right-4 text-3xl text-cyan-600">
              ❞
            </div>
            <p className="relative z-10 font-serif font-light italic">
              {info.intro}
            </p>
          </div>
        )}
      </div>
      <div className="mb-4 mt-12">
        <h2 className="mb-4 text-2xl font-extrabold text-cyan-800">
          {info.firstHeader}
        </h2>
        <p className="font-bold">{info.firstSubHeader}</p>
        <p>{info.firstTextOne}</p>
        <p>{info.firstTextTwo}</p>
      </div>
      <hr className="mb-4" />
      <div className="mb-4">
        <h2 className="mb-4 text-2xl font-extrabold  text-cyan-800">
          {info.secondHeader}
        </h2>
        <p className="font-bold">{info.secondSubHeader}</p>
        <p>{info.secondTextOne}</p>
        <p>{info.secondTextTwo}</p>
      </div>
    </div>
  );
};

export default NonEditableContent;
