/// <reference types="react" />
import * as React from "react";
export interface Props {
    current?: boolean;
    link?: JSX.Element;
    style?: any;
}
export interface State {
}
/**
 * disable-styleguide
 */
declare class WizardStep extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default WizardStep;
