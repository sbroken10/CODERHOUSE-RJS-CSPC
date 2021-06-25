import { Item } from './Item'
import React from 'react'
import '../../styles/ItemList.css'



export const ItemList = props => {



    const { pr } = props

    const itemsGrid = <div className="mainContainer">{pr.map((producto) =>
        <Item producto={producto}></Item>
    )}
    </div>





    return (

        itemsGrid
    )
}

