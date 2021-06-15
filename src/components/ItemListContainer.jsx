import { ItemCount } from './ItemCount';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react'

export const ItemListContainer = () => {


    const [itemC, setItem] = useState('')

    useEffect(() => {
    const itemCreation = new Promise((resolve, reject)=> {
        const time = setTimeout(() =>{
        resolve(<ItemList></ItemList>)    
        }, 2000)
    })
    itemCreation.then((itemC) => {
    setItem(itemC)
    })}, [])

    return (
        <>
        {itemC}       
        </>
        
    )
}


