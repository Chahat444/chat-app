'use client'

import { Children, FC } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
    //This type allows any valid React node to be passed as children.
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  return(
  <>
    <Toaster position='top-center' reverseOrder={false}/>
    {children}
  </>
  )
}

export default Providers