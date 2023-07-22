import "./App.css";

function App() {
  return (
    <div className="flex justify-center bg-gray-600 p-6 text-center ">
      <div className="justify-cente prose prose-lg flex min-h-screen max-w-2xl items-center">
        <div className="paper relative m-4 animate-fadeIn rounded-xl bg-gray-200 p-12 shadow-lg">
          <div
            className="corner absolute right-0 top-0 h-0 w-0"
            style={{
              borderTop: "10vw solid #aaa", // bg-gray-600
              borderLeft: "10vw solid transparent",
            }}
          />
          <div className="content">
            <div className="mb-4">
              <div className="">
                <h1 className="mb-2 text-7xl font-black text-cyan-600">
                  Johnny Appleseed
                </h1>
              </div>
              <div className="leading-tight">
                <div className="mb-4 mt-10">
                  <p className="mb-2 text-center text-lg font-extrabold text-red-800">
                    applelover123@example.com
                  </p>
                  <p className="mt-0 text-center text-lg font-extrabold">
                    📞 123-456-7890
                  </p>
                </div>
              </div>
              <div className="relative mt-8 rounded-3xl border-none bg-gray-100 px-10 py-4 text-gray-600">
                <div className="absolute left-4 top-4 text-3xl text-cyan-600">
                  ❝
                </div>
                <div className="absolute bottom-4 right-4 text-3xl text-cyan-600">
                  ❞
                </div>
                <p className="relative z-10 italic font-serif font-light">
                  Innovative Apple full stack full fruit bowl developer with
                  over 50 years experience in responsive cross-platform Visual
                  Basic.
                </p>
              </div>
            </div>
            <div className="mb-4 mt-12">
              <h2 className="mb-4 text-2xl font-extrabold text-cyan-800">
                Education
              </h2>
              <p className="font-bold">Fruit University</p>
              <p>Majored in Apple Studies</p>
              <p>Graduated June 2023</p>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-extrabold  text-cyan-800">
                Experience
              </h2>
              <p className="font-bold">Apple Lovers Anonymous</p>
              <p>Chief Apple Officer</p>
              <p>Start Date: July 2023</p>
              <p>End Date: Still Going Strong!</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="my-4 rounded-xl border-none bg-cyan-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-cyan-900">
              Edit CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
