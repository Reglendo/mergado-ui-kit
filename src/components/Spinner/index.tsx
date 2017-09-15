import * as React from "react"
import glamorous, {Div} from "glamorous"
import * as glamor from "glamor"
import * as Color from "color"
import {prefix} from "../../config"

export interface Props {
    type?: "default" | "dashed" | "dotted" | "mergado"
    /** Maximum dimension (width or height) */
    size?: number
    loaded?: boolean
    color?: "black" | "white" | "green" | "blue"
    speed?: number
    style?: any
}
export interface State {
    loaded: boolean
}

class Spinner extends React.Component<Props, State> {

    private readonly name = prefix + "spinner";
    constructor(props: Props) {
        super(props)

        this.state = {
            loaded: false,
        }
    }

    public static defaultProps: Props = {
        type: "default",
        size: 30,
        loaded: false,
        color: "white",
        style: {},
        speed: 1,
    }

    protected updateState(props) {
        let loaded = this.state.loaded

        if(props.loaded) {
            loaded = !!props.loaded;
        }

        this.setState({
            loaded,
        })
    }

    public componentDidMount() {
        this.updateState(this.props);
    }

    public componentWillReceiveProps(nextProps) {
        this.updateState(nextProps);
    }

    public render() {

        if(this.state.loaded) {
            return (<span style={{opacity: 1}}>{this.props.children}</span>)
        }
        const { size, type, color, speed } = this.props

        const containerStyle: any = {  width: size, height: size }
        return (
            <Div display={"inline-block"} overflow={"hidden"}
                className={`${this.name} ${this.name}--${this.props.type}`}
                style={containerStyle}>
                <AnimatedWrapper {...this.props} className={`${this.name}__wrapper`}>
                    <div className={`${this.name}__content`} style={{opacity: 0}}>{this.props.children}</div>
                </AnimatedWrapper>
            </Div>
        )
    }
}


const mergadoColors = {
    left: "#7fba2c",
    bottom: "#007b20",
    right: "#00a9b8",
    top: "transparent",
}

const Wrapper = glamorous.div({

}, (props: any) => {
    const styles = []
    styles.push({
        width: props.size,
        height: props.size,
        fontSize: props.size,
        borderRadius: "100%",
    })

    if(props.type === "mergado") {
        styles.push({
            borderWidth: props.size / 2,
            boxSizing: "border-box",
            borderStyle: "solid",
            borderColor: `${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.right} ${mergadoColors.bottom}`,
            position: "relative",

            ".muk-spinner__content": {
                maxWidth: 0,
                maxHeight: 0,
                overflow: "hidden",
            },
        })
    } else {

        if(props.color === "black") {
            styles.push({ borderColor: `rgba(0,0,0,1)  rgba(0,0,0,.4) rgba(0,0,0,.6) rgba(0,0,0,.8)` })
        } else if(props.color === "green") {
            styles.push({ borderColor: `rgba(127,186,44,1)  rgba(127,186,44,.4) rgba(127,186,44,.6) rgba(127,186,44,.8)` })
        } else if(props.color === "blue") {
            styles.push({ borderColor: `rgba(45, 149, 211,1)  rgba(45, 149, 211,.4) rgba(45, 149, 211,.6) rgba(45, 149, 211,.8)` })
        } else {
            styles.push({ borderColor: `
                                        ${Color(props.theme.decoration).fade(1)} 
                                        ${Color(props.theme.decoration).fade(0.8)} 
                                        ${Color(props.theme.decoration).fade(0.6)} 
                                        ${Color(props.theme.decoration).fade(0.4)}
                                        `})
        }
        styles.push({
            borderStyle: props.type === "default" ? "solid" : props.type,
            borderWidth: (props.type === "dashed" || props.type === "dotted") ? "0.1em" : "0.2em",
            display: "inline-block",
            margin: "0px",
            boxSizing: "border-box",
            position: "relative",
            transform: "translate3d(0,0,0)",
            willChange: "transform",
            verticalAlign: "top",
        })
    }

    return styles
})


const animations = props => {
    const css: any = glamor.css
    if(props.type === "mergado") {
        const pulse = css.keyframes({
            "0%:": {
                borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
            },
            "25%": {
                borderColor: `${mergadoColors.bottom} ${mergadoColors.left} ${mergadoColors.top} ${mergadoColors.right}`
            },
            "50%": {
                borderColor: `${mergadoColors.right} ${mergadoColors.top} ${mergadoColors.left} ${mergadoColors.bottom}`
            },
            "75%": {
                borderColor: `${mergadoColors.left} ${mergadoColors.bottom} ${mergadoColors.right} ${mergadoColors.top}`
            },
            "100%": {
                borderColor: `${mergadoColors.top} ${mergadoColors.right} ${mergadoColors.bottom} ${mergadoColors.left}`
            }
        })
        return { animation: `${pulse} 10s infinite linear` }
    } else {
        const spin = css.keyframes({
            "0%": {
                transform: "rotate(0deg)",
            },
            "100%": {
                transform: "rotate(360deg)",
            }
        })
        return { animation: `${spin} 1.2s infinite linear` }
    }
}

const AnimatedWrapper = glamorous(Wrapper)(animations)


export default Spinner
