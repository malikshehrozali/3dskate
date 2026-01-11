"use client";
import clsx from "clsx";
import Image from "next/image";
import { use, useEffect, useRef } from "react";
interface imageProps {
  backgroundImage: string;
  frontImage: string;
  className?: string;
}
const Images = ({ backgroundImage, frontImage, className }: imageProps) => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const animationFrameId = requestAnimationFrame(animate);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerHeight, innerWidth } = window;
      const mouseX = (e.clientX / innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / innerHeight - 0.5) * 2;
      targetPosition.current = { x: mouseX * -20, y: mouseY * -20 };
    };
    function animate() {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;
      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;
      currentPosition.current = { x: newX, y: newY };
      if (backgroundImageRef.current) {
        backgroundImageRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
      if (frontImageRef.current) {
        frontImageRef.current.style.transform = `translate3d(${newX * 2.5}px, ${
          newY * 2.5
        }px, 0)`;
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={backgroundImageRef}
        className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
        <Image
          src={backgroundImage}
          alt="background image"
          width={300}
          height={300}
        />
      </div>
      <div
        ref={frontImageRef}
        className={clsx("col-start-1 row-start-1 transition-transform")}
      >
        <Image
          src={frontImage}
          alt="background image"
          width={300}
          height={300}
          className="max-h-125 h-full w-auto"
        />
      </div>
    </div>
  );
};

export default Images;
