import React from 'react';

import InputWrapper from "./style";

function FormField({ className, type, name, placeholder, value, onChange }) {
    return (
        <InputWrapper filled={!!value} type={type}>
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
        <textarea
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            rows="4"
        />
    </InputWrapper>)
    // return (
    //     <div>
    //         <input
    //             className={className}
    //             type={type}
    //             placeholder={placeholder}
    //             name={name}
    //             value={value}
    //             onChange={onChange}
    //         />
    //     </div>
    // );
}

export default FormField;