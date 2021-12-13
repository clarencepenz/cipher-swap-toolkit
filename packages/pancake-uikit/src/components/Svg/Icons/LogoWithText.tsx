import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264.69 291.16"
      style={{ height: "40px", width: "40px" }}
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <path
            fill={textColor}
            style={{ color: "#fff" }}
            d="M195.08,16l-17,17a108.18,108.18,0,0,0-91.52,0L69.64,16a130.93,130.93,0,0,1,125.44,0Z"
          />
          <path
            fill={textColor}
            style={{ color: "#fff" }}
            d="M53.2,57.35A107.61,107.61,0,0,0,29.37,98.22H5.67a130.54,130.54,0,0,1,31.38-57Z"
          />
          <path
            fill={textColor}
            style={{ color: "#fff" }}
            d="M259.05,98.22H235.32a107.44,107.44,0,0,0-23.81-40.87l16.16-16.13A130.64,130.64,0,0,1,259.05,98.22Z"
          />
          <path
            fill={textColor}
            style={{ color: "#fff" }}
            d="M264.69,128.86l-9.3,78-6.23-17.18a131.36,131.36,0,0,1-43.87,49.67c-19.77,13.31-39.45,26.76-58.53,41l-14.07,10.51-.33.26h0l-.34-.26-14.06-10.51c-19.08-14.26-38.76-27.71-58.53-41a131.28,131.28,0,0,1-43.87-49.67L9.3,206.87l-9.3-78L53.93,186l-18-6.53a108.23,108.23,0,0,0,72.36,56.58c1.25.28,2.5.55,3.76.78s2.52.48,3.78.68V109.31L58.51,52,42.37,35.85,22.47,16H59l4,4L79.54,36.56l52.82,52.8,52.8-52.78L205.77,16h36.44l-36,36-57.32,57.3V237.52c1.26-.2,2.51-.43,3.78-.68s2.51-.5,3.76-.78a108.25,108.25,0,0,0,72.36-56.58l-18,6.53Z"
          />
        </g>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
