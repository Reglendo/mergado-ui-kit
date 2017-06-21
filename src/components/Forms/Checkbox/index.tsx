import * as React from "react"
import {prefix} from "config"
import {Input, InputLabel, InputError} from "components/Forms/Input"
import * as MUK from "components/Forms/input"

export interface Props extends MUK.Props {
}

export interface State {
}

class Checkbox extends MUK.InputComponent<Props, State> {

    protected readonly name = prefix + "input-checkbox"
    public readonly props: Props
    public state: State

    public static defaultProps: Props = {
        ...MUK.defaultProps,
    }

    protected renderLabel(className, props) {
        const { input, labels } = this.props
        const label = this.props.label ? this.props.label : labels.main
        return  <span>
                    <input
                        checked={this.props.input.value}
                        {...this.props.input}
                        type="checkbox"
                        className={`${this.name}__item ${className}`}
                        />
                    {labels && " "}
                    {labels ? label : ""}
                </span>
    }

}

export default Checkbox
