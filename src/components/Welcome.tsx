import RotatingText from "./RotatingText";

export function Welcome() {
  return (
    <div className="w-full pb-10">
      <img
        className="w-full h-screen object-cover"
        src="black-house.jpeg"
        alt="Black House"
      />
      <div className="z-10 p-5 backdrop-blur-xl bg-black/80 rounded-sm font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl sm:text-6xl px-4 py-2">
          Nordic Renhus AB
        </h1>
        <p className="text-white text-center text-lg sm:text-4xl mt-4 px-4 py-2">
          Din byggfirma för <br />
          <RotatingText
            texts={["Rivning", "Demontering", "Markarbete"]}
            mainClassName="justify-center inline-block"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 pt-1"
            rotationInterval={4000}
          />
          <br />i Stockholm
        </p>
      </div>
    </div>
  );
}
