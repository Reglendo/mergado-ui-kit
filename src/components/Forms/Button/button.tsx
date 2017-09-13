import * as React from "react"
import glamorous from "glamorous"
import {css} from "glamor"
import * as Color from "color"

import {Href, Button, Link, Submit, Void} from "./types"

const UniversalButtonComponent = ({...props}) => {
    const { name, type, link, labels, icon, input, to, children, ...others } = props
    if(type === "href") {
        return <Href
                    {...others}
                    name={name}
                    title={labels.title}
                    link={to ? to : link}
                    icon={icon}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "button") {
        return <Button
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    input={input}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "link") {
        return <Link
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    children={children}
                    link={to ? to : link}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "submit") {
        return <Submit
                    {...others}
                    name={name}
                    title={labels.title}
                    input={input}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "void") {
        return <Void
                    {...others}
                    name={name}
                    icon={icon}
                    title={labels.title}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else {
        return <div/>
    }
}

const UniversalStyle = css({
    boxSizing: "border-box",
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    padding: "0px 20px",
    height: "42px",
    lineHeight: "39px",
    borderWidth: "2px",
    borderStyle: "solid",
    ":hover": {
      textDecoration: "none",
    },
    ":last-child": {
        marginRight: 0,
    },
    "& .muk-icon": {
      margin: "0 5",
      position: "relative",
      top: "-1px",
    },
    "& a": {
        color: "white",
    },
})

export const UniversalButton = glamorous(UniversalButtonComponent)({
}, props => {
    const style = []
    if(props.size === "tiny") {
        style.push({
            padding: "0 5px",
            height: "20px",
            lineHeight: "18px",
        })
    }else if(props.size === "small") {
        style.push({
            padding: "0 10px",
            height: "32px",
            lineHeight: "30px",
        })
    }
    if(props.disabled) {
        style.push({
            opacity: 0.5,
            cursor: "default",
            pointerEvents: "none",
        })
    }
    if(props.color === "nocolor") {
        style.push({
            background: "transparent",
            padding: "0 2px",
            border: "none",
            color: props.theme.blue,
            ":active,:focus": {
              border: "none",
              outline: "none",
              background: "rgba(200,200,200,0.2)",
            },
            "& path": {
                fill: props.theme.blue,
            },
        })
    } else {
        const color = props.theme[props.color === "gray" ? "grey" : props.color]
        if(props.secondary) {
            style.push({
                backgroundColor: "white",
                borderColor: color,
                color: props.color === "decoration" ? props.theme.grey : color,
                ":hover": {
                    backgroundColor: Color(color).fade(0.8),
                    borderColor: Color(color),
                },
                ":active,:focus": {
                  background: Color(color).fade(0.2),
                  borderColor: Color(color).fade(0.2),
                  color: "white",
                },
            })
        } else {
            style.push({
                backgroundColor: color,
                borderColor: color,
                color: props.color === "decoration" ? props.theme.grey : "white",
                ":hover": {
                    backgroundColor: Color(color).darken(0.1),
                    borderColor: Color(color).darken(0.1),
                },
                ":active,:focus": {
                  background: Color(color).darken(0.2),
                  borderColor: Color(color).darken(0.2),
                },
            })
        }
    }
    style.push({
        borderRadius: props.theme.radius,
        textTransform: props.theme.button_text_transform,
        fontSize: props.theme.button_text_size,
        fontWeight: props.theme.button_text_weight,
    })

    return style
})
