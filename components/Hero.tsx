import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="banner h-[650px] md:h-[900px] flex flex-col justify-between">
      <Navbar />
      <div className="mx-auto container text-center">
        <h1 className="text-4xl md:text-9xl font-extrabold">
          Boar fitness, Your Power
        </h1>
        <p className="mt-2.5 md:mt-5 text-[10px] md:text-2xl">
          Unleash Your Power with Boar!
          <br />
          Conquer goals, track progress, and ignite your inner strength with
          every session.
        </p>
      </div>
    </section>
  );
};

export default Hero;
