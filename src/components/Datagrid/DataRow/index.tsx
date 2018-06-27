import * as React from "react"
import cxs from "@reglendo/cxs/component"
import {prefix} from "../../../config"
import DataCell from "../DataCell"
import Checkbox from "../../../components/Forms/Checkbox"
import { ID, Action } from "../../../helpers/types"
import PropTypes from 'prop-types'

export interface Props {
    style?: any
    className?: string
    inactive?: boolean
    /** optional attribute "data-id" for various uses */
    dataId?: ID
    /** array of bulk actions - more info in DataTable component */
    actions?: Action[]
    /** needed for bulk actions */
    selectedAll?: boolean
    /** needed for bulk actions */
    handleSelectRow?: (id: ID) => {}
    /** needed for bulk actions */
    selectedRows?: ID[]
}

export interface State {
}

class DataRow extends React.Component<Props, State> {

    public static defaultProps: Props = {
        className: "",
        style: {},
        inactive: false,
        dataId: "",
        actions: [],
        selectedRows: [],
    }
    private readonly name = prefix + "datarow"

    public render() {
        const { style, inactive, dataId, actions, selectedRows, className } = this.props
        const isSelected = selectedRows ? selectedRows.indexOf(dataId) > -1 : false
        return (
            <CssTr className={`${this.name} ${inactive && `inactive`} ${className}`}
                disabled={inactive}
                selected={isSelected}
                data-id={dataId} s={style}>
                    {actions.length > 0 &&
                        <DataCell className="m-actions-cell">
                            <Checkbox
                                className="m-actions-checkbox"
                                input={{ "onChange": evt => this.props.handleSelectRow(dataId),
                                         "checked": this.props.selectedRows.indexOf(dataId) !== -1,
                                         "data-id": dataId,
                                         "className": "m-bulk-action-item",
                                      }} />
                        </DataCell>
                    }
                    {this.props.children}
            </CssTr>
        )
    }
}

const CssTr = cxs("tr")({
},(props: any) => {
    return {
        background: props.selected ? props.theme.selected_background : "#fff",
        ":hover td": {
            background: props.theme.hover_background,
        },
        color: props.disabled ? "#ccc" : "initial",
        " *, path": {
            color: props.disabled && "#ccc !important",
            fill: props.disabled && "#ccc !important",
        },
        " .muk-icon--pause *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
        "& .muk-icon--play *": {
            color: props.theme.blue + "!important",
            fill: props.theme.blue + "!important",
        },
        ...props.s,
    }
})

CssTr.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    s: PropTypes.any,
}

export default DataRow
