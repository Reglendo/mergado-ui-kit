import * as React from "react"
import {prefix} from "../../config"
import DataRow from './DataRow'
import * as Sortable from 'react-sortablejs'

export interface Props {
    style?: any
    addClass?: string
    rows: Array<DataRow> | Array<JSX.Element>
    header: Array<DataRow> | Array<JSX.Element>
    sortable?: boolean
    sortableProps?: any
    ref?: string
}
export interface State {
}

class Datagrid extends React.Component<Props, State> {

    readonly name = prefix + "datagrid";

    public static defaultProps: Props = {
        style: {},
        addClass: '',
        rows: [],
        header: [],
        sortable: false,
        sortableProps: {},
        ref: null
    }

    render() {
        const { rows, header, sortable, sortableProps, addClass, style, ref } = this.props
        let className = `${this.name} ${this.props.addClass}`
        return (
            <table className={className} style={style} ref={ref}>
                {header}
                {sortable ? <Sortable tag="tbody" {...sortableProps}>{rows}</Sortable> : <tbody>{rows}</tbody>}
            </table>
        )
    }
}

export default Datagrid