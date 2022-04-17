import React, {useState } from 'react';
import {Link, useHistory} from 'react-router-dom';


export const Instances = (props) => {
    
    let {datevalue, budgetPrice, handledate, handlebudget,
        handlecreate, instance, getid, instid} = props;

    let history = useHistory();

    const rout = () => {
        history.push("/create");   
    }

        
    return (
        <>
        <div className="conatiner">
            <p className="display-4 text-center mt-5 pt-5"> Going to Market?</p>
            <p className="text-center text-warning lead">Create an instance</p>
            <form className="p-3 mx-auto date-input text-center" onSubmit={handlecreate}>
            <input type="date" className="form-control" value={datevalue} required onChange={handledate} />
            <input type="number" className="form-control mt-2" value={budgetPrice} required onChange={handlebudget} placeholder="Amount budgeted"/>
            <button className="btn btn-success mt-4" disabled={!budgetPrice || !datevalue} >Create Instance</button>
            </form>
        </div>

        <div className="container mt-4 text-center">

            <table class="table table-stripe">
            <thead>
                <tr>
                <th>S/N</th>
                <th scope="col">DATE</th>
                <th scope="col">AMOUNT BUDGETED</th>
                </tr>
            </thead>

            {
                
                instance.map((each, index) => {

                    return(
                    
                        
                            <tbody className="bg-light mt-2" key={index} onMouseOver={getid} id={index} onClick={rout}>
                                <td id={index}>{index + 1}</td>
                                <td id={index}>{each.datevalue}</td>
                                <td id={index}>{each.budgetPrice}</td>
                        </tbody>
                    )
                }) 
            }





            </table>
            </div>

        </>
    );
}