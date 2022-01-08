import { ReactNode } from "react";
import Ripples from 'react-ripples'

type AppButton = {
  children: ReactNode;
  onClick: Function;
}

export const AppButton = ({
  children,
  onClick, 
}:AppButton) => {

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return(
    <Ripples>
    <button 
      onClick={() => onClick()}
      className={classNames(
        'rounded-md w-full flex justify-center items-center px-4 py-2 bg-primary text-white text-sm',
      )}
    >
      {children}
    </button>
    </Ripples>
  )
}