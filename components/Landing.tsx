import React, { FC } from 'react'
import { useRouter, NextRouter } from "next/router";
import cn from 'clsx'

interface Button {
  content: React.ReactNode;
  type?: 'default' | 'ghost';
  onClick: () => void
}

interface Props {
  title: string
  subtitle: string
  keywords?: string[]
  buttons?: Button[]
  scrollBtn?: React.ReactNode
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

const Landing: FC<Props> = ({
  buttons,
  title,
  subtitle,
  keywords,
  scrollBtn
}) => {

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center relative'>
      <div className='mb-8 text-center'>
        <div className='text-4xl font-bold mb-6' >{title}</div>
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
              onClick={() => btn.onClick()}
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
      {scrollBtn}
    </div>
  );
}

export default Landing;