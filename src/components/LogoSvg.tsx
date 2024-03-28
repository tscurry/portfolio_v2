// import { easeInOut, motion } from 'framer-motion';
import { SVGProps } from 'react';
import { motion } from 'framer-motion';

const LogoSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.25 90" {...props}>
      <defs>
        <motion.clipPath id="a">
          <path d="M39 .313h67.504V9H39Zm0 0" />
        </motion.clipPath>
        <clipPath id="b">
          <path d="M98 .313h8.504V69H98Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M0 82h67v7.688H0Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M0 22h8v67.688H0Zm0 0" />
        </clipPath>
      </defs>
      <path
        fill="#ecdbba"
        d="M33.411 40.752v26.125c0 .207.207.469.57.469h6.727c.367 0 .625-.262.625-.47V40.753Zm-8.03-7.977h23.933c.363 0 .574-.207.574-.469V26.1c0-.207-.211-.468-.574-.468H25.38c-.312 0-.574.261-.574.468v6.207c0 .262.262.47.574.47ZM76.007 44.193c-2.973-1.406-5.89-1.406-6.152-1.406-2.66 0-5.215-1.566-5.215-4.59 0-3.336 2.347-5.058 5.215-5.058 2.71 0 5.003 1.41 5.109 4.382 0 .157.262.414.574.414h6.516c.367 0 .629-.257.574-.414-.105-7.093-5.629-11.89-12.773-11.89-6.676 0-12.985 4.746-12.985 12.566 0 4.852 2.45 8.55 6.778 10.535 3.027 1.407 5.84 1.407 6.207 1.407 2.343.105 5.214 1.98 5.214 5.058 0 2.762-2.453 4.64-5.214 4.64H69.8v7.509h.055c6.671 0 12.93-4.329 12.93-12.149 0-4.902-2.4-8.969-6.778-11.004Zm0 0"
      />
      <g clipPath="url(#a)">
        <path fill="none" stroke="#c84b31" strokeWidth={7.4479} d="M106.375 4.395H43.488" />
      </g>
      <g clipPath="url(#b)">
        <path fill="none" stroke="#c84b31" strokeWidth={7.4479} d="M102.656 64.32V2.902" />
      </g>
      <g clipPath="url(#c)">
        <path fill="none" stroke="#c84b31" strokeWidth={7.4479} d="M0 85.785h62.887" />
      </g>
      <g clipPath="url(#d)">
        <path fill="none" stroke="#c84b31" strokeWidth={7.4479} d="M3.719 25.86v61.417" />
      </g>
    </svg>
  );
};

export default LogoSvg;
