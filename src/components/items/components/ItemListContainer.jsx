import { ItemList } from './ItemList';
import React, { useContext, useEffect, useState } from 'react'
import { dataBase } from '../../../firebase/firebas';
import { CartContext } from '../../contexts/components/CartContext';
import { Loader } from '../../loaders/components/Loader'

export const ItemListContainer = () => {

    const { setArrId } = useContext(CartContext)
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState(null)

    const [loading, setLoading] = useState(false)



    useEffect(() => {
        switch (filter) {
            case 1:
                setLoading(true);
                const itemCollection1 = dataBase.collection("catalogo")
                const bonsai = itemCollection1.where('stock','>', 0).where('tipo','==', 1);
                bonsai.get().then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No results')
                    }
                    setItems(querySnapshot.docs.map(doc => doc))
                }).catch((error) => {
                    console.log("Error searching items", error);
                }).finally(() => {
                    setLoading(false)
                });
                break

            case 2:
                setLoading(true);
                const itemCollection2 = dataBase.collection("catalogo")
                const suculenta = itemCollection2.where('stock','>', 0).where('tipo','==', 2);
                suculenta.get().then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No results')
                    }
                    setItems(querySnapshot.docs.map(doc => doc))
                }).catch((error) => {
                    console.log("Error searching items", error);
                }).finally(() => {
                    setLoading(false)
                });
                break
            case 3:
                setLoading(true);
                const itemCollection3 = dataBase.collection("catalogo")
                const arreglo = itemCollection3.where('stock','>', 0).where('tipo','==', 3);
                arreglo.get().then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No results')
                    }
                    setItems(querySnapshot.docs.map(doc => doc))
                }).catch((error) => {
                    console.log("Error searching items", error);
                }).finally(() => {
                    setLoading(false)
                });
                break
            default:
                setLoading(true);
                const itemCollectionB = dataBase.collection("catalogo")
                const itemCol = itemCollectionB.where('stock','>', 0);
                itemCol.get().then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log('No results')
                    }
                    setItems(querySnapshot.docs.map(doc => doc))
                    setArrId(querySnapshot.docs.map(doc => doc.id))
                }).catch((error) => {
                    console.log("Error searching items", error);
                }).finally(() => {
                    setLoading(false)
                });


        }
    }// eslint-disable-next-line react-hooks/exhaustive-deps
        , [filter])



    return (
        <>
            {loading ? <Loader /> : <ItemList pr={items} setFilter={setFilter}></ItemList>}
        </>

    )
}


