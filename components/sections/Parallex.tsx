import Bounded from "../Bounded";
import clsx from "clsx";
import Button from "../Button";
import Images from "../common/Images";

const data = [
  {
    theme: "Blue",
    backgroundImage: "/prismic/paint-background.png",
    frontImage: "/prismic/guy-1.png",
    heading: "Crafted For KickFlip",
    description:
      "Built for high landing, our boards are designed for the perfect landing.",
    buttonText: "Get Board",
  },
  {
    theme: "Orange",
    backgroundImage: "/prismic/paint-background.png",
    frontImage: "/prismic/guy-2.png",
    heading: "Crafted For KickFlip",
    description:
      "Built for high landing, our boards are designed for the perfect landing.",
    buttonText: "Get Board",
  },
  {
    theme: "Navy",
    backgroundImage: "/prismic/paint-background.png",
    frontImage: "/prismic/guy-4.png",
    heading: "Crafted For KickFlip",
    description:
      "Built for high landing, our boards are designed for the perfect landing.",
    buttonText: "Get Board",
  },
  {
    theme: "Lime",
    backgroundImage: "/prismic/paint-background.png",
    frontImage: "/prismic/guy-3.png",
    heading: "Crafted For KickFlip",
    description:
      "Built for high landing, our boards are designed for the perfect landing.",
    buttonText: "Get Board",
  },
];

const Parallex = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Bounded
          key={index}
          style={{ top: `${index * 2}rem` }}
          className={clsx(
            `sticky`,
            item.theme === "Blue" && "bg-texture bg-brand-blue text-white",
            item.theme === "Orange" && "bg-texture bg-brand-orange text-white",
            item.theme === "Navy" && "bg-texture bg-brand-navy text-white",
            item.theme === "Lime" && "bg-texture bg-brand-lime text-white"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div
              className={clsx(
                "flex flex-col items-center gap-8 md:text-left md:items-start text-center",
                item.theme === "Lime" && "md:order-2",
                item.theme === "Orange" && "md:order-2"
              )}
            >
              <h2 className="font-bowl uppercase text-4xl xl:text-6xl md:text-5xl max-w-2xl relative">
                {item.heading}
              </h2>
              <p className="max-w-md text-lg leading-relaxed ">
                {item.description}
              </p>
              <Button
                size="sm"
                color={item.theme === "Lime" ? "orange" : "lime"}
              >
                {item.buttonText}
              </Button>
            </div>
            <div>
              <Images
                frontImage={item.frontImage}
                backgroundImage={item.backgroundImage}
              />
            </div>
          </div>
        </Bounded>
      ))}
    </div>
  );
};

export default Parallex;
