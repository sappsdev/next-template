import { ReactNode } from "react";
import Ripples from 'react-ripples'

type AppTextButton = {
  children: ReactNode;
  onClick: Function;
}

export const AppTextButton = ({
  children,
  onClick, 
}:AppTextButton) => {

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return(
    <Ripples>
    <button 
      onClick={() => onClick()}
      className={classNames(
        'rounded-md w-full flex justify-center items-center px-4 py-2 text-primary text-sm',
      )}
    >
      {children}
    </button>
    </Ripples>
  )
}