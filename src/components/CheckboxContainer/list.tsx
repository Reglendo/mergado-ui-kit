import * as React from "react"
import css from "@reglendo/cxs/component"
import * as Color from "color"

import { Query } from "./index"
import { QueryItem } from "./item"

interface IQueryListProps {
    name: string
    height: number | string
    options: Query[]
    value: number[]
    input: any
    className?: string
    singleChoice?: boolean
    showInput: boolean
    activeFirst: boolean
    labels: any
    meta: any
}

function sortOptions(queries) {
  if(!queries) {
    return
  }

  return (a,b) => {
    const activeA = queries.indexOf(a.id) >= 0
    const activeB = queries.indexOf(b.id) >= 0

    if (activeA < activeB) {
      return 1
    }
    if (activeA > activeB) {
      return -1
    }
    return 0
  }
}

const renderOptions = (name, options, value, input, singleChoice, showInput, labels) => {

    let allProductsOption = null
    options.map( (option,key) => {
        if(option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id
        }
    })

    return options
        .map(option => {
            const index = value.indexOf(option.id);
            const handler = () => {
                let selected = [...value]
                if (index < 0) { // wasn't selected
                    if( allProductsOption !== null && value.indexOf(allProductsOption) > -1 ) {
                        selected.splice(value.indexOf(allProductsOption), 1)
                    }
                    // select item
                    selected = singleChoice ? [option.id] : selected.concat(option.id)
                } else {
                    // unselect item
                    selected.splice(index, 1)
                }
                input.onChange(selected)
            }

            return <QueryItem name={name} option={option}
                            index={index} onClick={handler}
                            checked={value.indexOf(option.id) > -1}
                            singleChoice={singleChoice}
                            value={value}
                            showInput={showInput}
                            labels={labels}
                            key={option.id + option.name}
                        />
        })
}

export const QueryList: React.SFC<IQueryListProps> = ({ name, className, options, value, input, height,
                                                            singleChoice, showInput, activeFirst, labels, meta }) => {
    return (
        <List className={`${name}__list ${className}`} height={height}>
            {renderOptions( name, meta.initial && activeFirst ? options.sort(sortOptions(meta.initial)) : options ,
                            value, input, singleChoice, showInput, labels)}
        </List>
    )
}

const List = css("ul")({
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: "1px solid #dbcba3",
    overflow: "auto",
    background: "rgb(255,255,255)",
    height: "auto",
}, (props: any) => { return {
    maxHeight: props.height === "auto" ? props.height : props.height + "px",
    borderRadius: props.theme.radius,
    " li + li": {
        borderTop: `1px solid ${Color(props.theme.decoration).fade(0.8)}`,
    },
}})