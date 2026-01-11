import clsx from "clsx";
import React from "react";

const Bounded = ({
  className,
  children,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "px-6 py-10 md:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      style={style}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
};

export default Bounded;
