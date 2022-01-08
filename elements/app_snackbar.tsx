import { Transition } from "@headlessui/react"
import { Fragment } from "react"
type AppSnackbar = {
  open: boolean;
  variant: string;
  message: string
}
export const AppSnackbar = ({
  open,
  variant,
  message
}:AppSnackbar) => {
  let color;
  if(variant == 'error'){
    color = 'bg-red-600'
  }
  if(variant == 'success'){
    color = 'bg-green-600'
  }
  if(variant == 'info'){
    color = 'bg-gray-600'
  }
  return(
    <div
    aria-live="assertive"
    className="fixed inset-0 flex items-end pointer-events-none z-50"
  >
    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
      {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
      <Transition
        show={open}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`w-full ${color} shadow-lg pointer-events-auto overflow-hidden`}>
          <div className="p-4">
            <div className="flex items-center">
              <p className="w-0 flex-1 text-sm font-medium text-white">        
               {message}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>  
  )
}