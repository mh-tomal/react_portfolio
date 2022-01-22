export default function Devsection() {
  return (
    <div className="my-20">
      <div className="text-center h-52 bg-red-500">
        <h1 className="text-white font-bold text-4xl py-10">My DEV Stack</h1>
      </div>

      <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
        <div className="h-96" data-aos="zoom-in">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="grid md:grid-cols-1 grid-cols-3 p-5">
          <div>
            <h1 className="text-xl font-bold">Front End</h1>
            <hr />
            <p className="font-semibold mt-2">HTML/CSS</p>
            <p className="font-semibold mt-2">React</p>

            <p className="font-semibold mt-2">Javascript</p>
            <p className="font-semibold mt-2">Angualr</p>
            <p className="font-semibold mt-2">Redux</p>
          </div>

          <div className="text-center">
            <h1 className="text-xl font-bold">UI / UX</h1>
            <hr />
            <p className="font-semibold mt-2">Bootstrap</p>
            <p className="font-semibold mt-2">Tailwind</p>

            <p className="font-semibold mt-2">Ant Design</p>
            <p className="font-semibold mt-2">Material UI</p>
            <p className="font-semibold mt-2">Semantic UI</p>
          </div>

          <div className="text-right">
            <h1 className="text-xl font-bold">Backedn and DB</h1>
            <hr />
            <p className="font-semibold mt-2">Node JS</p>
            <p className="font-semibold mt-2">Express JS</p>

            <p className="font-semibold mt-2">PHP</p>
            <p className="font-semibold mt-2">My SQL</p>
            <p className="font-semibold mt-2">Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
