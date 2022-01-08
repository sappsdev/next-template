import Hamburger from 'hamburger-react'
import { Dispatch, SetStateAction } from 'react';
type AppMenuIcon = {
  toggle? : Dispatch<SetStateAction<boolean>>;
  text? : string;
  color? : string;
}
export const AppMenuIcon = ({
  toggle,
  text = 'Menu',
  color = '#000000'
}:AppMenuIcon) => {
  return(
    <div className="flex justify-between items-center gap-2">
      <div className="hidden md:block">
        <div className="h5">
          {text}
        </div>
      </div>
      <Hamburger
        rounded
        color={color}
        duration={0.5}
        toggle={toggle}
      />
    </div>
  )
}