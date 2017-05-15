import * as React from "react"
import {prefix} from "config"
import DataRow from 'components/Datagrid/DataRow'
import * as Sortable from 'react-sortablejs'

export interface Props {
    style?: any
    addClass?: string
    rows: Array<JSX.Element>
    header: Array<JSX.Element>
    sortable?: boolean
    sortableProps?: any
}
export interface State {
}

class DataTable extends React.Component<Props, State> {

    readonly name = prefix + "datagrid";

    public static defaultProps: Props = {
        style: {},
        addClass: '',
        rows: [],
        header: [],
        sortable: false,
        sortableProps: {},
    }

    render() {
        const { rows, header, sortable, sortableProps, addClass, style } = this.props
        let className = `${this.name} ${this.props.addClass}`
        return (
            <table className={className} style={style}>
                {header}
                {sortable ? <Sortable tag="tbody" {...sortableProps}>{rows}</Sortable> : <tbody>{rows}</tbody>}
            </table>
        )
    }
}

export default DataTable