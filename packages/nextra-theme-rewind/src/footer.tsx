import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ArrowRight from './icons/arrow-right'
import renderComponent from './utils/render-component'
import { useConfig } from './config'
import { Item } from './utils/normalize-pages'
import LocaleSwitch from './locale-switch'
import ThemeSwitch from './theme-switch'

interface LinkProps {
  route: string
  title: string
  isRTL?: boolean | null
}

const NextLink = ({ route, title, isRTL }: LinkProps) => {
  return (
    <Link href={route}>
      <a
        className={cn(
          'text-base md:text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded',
          { 'ml-2': !isRTL, 'mr-2': isRTL }
        )}
        title={title}
      >
        {title}
        <ArrowRight
          height={20}
          className={cn('transform inline flex-shrink-0', {
            'rotate-180 mr-1': isRTL,
            'ml-1': !isRTL
          })}
        />
      </a>
    </Link>
  )
}

const PrevLink = ({ route, title, isRTL }: LinkProps) => {
  return (
    <Link href={route}>
      <a
        className={cn(
          'text-base md:text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 flex items-center rounded',
          { 'mr-2': !isRTL, 'ml-2': isRTL }
        )}
        title={title}
      >
        <ArrowRight
          height={20}
          className={cn('transform inline flex-shrink-0', {
            'rotate-180 mr-1': !isRTL,
            'ml-1': isRTL
          })}
        />
        {title}
      </a>
    </Link>
  )
}

interface NavLinkProps {
  isRTL?: boolean | null
  currentIndex: number
  flatDirectories: Item[]
}
export const NavLinks = ({
  flatDirectories,
  currentIndex,
  isRTL
}: NavLinkProps) => {
  const config = useConfig()
  const prev = config.prevLinks ? flatDirectories[currentIndex - 1] : null
  const next = config.nextLinks ? flatDirectories[currentIndex + 1] : null

  if (!prev && !next) return null

  return (
    <div className="nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between">
      <div className="flex-1 min-w-0 flex justify-start">
        {prev ? (
          <PrevLink route={prev.route} title={prev.title} isRTL={isRTL} />
        ) : null}
      </div>
      <div className="flex-1 min-w-0 flex justify-end">
        {next ? (
          <NextLink route={next.route} title={next.title} isRTL={isRTL} />
        ) : null}
      </div>
    </div>
  )
}

const Footer: React.FC<{ menu?: boolean }> = ({ menu }) => {
  const { locale } = useRouter()
  const config = useConfig()

  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 pb-[env(safe-area-inset-bottom)]">
      <div
        className={cn(
          'py-2 border-b dark:border-neutral-800 hidden md:block',
          menu ? '' : 'md:hidden'
        )}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="inline-flex px-4">
            {config.i18n ? (
              <div className="flex-1 relative">
                <LocaleSwitch options={config.i18n} />
              </div>
            ) : null}
            {config.darkMode ? (
              <div className="grow-0 relative">
                <ThemeSwitch lite={false} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-12">
        <div className="flex justify-between flex-col-reverse md:flex-row items-center md:items-end">
          <span className="text-gray-600 dark:text-gray-400">
            {renderComponent(config.footerText, { locale })}
          </span>
          <div className="mt-6" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
