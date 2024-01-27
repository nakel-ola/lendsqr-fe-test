import * as React from "react";
import type { SVGProps } from "react";
const SvgUserFriends = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 13"
    {...props}
  >
    <g fill="#213F7D">
      <path
        d="M12 6.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm1.2.8h-.095c-.348.12-.715.2-1.105.2s-.758-.08-1.105-.2H10.8c-.51 0-.98.148-1.393.385.61.658.993 1.53.993 2.495v.96c0 .055-.013.108-.015.16H14.8A1.2 1.2 0 0 0 16 10a2.8 2.8 0 0 0-2.8-2.8Z"
        opacity={0.4}
      />
      <path d="M4.8 6.4a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Zm1.92.8h-.207a3.938 3.938 0 0 1-1.713.4c-.615 0-1.19-.15-1.712-.4H2.88A2.88 2.88 0 0 0 0 10.08v.72A1.2 1.2 0 0 0 1.2 12h7.2a1.2 1.2 0 0 0 1.2-1.2v-.72A2.88 2.88 0 0 0 6.72 7.2Z" />
    </g>
  </svg>
);
export default SvgUserFriends;
