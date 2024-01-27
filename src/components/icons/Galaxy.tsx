import * as React from "react";
import type { SVGProps } from "react";
const SvgGalaxy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="#213F7D" clipPath="url(#galaxy_svg__a)">
      <path
        d="M4.763 11.876a5.755 5.755 0 0 1-1.418-.494 4.487 4.487 0 0 1-2.316-.27c-.42-.168-.79.334-.503.685.434.53.954.982 1.537 1.34 1.51.933 3.384 1.107 5.037.546a4.474 4.474 0 0 0 .844-2.014 6.075 6.075 0 0 1-3.181.207ZM4.33 7.944a6.073 6.073 0 0 1-.207-3.181c.102-.492.268-.969.494-1.418a4.49 4.49 0 0 1 .27-2.316c.168-.42-.334-.79-.685-.503-.53.434-.982.953-1.34 1.537-.933 1.51-1.107 3.384-.546 5.037a4.475 4.475 0 0 0 2.014.844Zm7.338.112a6.074 6.074 0 0 1 .207 3.181 5.755 5.755 0 0 1-.494 1.418 4.49 4.49 0 0 1-.27 2.316c-.168.42.335.79.685.503.53-.434.982-.954 1.34-1.537.933-1.51 1.107-3.384.546-5.037a4.475 4.475 0 0 0-2.014-.844Zm3.805-3.853a6.141 6.141 0 0 0-1.537-1.34c-1.51-.933-3.384-1.107-5.037-.546a4.473 4.473 0 0 0-.844 2.013 6.074 6.074 0 0 1 3.181-.206c.492.102.969.268 1.418.494a4.486 4.486 0 0 1 2.316.27c.42.168.79-.334.503-.685Z"
        opacity={0.4}
      />
      <path d="M15.83 8.566c-.524-2.222-2.354-3.995-4.593-4.442a6.074 6.074 0 0 0-3.181.206A4.492 4.492 0 0 1 10.728.87c.416-.178.322-.795-.128-.84a6.143 6.143 0 0 0-2.034.14C6.344.693 4.57 2.523 4.124 4.762a6.073 6.073 0 0 0 .207 3.181A4.492 4.492 0 0 1 .87 5.272C.692 4.856.075 4.949.03 5.4a6.141 6.141 0 0 0 .14 2.034c.524 2.222 2.354 3.995 4.593 4.442a6.074 6.074 0 0 0 3.181-.207 4.492 4.492 0 0 1-2.672 3.461c-.416.178-.323.794.128.84.681.067 1.369.02 2.034-.14 2.222-.524 3.995-2.354 4.442-4.593a6.073 6.073 0 0 0-.207-3.181 4.492 4.492 0 0 1 3.461 2.672c.178.416.794.322.84-.128a6.143 6.143 0 0 0-.14-2.034ZM8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </g>
    <defs>
      <clipPath id="galaxy_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGalaxy;
