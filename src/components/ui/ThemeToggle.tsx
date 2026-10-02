import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-text-primary shadow-[0_0.25rem_0.8rem_rgba(0,0,0,0.18)] transition-colors hover:text-accent-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:size-13"
    >
      <motion.span
        key={theme}
        initial={reduceMotion ? false : { opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        <HugeiconsIcon
          icon={isDark ? Sun03Icon : Moon02Icon}
          size={20}
          strokeWidth={1.75}
          color="currentColor"
        />
      </motion.span>
    </button>
  )
}
