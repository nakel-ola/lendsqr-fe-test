import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 13"
    {...props}
  >
    <g fill="#213F7D" clipPath="url(#user-check_svg__a)">
      <path
        d="M15.915 3.99a.3.3 0 0 1-.002.42L12.38 7.915a.297.297 0 0 1-.42-.003L9.917 5.855a.296.296 0 0 1 .003-.42l.703-.698a.297.297 0 0 1 .42.003l1.137 1.145 2.62-2.6a.297.297 0 0 1 .42.002l.695.703Z"
        opacity={0.4}
      />
      <path d="M5.6 6.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm2.24.8h-.417a4.352 4.352 0 0 1-3.646 0H3.36A3.36 3.36 0 0 0 0 10.56v1.04a1.2 1.2 0 0 0 1.2 1.2H10a1.2 1.2 0 0 0 1.2-1.2v-1.04A3.361 3.361 0 0 0 7.84 7.2Z" />
    </g>
    <defs>
      <clipPath id="user-check_svg__a">
        <path fill="#fff" d="M0 0h16v12.8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCheck;
