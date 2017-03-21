/// <reference types="react" />
import * as React from 'react';
export interface Props {
    content?: string | JSX.Element;
    wrapperStyle?: Object;
    arrowStyle?: Object;
    hintStyle?: Object;
    buttonStyle?: Object;
}
export interface State {
    expanded: boolean;
}
export interface Position {
    top: number;
    left: number;
}
declare class PopUp extends React.Component<Props, State> {
    static defaultProps: Props;
    refs: {
        [key: string]: Element;
        hint: HTMLElement;
        arrow: HTMLElement;
        button: HTMLElement;
    };
    constructor(props: Props);
    expand(event: any): void;
    collapse(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    getWindowWidth(): number;
    styleElements(): void;
    styleArrow(left: string, right: string): void;
    styleHint(buttonPosition: Position, renderLeft: boolean): void;
    fadeOut(el: any, callback: Function): void;
    fadeIn(el: any, display?: any): void;
    getPosition(element: any): Position;
    getArrowPosition(buttonPosition: Position): Position;
    render(): JSX.Element;
}
export default PopUp;
