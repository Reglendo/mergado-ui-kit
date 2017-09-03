import * as React from "react"
import * as Icons from "@reglendo/mergado-ui-icons/lib"
import styled from "styled-components"

import {prefix} from "../../../config"
import Icon from "../../../components/Icon"
import TextInput from "../../../components/Forms/TextInput"

export interface Props {
}
export interface State {
    value: string
}

/* <style> */
const Wrapper = styled.div`
`
const Image = styled.span`
    cursor: pointer;
    position: relative;
    text-align: left;
    &:focus {
        outline: none;

        &:before {
            content: attr(title);
            position: absolute;
            left: 50%;
            top: -63px;
            transform: translateX(-50%);
            white-space: nowrap;
            background: #888;
            color: white;
            z-index: 1000;
            border-radius: 2px;
            font-size: 12px;
            padding: 5px;
        }

        .${prefix}icon {
            z-index: 1000;
        }
        .${prefix}icon__text {
            display: inline-block;
        }

        svg {
            outline: 1px solid #888;
            transform: scale3d(3,3,1);
            background: #fff;
        }

    }
    .${prefix}icon {
        padding: 4px;
        position: relative;
        border: 1px solid transparent;

        &:hover {
            background: white;
            border: 1px solid #ccc;
        }
    }

    svg {
        transition: transform 0.2s;
        will-change: transform;
    }
    .${prefix}icon__text {
        border-radius: 2px;
        position: absolute;
        top: -50px;
        left: -29px;
        display: none;
        background: white;
        color: #333;
        border: 2px solid #888;
        font-size: 10px;
        padding: 5px;
        white-space: nowrap;
        left: 50%;
        top: 68px;
        transform: translateX(-50%);
    }
`

/**
 * disable-styleguide
 */
class IconFinder extends React.Component<Props, State> {

    private readonly name = prefix + "icon-finder";

    public static defaultProps: Props = {

    }

    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
    }

    protected handleChange(evt) {
        this.setState({
           value: evt.target.value,
        });
    }

    protected renderIcons() {
        const find = this.state.value.toLowerCase().trim()

        const icons = Object.keys(Icons)

        const found = icons.filter( (icon) => {
            if(icon.toLowerCase().indexOf(find) > -1) {
                return true
            }
            return false
        })

        if(found.length === 0) {
            return <p style={{padding: "10px"}}>no icon found :(</p>
        }
        return found.map( obj => {
            const viewBox = obj === "IconHeureka" ? "0 0 200 40" : "0 0 40 40"
            return (<Image key={obj} className={`${this.name}__icon`} title={obj} tabIndex={1}>
                        <Icon name={`${obj}`} size={30}
                            text={`import ${obj} from "@reglendo/mergado-ui-icons/lib/icons/${obj}"`}
                            viewBox={viewBox}
                            style={{display: "inline-block", margin: "5px" }} />
                    </Image>)
        })
    }

    public render() {
        const className = `${this.name}`

        return (
            <Wrapper className={`${className}`}>
                <TextInput
                    labels={{ main: "",
                             placeholder: "Type icon name here...",
                             invalid: "Invalid input",
                             title: "" }}
                    input={{onChange: this.handleChange.bind(this), value: this.state.value }} />
                {this.renderIcons()}
            </Wrapper>
        )
    }
}

export default IconFinder
