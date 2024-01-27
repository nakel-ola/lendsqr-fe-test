import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#545F7D"
      d="M6.222 13.333h3.556v-1.777H6.222v1.777ZM0 2.667v1.777h16V2.667H0Zm2.667 6.222h10.666V7.11H2.667V8.89Z"
    />
  </svg>
);
export default SvgFilter;
