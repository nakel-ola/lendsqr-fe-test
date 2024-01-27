import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="#213F7D">
      <path
        d="M10 9h6v4.5c0 .8-.7 1.5-1.5 1.5h-13C.7 15 0 14.3 0 13.5V9h6v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V9Z"
        opacity={0.4}
      />
      <path d="M14.5 4H12V2.5c0-.8-.7-1.5-1.5-1.5h-5C4.7 1 4 1.7 4 2.5V4H1.5C.7 4 0 4.7 0 5.5V8h16V5.5c0-.8-.7-1.5-1.5-1.5ZM10 4H6V3h4v1Z" />
    </g>
  </svg>
);
export default SvgBriefcase;
