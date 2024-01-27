import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#213F7D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M6.04 35.18c.44-2.96 1.754-5.554 3.94-7.78 2.76-2.8 6.093-4.2 10-4.2 3.906 0 7.24 1.4 10 4.2 2.2 2.227 3.526 4.82 3.98 7.78m-5.82-21.16c0 2.227-.793 4.133-2.38 5.72-1.587 1.6-3.507 2.4-5.76 2.4-2.24 0-4.16-.8-5.76-2.4-1.587-1.587-2.38-3.493-2.38-5.72 0-2.253.793-4.173 2.38-5.76 1.6-1.586 3.52-2.38 5.76-2.38 2.253 0 4.174.794 5.76 2.38 1.587 1.587 2.38 3.507 2.38 5.76Z"
    />
  </svg>
);
export default SvgUser;
