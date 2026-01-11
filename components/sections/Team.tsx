import React from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { SkaterScribble } from "../svgs/SkaterScribble";
import clsx from "clsx";

const Team = () => {
  const team = [
    {
      id: 1,
      firstName: "Sophie",
      lastName: "Castillo",
      frontImage: "/prismic/sophie-front.png",
      backImage: "/prismic/sophie-back.png",
    },
    {
      id: 2,
      firstName: "Dylan",
      lastName: "Foster",
      frontImage: "/prismic/dylan-front.png",
      backImage: "/prismic/dylan-back.png",
    },
    {
      id: 3,
      firstName: "Jordan",
      lastName: "Lee",
      frontImage: "/prismic/jordan-front.png",
      backImage: "/prismic/jordan-back.png",
    },
    {
      id: 4,
      firstName: "Carter",
      lastName: "Bell",
      frontImage: "/prismic/carter-front.png",
      backImage: "/prismic/carter-back.png",
    },
  ];
  return (
    <Bounded className="rlative bg-texture bg-brand-blue text-white">
      <h2 className="font-bowl uppercase text-4xl xl:text-6xl md:text-5xl max-w-2xl relative text-center mb-10">
        Team
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((members, index) => (
          <div
            key={members.id}
            className="skater group relative flex flex-col items-center gap-4"
          >
            <div className="stack-layout overflow-hidden">
              <Image
                src={members.backImage}
                alt={`${members.firstName} ${members.lastName} Back Image`}
                width={500}
                height={200}
                className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[0.8]"
              />
              <SkaterScribble
                className={clsx(
                  "relative",
                  index === 0 && "text-brand-orange",
                  index === 1 && "text-brand-blue",
                  index === 2 && "text-brand-lime",
                  index === 3 && "text-brand-navy"
                )}
              />
              <Image
                src={members.frontImage}
                alt={`${members.firstName} ${members.lastName} Front Image`}
                width={500}
                height={200}
                className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110 z-5"
              />
              <div className="relative h-48 w-full place-self-end bg-linear-to-t from-black via-transparent to-transparent"></div>
              <h2 className="relative grid place-self-end justify-self-start p-2 font-bowl text-brand-gray z-10 text-xl md:text-2xl">
                <span>{members.firstName}</span>
                <span>{members.lastName}</span>
              </h2>
            </div>
            <Link href={"/products"}>
              <Button size="sm">Build Board</Button>
            </Link>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Team;
