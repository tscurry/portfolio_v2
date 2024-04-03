import { SVGMotionProps, motion } from 'framer-motion';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#c84b31"
    strokeLinecap="round"
    {...props}
  />
);

type Props = {
  toggle: () => void;
};

const MenuSvg = ({ toggle }: Props) => {
  return (
    <motion.button
      onClick={toggle}
      className="svg-button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 5 9.423 L 15 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuSvg;
