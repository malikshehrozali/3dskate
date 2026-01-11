import React from "react";
import Bounded from "../Bounded";
import { products } from "../../data/products.js";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import Button from "../Button";
import { HorizontalLine, VerticalLine } from "../svgs/Line";
import clsx from "clsx";
import { Scribble } from "../svgs/Scribble";

const Products = () => {
  const verticleLineCss = `absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400`;
  const horizontalLineCss = `-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400 `;
  return (
    <Bounded className="bg-texture bg-brand-gray">
      <div className="">
        <h2 className="font-bowl uppercase text-4xl xl:text-6xl md:text-5xl mb-4 md:mb-6 relative text-center">
          Latest Drops
        </h2>
        <p className="text-center mb-6 md:mb-10">
          Grab Our Freshest Drops, Before They're All Gone
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group mx-auto my-auto max-w-72 px-8 pt-4 w-full h-full"
          >
            <VerticalLine className={clsx(verticleLineCss, "left-4")} />
            <VerticalLine className={clsx(verticleLineCss, "right-4")} />
            <HorizontalLine className={clsx(horizontalLineCss)} />
            <div className="flex text-sm md:text-xl justify-between  items-center">
              <span>${product.price}</span>
              <span className="inline-flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                37
              </span>
            </div>
            <div className="-mb-1 overflow-hidden py-4">
              <Scribble
                className="absolute inset-0 h-full w-full"
                color={product.color}
              />
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={100}
                className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-150 ease-in-out group-hover:scale-150"
              />
            </div>
            <HorizontalLine className={clsx(horizontalLineCss)} />
            <h3 className="font-bowl leading-tight text-lg md:text-xl my-2 text-center">
              {product.name}
            </h3>
            <div className="absolute flex inset-0 justify-center items-center opacity-100 lg:opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <Link href={`/products/${product.id}`}>
                <Button>Customize</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Products;
