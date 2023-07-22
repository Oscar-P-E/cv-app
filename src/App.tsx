import "./App.css";

function App() {
  return (
    <div className="flex justify-center bg-gray-600 p-6">
      <div className="prose flex min-h-screen max-w-3xl items-center justify-center bg-black">
        <div className="relative m-4 animate-fadeIn rounded bg-white p-12 shadow-2xl">
          <div
            className="absolute right-0 top-0 h-0 w-0"
            style={{
              borderTop: "5vw solid black",
              borderLeft: "5vw solid transparent",
            }}
          />

          <div className="mb-4">
            <div className="flex justify-center">
              <h1 className="text-6xl font-bold  text-cyan-800">
                Johnny Appleseed
              </h1>
            </div>
            <blockquote className="border-none pl-0">
              Innovative Apple full stack full fruit bowl developer with over 50
              years experience in responsive cross-platform Visual Basic.
              Innovative Apple full stack full fruit bowl developer with over 50
              years experience in responsive cross-platform Visual Basic.
            </blockquote>
          </div>
          <div className="main-content leading-tight">
            <div className="mb-4">
              <p className="mb-1 text-lg font-semibold text-red-800">
                applelover123@example.com
              </p>
              <p className="text-lg font-bold">📞 123-456-7890</p>
            </div>
            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-semibold text-cyan-800">
                Education
              </h2>
              <p className="font-bold">Fruit University</p>
              <p>Majored in Apple Studies</p>
              <p>Graduated June 2023</p>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-semibold  text-cyan-800">
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
