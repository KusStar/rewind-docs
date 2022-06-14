import React, { FC } from 'react'
import { useRouter, NextRouter } from "next/router";
import cn from 'classnames'

interface Props {
  onLeft: (router: NextRouter) => void;
  onRight: (router: NextRouter) => void;
}

const BtnBase = [
  "py-2.5 px-14 rounded transition duration-300 dark:border/0", 
  'shadow-btn hover:shadow-btn-hover',
]

const Landing: FC<Props> = ({
  onLeft,
  onRight
}) => {
  const router = useRouter();
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <div className='mb-8 text-center'>
        <div className='text-4xl font-bold mb-6'>倒带</div>
        <div className='text-xl mb-6'>简单的音乐播放器</div>
        <div className='flex flex-col'>
          <span className='font-bold'>轻量</span>
          <span className='font-bold'>简洁</span>
        </div>
      </div>
      <div className='flex space-x-8'>
        <button
          onClick={() => onRight(router)}
          className={cn(
            ...BtnBase,
            'dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:border',
            'bg-black text-white'
          )}
        >
          下载
        </button>
        <button
          onClick={() => onLeft(router)}
          className={cn(
            ...BtnBase,
            'dark:border dark:opacity-60 dark:hover:opacity-100',
          )}
        >
          更多
        </button>
      </div>
    </div>
  );
}

export default Landing;