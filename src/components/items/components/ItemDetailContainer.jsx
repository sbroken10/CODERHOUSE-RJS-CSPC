import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { dataBase } from '../../../firebase/firebas';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/components/CartContext';


export const ItemDetailContainer = () => {


    const [items, setItems] = useState({})


    const [itemR1, setItemR1] = useState({})
    const [itemR2, setItemR2] = useState({})
    const [itemR3, setItemR3] = useState({})
    const [itemR4, setItemR4] = useState({})
    const [loading, setLoading] = useState(false)
    const { cartList, randomI, arrId, intemCant } = useContext(CartContext)
    console.log(randomI(1, (intemCant - 1)))
    console.log(intemCant)
    const [R1, setR1] = useState(randomI(1, (intemCant - 1)))
    const [R2, setR2] = useState(randomI(1, (intemCant - 1)))
    const [R3, setR3] = useState(randomI(1, (intemCant - 1)))
    const [R4, setR4] = useState(randomI(1, (intemCant - 1)))
    // let R4 = 0


    const { identi } = useParams();
    const [cFlag, setCFlag] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(intemCant)
        console.log(randomI(1, (intemCant - 1)))
        setR1(randomI(1, (intemCant - 1)))
        console.log(R1)
    }, [identi])

    useEffect(() => {
        console.log(randomI(1, (intemCant - 1)))
        setR2(randomI(1, (intemCant - 1)))
        console.log(R2)
    }, [identi])

    useEffect(() => {
        console.log(randomI(1, (intemCant - 1)))
        setR3(randomI(1, (intemCant - 1)))
        console.log(R3)
    }, [identi])

    useEffect(() => {
        console.log(randomI(1, (intemCant - 1)))
        setR4(randomI(1, (intemCant - 1)))
        console.log(R4)
    }, [identi])

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        const item = itemCollection.doc(identi)
        console.log(item)
        console.log(identi)
        item.get().then((doc) => {
            console.log(doc)
            console.log(doc.exists)
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
            setLoading(false)
        });
    }, [identi])


    ///////////////////////

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        console.log(arrId)
        console.log(R1)
        const item1 = itemCollection.doc(arrId[R1])
        console.log(itemCollection.doc(arrId[R1]))
        console.log(item1)
        item1.get().then((doc) => {
            if (doc.exist == false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR1({ id: doc.id, ...doc.data() })
            console.log(itemR1)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [identi])

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        console.log(R2)
        const item2 = itemCollection.doc(arrId[R2])
        console.log(item2)
        item2.get().then((doc) => {
            if (doc.exist == false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR2({ id: doc.id, ...doc.data() })
            console.log(itemR2)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [identi])

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        console.log(R3)
        const item3 = itemCollection.doc(arrId[R3])
        console.log(item3)
        item3.get().then((doc) => {
            if (doc.exist == false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR3({ id: doc.id, ...doc.data() })
            console.log(itemR3)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [identi])

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        console.log(R4)
        const item4 = itemCollection.doc(arrId[R4])
        console.log(item4)
        item4.get().then((doc) => {
            if (doc.exist == false) {
                console.log('Item doesnt exist');
                return;
            }
            console.log('Item found')
            setItemR4({ id: doc.id, ...doc.data() })
            console.log(itemR4)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [identi])



    return (

        <ItemDetail details={items} r1={itemR1} r2={itemR2} r3={itemR3} r4={itemR4} cFlag={cFlag} setCFlag={setCFlag} open={open} setOpen={setOpen} />
    )
}


