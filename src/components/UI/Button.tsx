import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react'

const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-small font-medium transition-background-color 0.3 ease focus:outline-none focus:ring-2 focus:ring-pink-400 focus:offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants:   {
           variant: {
            default: 'bg-pink-900 text-white hover:bg-pink-600',
            ghost: 'bg-transparent hover:text-pink-900 hover:bg-pink-400',
           },
            size:{
                default:'h-10 py-2 px-4',
                sm: 'h-9 px-2',
                lg: 'h-11 px-8',
            },
           },
           defaultVariants:{
            variant: 'default',
            size: 'default',
           },
        }
)
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    isLoading?: boolean
}
const Button: FC<ButtonProps> = ({
    className,
    children,
    variant,
    isLoading,
    size,
    ...props
}) => {
  return <button className={cn(buttonVariants({variant,size,className }))} disabled={isLoading} {...props}> 
  {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
  {children}
  </button>
}

export default Button