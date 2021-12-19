import React from "react";

export const required = (value: any) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength:any) => (value: any) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined
    }
}

export const maxLength50 = (value: any) => {
    if (value.length > 50) {
        return 'Max length is 50 symbols'
    } else {
        return undefined
    }
}