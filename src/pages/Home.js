export default function Home() {
  return (
    <div>
      <div className="h-screen bg-theme">
        <div
          className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-white transform rotate-6 md:rotate-0"
        >
          <div className="h-1/2">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_kyu7xb1v.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="font-bold md:px-5 ">
            <h1 className="text-7xl md:text-5xl text-white ">
              Hii, I am <b className="text-yellow-500 ">MAHMUDUL HASAN</b>
            </h1>
            <h1 className="text-4xl md:text-2xl  text-white ">
              Front-end <b className="text-red-400">Developer</b>, Learner
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
