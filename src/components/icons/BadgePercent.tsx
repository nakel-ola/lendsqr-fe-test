import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgePercent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="#213F7D" clipPath="url(#badge-percent_svg__a)">
      <path
        d="M16 8a2.75 2.75 0 0 0-1.784-2.575 2.75 2.75 0 0 0-3.641-3.64 2.75 2.75 0 0 0-5.15 0 2.75 2.75 0 0 0-3.64 3.64 2.75 2.75 0 0 0 0 5.15 2.75 2.75 0 0 0 3.64 3.64 2.75 2.75 0 0 0 5.15 0 2.75 2.75 0 0 0 3.64-3.64A2.75 2.75 0 0 0 16 8ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.384 5.677a.5.5 0 0 1-.707 0l-.354-.354a.5.5 0 0 1 0-.707l4.293-4.293a.5.5 0 0 1 .707 0l.354.354a.5.5 0 0 1 0 .707l-4.293 4.293ZM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        opacity={0.4}
      />
      <path d="M6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.384 5.677a.502.502 0 0 1-.707 0l-.354-.354a.5.5 0 0 1 0-.707l4.293-4.293a.5.5 0 0 1 .707 0l.354.354a.502.502 0 0 1 0 .707l-4.293 4.293ZM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </g>
    <defs>
      <clipPath id="badge-percent_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgePercent;
