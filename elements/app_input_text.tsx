type AppInputText = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
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
export const AppInputText = ({
  name,
  value,
  label,
  placeholder,
  type = 'text',
  autoComplete,
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
}:AppInputText) => {
  const inputClass = 'appearance-none block w-full px-3 py-2 rounded-md focus:outline-none border-2 sm:text-sm';
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
        type={type ?? 'text'}
        autoComplete={autoComplete ?? 'new-password'}
        onChange={ (e) => onChange(e) }
        onFocus={(e)=> {
            if (onFocus) onFocus(e)
          }
        }
        className={bgColor+' '+bgPlaceholder+' '+inputClass+' '+focusClass+' '+borderClass}
      />
      { helpText && 
        <div className={helpColor+' caption mt-1'}>
            {helpText}
        </div>
      }      

    </div>
  )
}