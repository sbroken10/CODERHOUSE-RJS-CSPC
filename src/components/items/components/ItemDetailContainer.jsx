import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { dataBase } from '../../../firebase/firebas';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/components/CartContext';
import {Loader} from '../../loaders/components/Loader'

export const ItemDetailContainer = () => {


    const [items, setItems] = useState({})


    const [itemR1, setItemR1] = useState({})
    const [itemR2, setItemR2] = useState({})
    const [itemR3, setItemR3] = useState({})
    const [itemR4, setItemR4] = useState({})
    const [loading, setLoading] = useState(false)
    const { cartList, arrId} = useContext(CartContext)
    const [R1, setR1] = useState(4)
    const [R2, setR2] = useState(2)
    const [R3, setR3] = useState(6)
    const [R4, setR4] = useState(5)
    

    const { identi } = useParams();
    const [cFlag, setCFlag] = useState(true)
    const [open, setOpen] = useState(false)
    
    function randomI(min, max) {//funcion para crear un idice random
        var numPosibilidades = max - min;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        var ranI = min + aleatorio;
        var stringRanI = ranI.toString();
        return stringRanI
    }

    useEffect(() => {
        setR1(randomI(1, (arrId.length - 1)))
        setR2(randomI(1, (arrId.length - 1)))
        setR3(randomI(1, (arrId.length - 1)))
        setR4(randomI(1, (arrId.length - 1)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [identi])

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        const item = itemCollection.doc(identi)
        item.get().then((doc) => {
            if (doc.exist === false) {
                console.log('Item doesnt exist');
                return;
            }
            if (cartList.some(data => data['id'] === doc.id)) {
                setCFlag(false)
                setOpen(true)
            }
            console.log('Item found')
            setItems({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [identi])

    useEffect(() => {
        const itemCollection = dataBase.collection("catalogo")
        const item1 = itemCollection.doc(arrId[R1])
        const item2 = itemCollection.doc(arrId[R2])
        const item3 = itemCollection.doc(arrId[R3])
        const item4 = itemCollection.doc(arrId[R4])
        item1.get().then((doc) => {
            if (doc.exist === false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR1({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
        });
        item2.get().then((doc) => {
            if (doc.exist === false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR2({ id: doc.id, ...doc.data() })
            console.log(itemR2)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
        });
        
        item3.get().then((doc) => {
            if (doc.exist === false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR3({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
        });
        
        item4.get().then((doc) => {
            if (doc.exist === false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR4({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [identi])

    return (
        <>
        {loading ? <Loader/>:<ItemDetail details={items} r1={itemR1} r2={itemR2} r3={itemR3} r4={itemR4} cFlag={cFlag} setCFlag={setCFlag} open={open} setOpen={setOpen} />}
        </>
    )
}


