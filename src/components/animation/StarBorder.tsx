import React from "react";

// Define CSS keyframes as strings for use in inline styles
const starMovementBottomKeyframes =
  "@keyframes starMovementBottom { 0% { transform: translate(0%, 0%); opacity: 1; } 100% { transform: translate(-100%, 0%); opacity: 0; } }";
const starMovementTopKeyframes =
  "@keyframes starMovementTop { 0% { transform: translate(0%, 0%); opacity: 1; } 100% { transform: translate(100%, 0%); opacity: 0; } }";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  // Create a style element for the keyframes
  React.useEffect(() => {
    // Check if the style element already exists
    const existingStyle = document.querySelector("style[data-star-animations]");
    if (!existingStyle) {
      const styleEl = document.createElement("style");
      styleEl.setAttribute("data-star-animations", "true");
      styleEl.textContent = `
        ${starMovementBottomKeyframes}
        ${starMovementTopKeyframes}
      `;
      document.head.appendChild(styleEl);

      return () => {
        // Clean up on unmount
        styleEl.remove();
      };
    }
  }, []);

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `starMovementBottom ${speed} linear infinite alternate`,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `starMovementTop ${speed} linear infinite alternate`,
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

// Animations are now defined using vanilla CSS keyframes injected into the document
// No need for tailwind.config.js modifications anymore

export default StarBorder;
