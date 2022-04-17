import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export const Gaurd = (props) => {
    let {path, component:Component, checking, datevalue, budgetPrice,
    handledate, handlebudget, handlecreate,
    getid, instid, instance} = props;

    return (


        <Route render={() => {
            return checking ? <Component datevalue={datevalue} budgetPrice={budgetPrice} 
            handledate={handledate} handlebudget={handlebudget} handlecreate={handlecreate} 
            getid={getid} instid={instid} instance={instance} /> : <Redirect to="/"/>
        }}></Route>

        
        
    );
}