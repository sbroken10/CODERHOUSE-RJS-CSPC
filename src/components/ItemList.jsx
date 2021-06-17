import { Item } from './Item'
import React from 'react'
import './styles/ItemList.css'

export const ItemList = props => {

    const { pr } = props

    return (

        <div className="itemListContainer">{pr.map((producto) =>
            <Item producto={producto}></Item>
        )}
        </div>
    )
}

