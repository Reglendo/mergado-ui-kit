interface FieldProps {
    input: {
        checked?: boolean //alias for value if value is only boolean
        value: any
        name: string
        onBlur: (value: any) => void
        onChange: (value: any) => void
        onDragstart: (value: any) => void
        onDrop: (value: any) => void
        onFocus: (value: any) => void
    }
    meta: {
        active: boolean
        autofilled: boolean
        asyncValidating: boolean
        dirty: boolean
        dispatch: Function
        error: string
        form: string
        invalid: boolean
        pristine: boolean
        submitting: boolean
        submitFailed: boolean
        touched: boolean
        valid: boolean
        visited: boolean
        warning: string
    }
}

export default FieldProps