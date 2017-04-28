import * as React  from "react"
import InputProps from "../default_props"
import {prefix} from "../../../config"

export interface Props extends InputProps {
    max: number
    min: number
    step: number
    labels?: {
        main: string | JSX.Element
        placeholder: string
        invalid: string | JSX.Element
        title: string
    }
    style?: any
    addClass?: string
    id?: string
}

export interface State {
    value: any
}

class Range extends React.Component<Props, State> {

    readonly name = prefix + "input-range";
    readonly form = prefix + "form";

    public static defaultProps: Props = {
        max: 50,
        min: 0,
        step: 1,
        input: {
            checked: false,
            name: "",
            onBlur: (value) => {
            },
            onChange: (value) => {
            },
            onDragStart: (value) => {
            },
            onDrop: (value) => {
            },
            onFocus: (value) => {
            },
            value: "",
        },
        meta: {
            active: false,
            asyncValidating: false,
            autofilled: false,
            dirty: false,
            dispatch: Function,
            error: "",
            form: "",
            invalid: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            touched: false,
            valid: true,
            visited: false,
            warning: ""
        },
        labels: {
            main: "Text",
            placeholder: "Fill out here...",
            invalid: "Invalid input",
            title: ""
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.input.value
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(evt) {
        this.setState({value: evt.target.value});
        return this.props.input.onChange(evt.target.value);
    }

    renderInvalid() {
        return (
            <div
                className="form-validation-box">{this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""}</div>
        )
    }

    render() {
        const { id, meta, input } = this.props
        const inputId = `${meta.form}-${input.name}`
        const outputId = `${meta.form}-${input.name}_output`
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;

        return (
            <div className={`${this.name} ${this.form}__group`} title={this.props.labels.title} style={this.props.style}>
                {this.renderInvalid()}
                <div style={{position: 'relative'}}>
                <label className={`${this.name}__label ${this.form}__label`} htmlFor={inputId}>{this.props.labels.main }</label>
                <input
                    className={`${this.name}__item ${this.form}__input--text ${this.form}__input--range ${meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''}`}
                    id={id?id:inputId} type='range' placeholder={this.props.labels.placeholder}
                    {...this.props.input}
                    max={this.props.max}
                    min={this.props.min}
                    step={this.props.step}
                    onChange={this.handleChange}
                    onInput={(evt) => {
                                let target : any = evt.target;
                                let output : any = document.getElementById(outputId);
                                output.value = target.value;
                            }}
                    value={this.state.value}
                    />
                <output className={`${this.form}__input--range__output`} style={{left: 'calc('+((this.state.value/this.props.max) * 100) + '% - '+outputWidth/2+'px)' }} id={outputId}>{this.state.value}</output>
                </div>
            </div>
        )
    }
}

export default Range