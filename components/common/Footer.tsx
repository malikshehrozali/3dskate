import Link from "next/link";
import Image from "next/image";
import { FooterPhysics } from "./FooterPhysics";

const Footer = () => {
  const boardTextureURLs = [
    "/prismic/black-yellow-complete.png",
    "/prismic/gray-black-complete.png",
    "/prismic/green-navy-complete.png",
    "/prismic/grid-streaks-complete.png",
    "/prismic/pink-drop-complete.png",
    "/prismic/red-black-complete.png",
    "/prismic/red-white-complete.png",
    "/prismic/yellow-black-complete.png",
  ];
  return (
    <footer className="bg-texture bg-black text-brand-gray">
      <div className="relative h-[75vh] md:aspect-auto">
        <Image
          src={"/prismic/footer-image.jpg"}
          alt="Footer Image"
          fill
          className="object-cover"
        />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
      </div>
      <div className="flex items-center w-full justify-center flex-col md:flex-row gap-8 text-xl py-20">
        <Link href={"/products"}>
          <p>Boards</p>
        </Link>
        <Link href={"/customizer"}>
          <p>Customizer</p>
        </Link>
        <Link href={"/customizer"}>
          <p>Wheels</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
