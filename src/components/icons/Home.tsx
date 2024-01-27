import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <g fill="#213F7D" clipPath="url(#home_svg__a)">
      <path
        d="M9.333 12.877v-2.655a.444.444 0 0 0-.444-.444H7.11a.444.444 0 0 0-.444.444v2.659a.444.444 0 0 1-.443.444l-3.113.008a.444.444 0 0 1-.444-.444V8.335l5.122-4.218a.339.339 0 0 1 .425 0l5.12 4.216v4.556a.444.444 0 0 1-.445.444l-3.111-.008a.445.445 0 0 1-.445-.447Z"
        opacity={0.4}
      />
      <path d="m15.925 7.454-.708.861a.334.334 0 0 1-.47.046L8.215 2.978a.339.339 0 0 0-.425 0L1.255 8.361a.333.333 0 0 1-.47-.046l-.708-.86a.333.333 0 0 1 .045-.47l7.03-5.79a1.333 1.333 0 0 1 1.695 0l2.486 2.044V1.222a.333.333 0 0 1 .334-.333h1.555a.333.333 0 0 1 .334.333V5.07l2.322 1.914a.334.334 0 0 1 .047.47Z" />
    </g>
    <defs>
      <clipPath id="home_svg__a">
        <path fill="#fff" d="M0 0h16v14.222H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHome;
