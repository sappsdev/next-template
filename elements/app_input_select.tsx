import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

type item = {
  id : string | number;
  name : string;
}

type AppInputSelect = {
  name: string;
  value: string;
  label?: string;
  labelColor?: string;
  items: Array<item>;
  selected: item;
  setSelected: any;

}
export default function AppInputSelect({
  name,
  value,
  items,
  label,
  labelColor = 'text-gray-700',
  selected,
  setSelected,
}:AppInputSelect) {

  return (
    <div className="flex flex-col items-start">
      { label && 
        <div className="my-2">
          <label htmlFor={name} 
          className={'block text-xs font-medium '+labelColor+'  mt-1'}>
            {label}
          </label>
        </div>
      }    
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative block w-full">
              <Listbox.Button className="bg-background relative block w-full border-2 border-transparent rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none    sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {items.map((item:any) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-primary' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {item.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}