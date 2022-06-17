import React, { FC, useEffect } from 'react'
import { useRouter, NextRouter } from "next/router";
import cn from 'classnames'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Button {
  content: React.ReactElement;
  type?: 'default' | 'ghost';
  onClick: (router: NextRouter) => void
  coverImgUrl?: string
}

interface Props {
  title: string
  subtitle: string
  keywords?: string[]
  buttons?: Button[]
}

const BTN_BASE = [
  "py-2.5 px-14 rounded transition duration-300 dark:border/0",
  'shadow-btn hover:shadow-btn-hover',
]

const BTN_DEFAULT = [
  'dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:border',
  'bg-black text-white'
]

const BTN_GHOST = [
  'dark:border dark:opacity-40 dark:hover:opacity-100',
]

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const Landing: FC<Props> = ({
  buttons,
  title,
  subtitle,
  keywords,
  coverImgUrl
}) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='mb-8 text-center'>
          <div className='text-4xl font-bold mb-6'>{title}</div>
          <div className='text-xl mb-6'>{subtitle}</div>
          {keywords && keywords.length > 0 &&
            <div className='flex flex-col'>
              {keywords.map((keyword, i) => (
                <span className='font-bold' key={i}>{keyword}</span>
              ))}
            </div>
          }
        </div>
        {buttons && buttons.length > 0 && (
          <div className='flex space-x-8'>
            {buttons.map((btn, i) => (
              <button
                key={i}
                onClick={() => btn.onClick(router)}
                className={cn(
                  ...BTN_BASE,
                  ...(btn.type === 'ghost' ? BTN_GHOST : BTN_DEFAULT)
                )}
              >
                {btn.content}
              </button>
            ))}
          </div>
        )}
      </div>
      {coverImgUrl &&
        <motion.div
          ref={ref}
          animate={controls}
          variants={squareVariants}
          initial="hidden"
          className='h-screen'
        >
          <div
            className='flex flex-col items-center justify-center'
          >
            <img
              src={coverImgUrl}
              width="600px"
              alt="封面"
            />
          </div>
        </motion.div>
      }
    </>
  );
}

export default Landing;