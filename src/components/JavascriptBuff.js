export default function JavaScriptBuff() {
  return (
    <div className="my-20">
      <div className="text-center h-52 bg-primary">
        <h1 className="text-white font-bold text-4xl py-10">
          Yes You Are Right...I am Javascript Buff
        </h1>
      </div>

      <div className="md:mx-5 mx-32 shadow-2xl bg-neutral-700 -mt-20 rounded-lg">
        <div className="h-96" data-aos="zoom-in">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <p className="text-2xl my-5 font-semibold md:px-5 px-14 py-10 text-white">
          JavaScript is one of the most top-ranked programming languages because
          of its ubiquitous use on all platforms and mass adoption. Main Use
          Cases: Web Development.
        </p>
      </div>
    </div>
  );
}
