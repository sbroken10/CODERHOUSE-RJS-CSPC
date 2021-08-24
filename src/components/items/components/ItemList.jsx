import { Item } from './Item'
import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EcoIcon from '@material-ui/icons/Eco';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import '../../styles/ItemList.css'




export const ItemList = props => {

    const { pr, setFilter } = props
    
    const itemsGrid =
        <div className="mainContainer2">
            <div>
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox icon={<EcoOutlinedIcon />} checkedIcon={<EcoIcon />} name="checkedH" />}
                    label="Bonsai"
                    onChange={()=> {setFilter(1)}}
                />
                <FormControlLabel
                    control={<Checkbox icon={<EcoOutlinedIcon />} checkedIcon={<EcoIcon />} name="checkedH" />}
                    label="Suculentas"
                    onChange={()=> {setFilter(2);}}
                />
                <FormControlLabel
                    control={<Checkbox icon={<EcoOutlinedIcon />} checkedIcon={<EcoIcon />} name="checkedH" />}
                    label="Arreglos especiales"
                    onChange={()=> {setFilter(3);}}
                />
                <FormControlLabel
                    control={<Checkbox icon={<DeleteOutlineOutlinedIcon  />} checkedIcon={<DeleteIcon />} name="checkedH"  />}
                    label="Limpiar Filtro"
                    onChange={()=> {setFilter(null)}}
                    
                />
            </FormGroup>
            </div>
            <div className="mainContainer">{pr.map((producto) =>
                <Item producto={producto}></Item>
            )}
            </div>
        </div>


    return (
        itemsGrid
    )
}

