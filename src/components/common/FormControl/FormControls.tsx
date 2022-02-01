import React from "react";
import s from './FormControls.module.css'

const FormControl = ({meta: {touched, error}, children}: any) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}


export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
};


export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
};