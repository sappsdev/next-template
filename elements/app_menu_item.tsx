import { useRouter } from "next/router";
import Ripples from 'react-ripples'

type AppMenuItem = {
  name: string;
  icon: any;
  link: string;
}
export const AppMenuItem = ({
  name,
  icon,
  link,
}:AppMenuItem) => {
  const router = useRouter()
  const changePage: any = (route:string)=>{
    router.push(route)
  }
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return(
    <div className="py-2 px-4">
      <Ripples className="w-full">
        <div
          onClick={ () => changePage(link)}
          key={name}
          className={classNames(
            'flex items-center w-full py-2 px-2 rounded-md hover:text-white hover:bg-primary',
            router.pathname == link ? 'bg-primary text-white' : 'cursor-pointer'
          )}
        >
          <div 
            className={classNames(
              'mr-4 flex-shrink-0 h-7 w-7 hover:text-white',
              router.pathname == link ? 'text-white' : ''
            )}
          >
            {icon}
            </div>
          {name}
        </div>
      </Ripples>      
    </div>
  )
}