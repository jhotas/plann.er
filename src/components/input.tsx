import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputVariants = tv({
  base: 'bg-transparent text-lg placeholder-zinc-400 outline-none',

  variants: {
    variant: {
      w40: 'w-40'
    },

    flex: {
      default: 'flex-1'
    },
  },
})

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {}

export function Input({ variant, flex, ...props }: InputProps) {
  return (
    <input {...props} className={inputVariants({ variant, flex })} />
  )
}