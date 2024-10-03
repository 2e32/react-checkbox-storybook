import React from 'react';

const Rect = (props: React.SVGProps<SVGRectElement>) => (
  <rect {...props} width="22px" height="22px" fill="none" strokeWidth="2px" x="1" y="1" rx="2" />
);

const Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
    <Rect />
    <Rect />
    <polyline
      points="4,12 10,18 20,6"
      fill="none"
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
