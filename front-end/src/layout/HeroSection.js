import Button from "../components/Button";
import HeroCard from "../components/HeroCard";

export default function HeroSection() {
  const ui = (
    <section
      class="h-[678px] bg-white pt-20 text-darker flex items-center flex-col relative"
      style={{ overflow: "hidden" }}
    >
      <h1 class="text-4xl md:text-6xl  font-bold text-center ">
        WHERE CREATIVITY MEETS <br />
        ALGORITHM
      </h1>
      <h4 class="text-center my-3 text-lg md:text-xl">
        Unleash Your Vision, Let Algowrite Bring it to Life
      </h4>
      <Button
        text="Contact"
        className="bg-primary py-2 mt-10 px-10 rounded-full font-bold text-white w-max hover:bg-secondary duration-300"
      />

      <div className="w-screen flex justify-center mt-32">
        <HeroCard className="z-10 translate-x-56 rotate-12 translate-y-20" />
        <HeroCard className=" z-20" />
        <HeroCard className="z-10 -translate-x-56 -rotate-12 translate-y-20" />
      </div>
    </section>
  );

  return ui;
}
