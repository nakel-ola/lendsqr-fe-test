import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="#545F7D" clipPath="url(#calendar_svg__a)">
      <path d="M14.992 2.16h-2.288V.768A.362.362 0 0 0 12.336.4h-1.68a.362.362 0 0 0-.368.368V2.16H5.712V.768A.362.362 0 0 0 5.344.4h-1.68a.362.362 0 0 0-.368.368V2.16H1.008a.372.372 0 0 0-.368.368v12.72c0 .208.16.368.368.368h13.984c.192 0 .368-.16.368-.368V2.528a.372.372 0 0 0-.368-.368Zm-3.984-1.024h.96v2.112h-.96V1.136Zm-6.992 0h.96v2.112h-.96V1.136Zm10.608 13.728H1.376v-9.36h13.248v9.36Z" />
      <path d="M3.2 13.216h1.712c.096 0 .176-.08.176-.176v-1.728a.178.178 0 0 0-.176-.176H3.2a.178.178 0 0 0-.176.177v1.711c0 .112.08.192.176.192ZM7.136 13.216h1.712c.096 0 .176-.08.176-.176v-1.728a.178.178 0 0 0-.176-.176H7.136a.178.178 0 0 0-.176.177v1.711c-.016.112.064.192.176.192ZM11.056 13.216h1.712c.097 0 .177-.08.177-.176l-.001-1.728a.178.178 0 0 0-.176-.176h-1.712a.178.178 0 0 0-.176.177v1.711c-.016.112.064.192.176.192ZM3.2 9.264h1.712c.096 0 .176-.08.176-.177v-1.71a.178.178 0 0 0-.176-.177H3.2a.178.178 0 0 0-.176.176v1.712c0 .096.08.176.176.176ZM7.136 9.264h1.712c.096 0 .176-.08.176-.177v-1.71a.178.178 0 0 0-.176-.177H7.136a.178.178 0 0 0-.176.176v1.712c-.016.096.064.176.176.176ZM11.056 9.264h1.712c.097 0 .177-.08.177-.177l-.001-1.71a.178.178 0 0 0-.176-.177h-1.712a.178.178 0 0 0-.176.176v1.712c-.016.096.064.176.176.176Z" />
    </g>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendar;
