import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { ErrorMessage, useField } from "formik"

const TextField = ({ label, labelClasses, inputClasses, ...props }) => {
    const [field, meta] = useField(props)

    const fld = props.type === 'file' ? { name: field.name } : { ...field }
    return (
        <>
            <div className={`${props.inline && "flex items-center"} ${props.centralbox && 'relative top-1/2'} ${props.checkbox && 'justify-between'}`}>
                <label className={labelClasses} htmlFor={field.name}>{label}</label>
                <div className="relative flex flex-col">
                    <input autoComplete="off" className={inputClasses} {...fld} {...props} placeholder={label} style={{ border: !props.disabled && meta.touched && meta.error && '1px solid #EA5234', WebkitAppearance: !props.disabled && meta.touched && meta.error && 'none' }} />
                    {!props.disabled && meta.touched && meta.error && props.type !== 'date' && <ExclamationCircleIcon className="h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-error-light" />}
                    {
                        !props.disabled && meta.touched &&
                        <ErrorMessage component="span" name={field.name} className="text-error ml-0.5 text-xs font-semibold absolute top-full" />
                    }
                </div>
            </div>
        </>
    )
}

export default TextField
