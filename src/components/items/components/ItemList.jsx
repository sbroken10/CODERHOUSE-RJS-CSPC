import { Item } from './Item'
import React, { useContext, useEffect, useState } from 'react'
import '../../styles/ItemList.css'
import { CartContext } from '../../contexts/components/CartContext';



export const ItemList = props => {


    
    const { pr } = props
    console.log(pr.length)
    

    const itemsGrid = <div className="mainContainer">{pr.map((producto) =>
        <Item producto={producto}></Item>
    )}
    </div>





    return (

        itemsGrid
    )
}

