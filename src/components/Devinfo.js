export default function Devinfo() {
  return (
    <div>
      <h1 className="text-5xl text-gray-500 text-center font-bold">
        Who is Hasan ?
      </h1>

      <div className="h-screen relative text-gray-800">
        <div className="h-full">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_dcatp5cr.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">
            Hi , Hello ...
            <hr />
            <pre className="text-2xl md:text-sm my-5 font-mont font-semibold">
              {JSON.stringify(
                {
                  name: "Mahmudul Hasan",
                  age: null,
                  gender: "Male",
                  country: "BANGLADESH",
                },
                null,
                2
              )}
            </pre>
          </h1>
        </div>
      </div>
    </div>
  );
}
