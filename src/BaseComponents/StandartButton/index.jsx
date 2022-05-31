import React from "react";

function StandartButton({ children, styles, extraTailwindClasses = "", clickHandler }) {
  return (
    <button
      type="button"
      className={`become-provider h-10 rounded-full w-full text-white whitespace-nowrap ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => clickHandler(true)}
    >
      {children}
    </button>
  );
}

export default StandartButton;
