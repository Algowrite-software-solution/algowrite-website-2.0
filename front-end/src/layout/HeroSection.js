import Button from "../components/Button";
import HeroCard from "../components/HeroCard";

import ParticleBackground from "../components/ParticleBackground.js";

export default function HeroSection() {
  const ui = (
    <section className="h-[678px] mt-24 sm:mt-16  relative overflow-hidden">
      <div className="w-[100%] h-[100%] absolute ">
        <div
          class="px-4 pt-20 text-darker flex items-center flex-col "
          style={{ overflow: "hidden" }}
        >
          <h1 class="text-3xl md:text-4xl leading-8 font-bold text-center ">
            WHERE CREATIVITY MEETS <br />
            ALGORITHM
          </h1>
          <h4 class="text-center my-3 text-md px-4 md:text-xl leading-4">
            Unleash Your Vision, Let Algowrite Bring it to Life
          </h4>
          <Button
            text="Contact"
            className="bg-primary py-2 mt-10 px-10 rounded-full font-bold text-white w-max hover:bg-secondary duration-300"
          />

          <div className="flex bg-red-600 justify-center animate-appear-up mt-[130px] -z-10 ">
            <HeroCard
              imageUrl="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
              className="hidden sm:block z-40 mt-20 animate-hero-card1"
            />
            <HeroCard
              imageUrl="https://tecnomais.net/wp-content/uploads/2021/12/O-que-e-software.png"
              className="z-50 "
            />
            <HeroCard
              imageUrl="https://www.netsolutions.com/insights/wp-content/uploads/2022/01/what-is-a-software-design-pattern.webp"
              className="hidden sm:block z-40 mt-20 animate-hero-card2 "
            />
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[100%] relative -z-20  ">
        <ParticleBackground className="absolute" />
      </div>
    </section>
  );

  return ui;
}
