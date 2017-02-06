import * as React from 'react'
import * as ReactDOM from 'react-dom'
import uniqueId from "../unique_id"

export interface Props {
    currentPage: number
    onPageChange: (page: number)  => any
    firstPage?: number
    lastPage?: number
    showPrevAndNext?: boolean
    showFirstAndLast?: boolean
    advanced?: boolean
    labelLast?: string
    labelFirst?: string
    labelNext?: string
    labelPrevious?: string
    maxLinks?: number
}

export interface State {
    id: string
}

class Paginator extends React.Component<Props, State> {
    public static defaultProps: Props = {
        currentPage: 1,
        onPageChange: () => {},
        firstPage: 1,
        lastPage: 1,
        showPrevAndNext: true,
        showFirstAndLast: false,
        advanced: false,
        labelLast: "Last",
        labelFirst: "First",
        labelNext: "Next",
        labelPrevious: "Previous",
        maxLinks: 5,
    }

    constructor(props: Props) {
        super(props)

        this.state  = {
            id: uniqueId()
        }
    }

    renderButton(label: any, page: number, active: boolean): JSX.Element {
        let key = `${this.state.id}-${label}-${page}`
        if(active) {
            return <a href="#" onClick={(evt) => {this.pageClicked(evt, page)} } key={key} >{label}</a>
        } else {
            return <span key={key}>{label}</span>
        }
    }

    renderMainButtons(): Array<JSX.Element> {
        let buttons: Array<JSX.Element> = []

        let range: number
        if(this.props.maxLinks % 2 === 0) {
            range = (this.props.maxLinks - 2) / 2
        } else {
            range = (this.props.maxLinks - 1) / 2
        }

        let topLimit: number = this.props.currentPage + range
        let bottomLimit: number = this.props.currentPage - range

        if(topLimit > this.props.lastPage) {
            let diff: number = topLimit - this.props.lastPage
            topLimit -= diff
            bottomLimit -= diff
        }

        if(bottomLimit < 1)  {
            let diff: number = Math.abs( 1 - bottomLimit )
            topLimit += diff
            bottomLimit += diff
        }

        if(topLimit > this.props.lastPage){
            topLimit = this.props.lastPage
        }

        for(let i = bottomLimit; i <= topLimit; i++) {
            let button = this.renderButton(i, i, i !== this.props.currentPage)
            buttons.push(button)
        }

        return buttons
    }

    renderPreviousButton(): JSX.Element {
        return this.renderButton(this.props.labelPrevious, this.props.currentPage - 1, this.props.currentPage !== 1) 
    }

    renderNextButton(): JSX.Element {
        return this.renderButton(this.props.labelNext, this.props.currentPage  + 1, this.props.currentPage !== this.props.lastPage)
    }

    renderFirstButton(): JSX.Element {
        return this.renderButton(this.props.labelFirst, 1, this.props.currentPage !== 1)
    }

    renderLastButton(): JSX.Element {
        return this.renderButton(this.props.labelLast, this.props.lastPage, this.props.currentPage !== this.props.lastPage)
    }

    pageClicked(evt: any, pageNumber: number) {
        evt.preventDefault()
        this.props.onPageChange(pageNumber)
    }

    render() {
        return (
            <div className="paginator" data-active={this.props.currentPage}>
                {this.props.showFirstAndLast && this.renderFirstButton()}
                {this.props.showPrevAndNext && this.renderPreviousButton()}
                {this.renderMainButtons()}
                {this.props.showPrevAndNext && this.renderNextButton()}
                {this.props.showFirstAndLast && this.renderLastButton()}
            </div>
        )
    }
}

export default Paginator