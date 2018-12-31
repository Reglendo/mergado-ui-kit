import * as React from "react"
import css from "@reglendo/cxs/component"

import Radio from "../Radio/input"
import Checkbox from "../Checkbox"

import LittleStatus from "../LittleStatus"

interface IQueryItemProps {
    name: string
    option: any
    value: string
    index: number
    onClick: (evt: any) => void
    checked: boolean
    singleChoice: boolean
    showInput: boolean
    className?: string
}

export const QueryItem: React.SFC<IQueryItemProps> = ({ name, option, index, onClick,
                                                          checked, className,
                                                          singleChoice, showInput,
                                                          ...props}) => {
    return (
        <Li className={`${name}__item ${index >= 0 ? `${name}__item--active` : ""}
                        ${option.disabled ? `${name}__item--disabled` : ""}
                        ${className}
            `}
            data-subheader={option.subheader}
            disabled={option.disabled}
            checked={checked}
            key={option.value}
            data-link={option.link !== undefined}
            onClick={!option.subheader && !option.disabled ? onClick : undefined}>
            {showInput && !option.subheader && !option.disabled &&
                <>
                    {!singleChoice ?
                        <Checkbox
                                checked={checked}
                                onChange={undefined}
                                key="input"
                                style={{ float: "left", margin: "10px", pointerEvents: "none", }}
                            />
                        :
                        <Radio
                                value=""
                                checked={checked}
                                label={""}
                                onChange={undefined}
                                key="input"
                                style={{ float: "left", margin: "0px", marginRight: "-10px", pointerEvents: "none", }}
                            />
                    }
                </>
            }
            <label>
            <QueryItemLabel name={name} option={option} showInput={showInput}/>
            </label>
        </Li>
    )
}

interface IQueryItemLabelProps {
    name: string
    option: any
    showInput: boolean
    className?: string
}

export const QueryItemLabel: React.SFC<IQueryItemLabelProps> = ({ name, option,
                                                                    className, showInput, ...props}) => {
    let label = option.label

    if(option.link !== undefined) {
        label = <a href={option.link}>{label}</a>
    }

    return (
        <Label className={`${name}__label ${className}`} key="label" disabled={option.disabled}>
            {label}
            {" "}
            <Count className={`${name}__count`}>
                {typeof option.product_count !== "undefined" ? `(${option.product_count})` : "" }
            </Count>
            {option.active !== undefined &&
                <LittleStatus style={{float: showInput ? "right" : "left"}}
                              type={option.active ? "success" : "inactive"} />
            }
        </Label>
    )
}

export const Li = css("li")({
    display: "table",
    background: "white",
    fontWeight: "normal",
    lineHeight: "24px",
    width: "100%",
    " > label": {
        padding: "10px",
        display: "block",
        cursor: "pointer",
        lineHeight: "24px",
    },
}, (props: any) => {
    let checked = {}
    if(props.checked) {
        checked = {
            background: props.theme.selected_background,
        }
    }

    let disabled = {}
    if(props.disabled) {
        disabled = {
            " > label": {
                cursor: "default",
            },
            ":hover": {
                background: "white",
            },
        }
    }

    let subheader = {}
    if(props["data-subheader"]) {
        subheader = {
            background: props.theme.blue,
            color: "white",
            fontWeight: "bold",
            fontSize: "80%",
            pointerEvents: "none",
        }
    }
    return {
        cursor: props["data-link"] ? "default" : "pointer",
        ":hover": {
            background: props.theme.hover_background,
        },
        ...checked,
        ...disabled,
        ...subheader,
    }
})

const Label = css("span")({
    cursor: "pointer",
    margin: "0 5px",
    " a": {
        verticalAlign: "middle",
    },
}, (props: any) => {
    return props.disabled ?
    {
            cursor: "default",
            fontStyle: "italic",
            color: "#888",
    }
    : {}
})

const Count = css("span")({
    color: "#888",
    fontSize: "0.8em",
})
