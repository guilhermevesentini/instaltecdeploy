import React from 'react'

export const CheckBox = props => {
    return(
        <div className="">
            <input key={props.id}
            id={props.id}              
            onClick={props.handleCheckChieldElement}
            type="checkbox" checked={props.isChecked}
            value={props.value}

             /> {props.value} 
        </div>              
    )
};


export default CheckBox;