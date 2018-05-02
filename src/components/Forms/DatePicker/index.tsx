import * as React from "react"
import * as InputColor from "react-input-color"
import css from "@reglendo/cxs/component"
import debounce from "lodash/debounce"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Input} from "light-form/dist/es"
import ReactDatePicker from "react-day-picker/DayPickerInput"
import dayjs from "dayjs"

import {style as factoryStyle} from "./style"

import {styles as inputStyles, stylesProps as inputStylesProps} from "../TextInput"

export interface Props extends IFieldProps {
    locale?: "cs" | "sk"
}

export interface State {
    startDate: any

}

class DatePicker extends React.Component<Props, State> {

    protected readonly name = prefix + "colorpicker"
    protected locale;

    public static defaultProps: Props = {
        locale: "cs",
        ...defaultFieldProps,
    }

    constructor(props) {
        super(props)
        this.handleChanged = this.handleChanged.bind(this);

        this.state = {
            startDate: props.input.value ?
                            props.input.value : props.default ?
                            props.default : null
        }

        if(this.props.locale === "sk") {
            this.locale = require("./locale.sk").default
        } else {
            this.locale = require("./locale.cs").default
        }

    }

    protected handleChanged(evt) {
        this.setState({ startDate: evt })
        return this.props.input.onChange(evt)
    }

    public render() {
        const { input, meta } = this.props
        const { children, ...props} = this.props
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        const FORMAT = "DD. MM. YYYY"

        return(
            <StyledField>
                <ReactDatePicker
                    aria-invalid={isInvalid ? 1 : 0}
                    placeholder={FORMAT}
                    selectedDays={this.state.startDate}
                    onDayChange={this.handleChanged}
                    locale="cs"
                    dayPickerProps={{
                        firstDayOfWeek: 1,
                        months: this.locale.MONTHS,
                        weekdaysLong: this.locale.WEEKDAYS_LONG,
                        weekdaysShort: this.locale.WEEKDAYS_SHORT,
                    }}
                    parseDate={(a) => {
                        const parsed = a.split(" ").map(o => parseInt(o, 10))
                        return new Date(parsed[2],parsed[1]-1,parsed[0])
                    }}
                    formatDate={(a,b) => dayjs(a).format(b)}
                    format={FORMAT}
                    {...props}
                />
                <style>
                    {factoryStyle}
                </style>
            </StyledField>
        )
    }
}

const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",

    " input": {
        ...inputStyles,
    }
}, props => {
    return {
    " input": inputStylesProps(props)
}})

export default DatePicker
