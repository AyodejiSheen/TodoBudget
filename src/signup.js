import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


export const Signup = (props) => {

    let {handleSubmit, itemName, quantity, price, hanldeChangename, hanldeChangeprice, hanldeChangequantity, instance, instid } = props;


    let [bdgetAmt, setbdgetAmt] = useState(instance[instid].budgetPrice);
    let [itemTotal, setitemTotal] = useState(0);

    const handlecal = () => {
        setbdgetAmt(bdgetAmt - price);
        setitemTotal(instance[instid].item.length + 1);
    }

   


    return(
        <>
            <p className="lead text-danger text-center mt-2"> Actual Amount Budget: - <span className="bolder">#{bdgetAmt}</span></p>

        <div className="container">
        <div className="row mx-auto justify-content-center">
            <div className="col-md-5 add-item ">
                    <h3 className="text-primary mt-4 text-center">Add all you items</h3>
                <div className="container">
                <div className="row">
                <div className="p-3 text-center mx-auto">
                        <form onSubmit={handleSubmit}>
                        <input type="text" value={itemName} onChange={hanldeChangename} placeholder="Enter the item name" className="form-control mb-3 form"/>
                        <input type="number" value={quantity} onChange={hanldeChangequantity} placeholder="Quantity" className="form-control mb-3 form"/>
                        <input type="number" value={price} onChange={hanldeChangeprice} placeholder="Expected price" className="form-control mb-3 form"/>
                        <button className="btn btn-primary mb-3 form-control" onClick={handlecal}>save</button>
                        </form>
                </div>
                </div>
                </div>
            </div>

            <div className="col-md-5 item-analysis">
                <h3 className="text-warning mt-4 mb-2 text-center">Item Analysis</h3>
                <p className="p-3 bg-light"> <b>TOTAL ITEMS:</b> <span className="ml-4 lead">{itemTotal} </span></p>            
                <p className="p-3 bg-light"> <b>PENDING ITEMS:</b> <span className="ml-4 lead">0</span></p>            
                <p className="p-3 bg-light"> <b>BOUGHT ITEMS:</b> <span className="ml-4 lead">0</span></p>            
            </div>
        </div>
        </div>

       
           

        </>
    );
}



export const Viewpage = (props) => {

    let {instance, item, instid, handledelete} = props;

    // useEffect(()=>{

    //     setbdgetAmt(bdgetAmt - instance[instid].manyItem.price);

    // },[]);


// let fetch = localStorage.getItem('itemdetails');
// let fetchdetail = JSON.parse(fetch);
let [check, setCheck] = useState("Not Yet Bought");

const handleChange =(e) => {
    if(e.target.value === true){
        setCheck("Not Boutht Yet")
    }else{
        setCheck("Bought");
    }
};





// let handledelete = () => {
//     fetchdetail.map((details, i) => {
//         details[i].splice(0,1);
//     })
// };

// let deleting = (i) => {
//     item.splice(i,1);
//     console.log(item);
//   }


return(
    <>

    <h4 className="text-center mt-5 text-primary">Item Lists</h4>

       <div className="container mt-4">

<table class="table table-stripe">
<thead>
    <tr>
    <th>STATUS</th>
    <th scope="col">ITEM NAME</th>
    <th scope="col">QUANTIY</th>
    <th scope="col">ACTION</th>
    </tr>
</thead>

{
    
    instance[instid].item.map((itemdetails, index) => {

        return(
           
            <tbody key={index} id={index}>
                    <td><input type="checkbox" name="hooks" onClick={handleChange}></input></td>
                    <td >{itemdetails.itemName}</td>
                    <td >{itemdetails.quantity}</td>
                    <td ><Link to={`/mainitem/${itemdetails.itemName}/${itemdetails.quantity}/${itemdetails.price}/${check}/`}>
                        <button className="btn btn-info">{itemdetails.view}</button></Link> 
                        <button className="btn btn-danger" id={index} onClick={() => handledelete(index)} >{itemdetails.view2}</button></td>  
            </tbody>


        )
    }) 
}





</table>
</div>


    </>
);
}