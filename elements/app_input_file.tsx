type AppInputFile = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange: Function;
  onFocus?: Function;
  helpText?: string;
  helpBorder?: string;
  helpColor?: string;
  borderColor?: string;
  bgColor?: string;
  bgPlaceholder?: string;
  focusColor?: string;
  labelColor?: string;
}
export const AppInputFile = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  onFocus,
  helpText,
  helpColor = 'text-red-500',
  helpBorder = 'border-red-500',
  borderColor = 'border-transparent',
  bgColor = 'bg-background',
  bgPlaceholder = 'placeholder-gray-400',
  focusColor = 'border-primary',
  labelColor = 'text-gray-700',
}:AppInputFile) => {
  const inputClass = 'appearance-none block w-full rounded-md focus:outline-none border-0 sm:text-sm';
  const focusClass = 'focus:'+focusColor;
  const borderClass = helpText  ? helpBorder : borderColor
  return(
    <div className="flex flex-col items-start">
      { label && 
        <div className="my-2">
          <label htmlFor={name} 
          className={'block text-xs font-medium '+labelColor+'  mt-1'}>
            {label}
          </label>
        </div>
      }

      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        type="file"
        onChange={ (e) => onChange(e) }
        onFocus={(e)=> {
            if (onFocus) onFocus(e)
          }
        }
        className={bgColor+' '+bgPlaceholder+' '+inputClass+' '+focusClass+' '+borderClass+' file:mr-4 file:px-3 file:py-2 file:rounded-l-md file:border-2 file:border-transparent file:text-sm  file:bg-gray-400'}
      />
      { helpText && 
        <div className={helpColor+' caption mt-1'}>
            {helpText}
        </div>
      }      

    </div>
  )
}