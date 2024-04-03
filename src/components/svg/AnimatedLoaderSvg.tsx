import * as React from 'react';
import { motion } from 'framer-motion';

interface LoaderSvgProps extends React.SVGProps<SVGSVGElement> {
  onAnimationComplete?: () => void;
}

const AnimatedLoaderSvg = ({ onAnimationComplete }: LoaderSvgProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="375"
    height="400"
    viewBox="0 0 375 375"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5, delay: 600 } }}
  >
    <motion.svg></motion.svg>
    <motion.path
      transform="matrix(-0.75, 0, 0, -0.75, 239.783442, 153.360048)"
      initial={{ pathLength: 0, pathOffset: 0 }}
      onAnimationComplete={onAnimationComplete}
      animate={{ pathLength: 1 }}
      exit={{ pathOffset: 1 }}
      transition={{ duration: 0.3 }}
      strokeLinecap="butt"
      fill="none"
      strokeLinejoin="miter"
      d="M -0.00228626 5.000897 L 84.435219 5.000897 "
      stroke="#c84b31"
      strokeWidth={10}
      strokeOpacity={1}
      strokeMiterlimit={4}
    />

    <g fill="#ecdbba" fillOpacity={1}>
      <g transform="translate(157.644295, 212.999986)">
        <g>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            d="M 8.664062 -26.777344 L 8.664062 -0.472656 C 8.664062 -0.261719 8.875 0 9.242188 0 L 16.015625 0 C 16.382812 0 16.644531 -0.261719 16.644531 -0.472656 L 16.644531 -26.777344 Z M 0.578125 -34.8125 L 24.679688 -34.8125 C 25.046875 -34.8125 25.257812 -35.023438 25.257812 -35.285156 L 25.257812 -41.535156 C 25.257812 -41.742188 25.046875 -42.007812 24.679688 -42.007812 L 0.578125 -42.007812 C 0.261719 -42.007812 0 -41.742188 0 -41.535156 L 0 -35.285156 C 0 -35.023438 0.261719 -34.8125 0.578125 -34.8125 Z M 0.578125 -34.8125 "
          />
        </g>
      </g>
    </g>
    <g fill="#ecdbba" fillOpacity={1}>
      <g transform="translate(189.932762, 212.999986)">
        <g>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            d="M 19.269531 -23.3125 C 16.277344 -24.730469 13.335938 -24.730469 13.074219 -24.730469 C 10.398438 -24.730469 7.824219 -26.304688 7.824219 -29.351562 C 7.824219 -32.710938 10.1875 -34.445312 13.074219 -34.445312 C 15.804688 -34.445312 18.113281 -33.027344 18.21875 -30.035156 C 18.21875 -29.875 18.484375 -29.613281 18.796875 -29.613281 L 25.359375 -29.613281 C 25.730469 -29.613281 25.992188 -29.875 25.9375 -30.035156 C 25.832031 -37.175781 20.269531 -42.007812 13.074219 -42.007812 C 6.351562 -42.007812 0 -37.226562 0 -29.351562 C 0 -24.46875 2.46875 -20.742188 6.824219 -18.746094 C 9.871094 -17.328125 12.707031 -17.328125 13.074219 -17.328125 C 15.4375 -17.222656 18.324219 -15.332031 18.324219 -12.234375 C 18.324219 -9.453125 15.855469 -7.5625 13.074219 -7.5625 C 13.074219 -7.5625 13.074219 -7.5625 13.023438 -7.5625 L 13.023438 0 C 13.074219 0 13.074219 0 13.074219 0 C 19.796875 0 26.097656 -4.359375 26.097656 -12.234375 C 26.097656 -17.171875 23.679688 -21.265625 19.269531 -23.3125 Z M 19.269531 -23.3125 "
          />
        </g>
      </g>
    </g>
    <motion.path
      initial={{ pathOffset: 0, pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathOffset: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      strokeLinecap="butt"
      transform="matrix(0, -0.75, 0.75, 0, 232.287294, 209.953726)"
      fill="none"
      strokeLinejoin="miter"
      d="M 0.000801617 5.002358 L 82.464349 5.002358 "
      stroke="#c84b31"
      strokeWidth={10}
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <motion.path
      initial={{ pathOffset: 0, pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathOffset: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      strokeLinecap="butt"
      transform="matrix(0, 0.75, -0.75, 0, 140.161066, 171.223918)"
      fill="none"
      strokeLinejoin="miter"
      d="M -0.00168281 5.001213 L 82.461864 5.001213 "
      stroke="#c84b31"
      strokeWidth={10}
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
    <motion.path
      initial={{ pathOffset: 0, pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathOffset: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      strokeLinecap="butt"
      transform="matrix(0.75, 0, 0, 0.75, 132.664904, 227.817611)"
      fill="none"
      strokeLinejoin="miter"
      d="M -0.00112172 4.998393 L 84.431175 4.998393 "
      stroke="#c84b31"
      strokeWidth={10}
      strokeOpacity={1}
      strokeMiterlimit={4}
    />
  </motion.svg>
);

export default AnimatedLoaderSvg;
