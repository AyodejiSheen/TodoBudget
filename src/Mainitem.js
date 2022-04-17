import React from 'react';
import {useParams} from 'react-router-dom';

export const Mainitem = () => {

    var {itemName, quantity, price, status} = useParams();
    

    return(
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-6">
                    <h4>ITEM NAME: <span className="text-primary">{itemName}</span></h4>
                    </div>
                    <div className="col-6">
                    <h4>STATUS: <span className="text-primary">{status}</span>  </h4>
                    </div>
                </div>

                <div className="mt-5">
                <p className="lead"><b>Quantity</b> {quantity}</p>
                <p className="lead"> <b>Price: </b>{price}</p>
                </div>
            </div>

        </>
    );
}