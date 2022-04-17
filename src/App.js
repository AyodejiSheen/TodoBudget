import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import{Link} from 'react-router-dom';


import { Signup, Viewpage } from './signup';
import {Home} from './Home';
import {Instances} from './New instance';
import { Mainitem } from './Mainitem';
import {Errorpage} from './Errorpage';
import { Navbar } from './Navbar';
import {Login} from './Login';
import {Gaurd} from './Gaurd';



function App() {

  
let item = [];
let [itemName, setitemName] = useState("");
let [quantity, setquantity] = useState("");
let [price, setprice] = useState("");
let [datevalue, setDatevalue] = useState();
let [budgetPrice, setbudgetPrice] = useState();
let [instance, setInstance] = useState([]);
let [instItem, setinstItem] = useState([]);
let [instid, setinstid] = useState(0);



const handledate = (e) => {
  let value = e.target.value;
  setDatevalue(value)
  console.log(value);
}


const handleSubmit = (e) => {
    e.preventDefault();
    let NewitemDetails = {itemName, quantity,  price, view:"view", view2:"delete"};
    // console.log(NewitemDetails)


    // setItem([...item, NewitemDetails]);
    // setInstance([...instance, ])
    setquantity("")
    setprice("");
    setitemName("");
    console.log(item);

    // console.log(item);

    // saveitem();

    setinstItem([...instance[instid].item, NewitemDetails])
    instance[instid].item = instItem;
   

    console.log(instance);

}


const handledelete = (index) => {
  console.log("i am clicks")
  setinstItem(instance[instid].item.filter((each, i) => i !== index))
  console.log(instItem);
}


useEffect(() => {
  console.log("working")
}, [instItem])




// let saveitem = () => {
//   let details= JSON.stringify(item);
//   localStorage.setItem('itemdetails', details);
// }


const hanldeChangename = (e) => {
    let nameinput = e.target.value;
    setitemName(nameinput);
}

const hanldeChangequantity = (e) => {
    let quantityinput = e.target.value;
    setquantity(quantityinput);
}

const hanldeChangeprice = (e) => {
    let priceinput = e.target.value;
    setprice(priceinput);
}

const handlebudget = (e) => {
    let value = e.target.value;
    setbudgetPrice(value)
    console.log(value);
}



const handlecreate = (e) => {
    e.preventDefault();
    let eachday = {datevalue, budgetPrice, item};
    setInstance([...instance, eachday]);
    setinstItem([])
    console.log(instance);
    // console.log(eachday.datevalue);
}
// ,J

const getid = (e) => {
  let theid = e.target.id;
  setinstid(theid);
  console.log(instid);
}


  let [phone, setPhone] = useState("");
  let[info, setInfo] = useState("");
    let [logName, setLogName] = useState("");
    let [reg, setReg] = useState([]);
    let [checking, setChecking] = useState(false);



    const handlePhoneChange = (e) => {
        let phoneinp = e.target.value;
        setPhone(phoneinp);
    }

    const handleChangename = (e) => {
        let nameinput = e.target.value;
        setLogName(nameinput);
    }



    const handleLogSubmit = (e) => {
        e.preventDefault();
         
        saveLogin();
        getItem();



        setPhone("");
        setLogName("");
 }


   let Logindetails = {phone:"0810001000", logName:"Ayodeji"};
 

    let saveLogin = () => {
        let details= JSON.stringify(Logindetails);
        localStorage.setItem('Login', details);
      }


          const getItem = () => {
        let fetch = localStorage.getItem('Login');
        let fetchdetail = JSON.parse(fetch);

        if(fetchdetail.logName !== logName){
          console.log("not match")
          setInfo("Match not Found");
          console.log(logName);
          // console.log(fetchArr.logName)
        }else{
          setChecking(true);
          setInfo("Match Found");
          console.log("match")
          console.log(logName)
          console.log(checking)
        }
      }



  return (
      <>
        <Router>
          <Navbar/>
       <Switch>

        <Route exact path="/">
            <Login phone={phone} info={info} logName={logName} handlePhoneChange={handlePhoneChange} handleLogSubmit={handleLogSubmit}  handleChangename={handleChangename}/>
        </Route>


        <Gaurd exact path="/home" component={Instances} datevalue={datevalue} budgetPrice={budgetPrice} instance={instance}
                        handledate={handledate} handlebudget={handlebudget} handlecreate={handlecreate} 
                        getid={getid} instid={instid} checking={checking}/>


          {/* <Route exact path="/home">
            <Instances  />
            </Route> */}

            <Route exact path="/create">
                <Signup handleSubmit = {handleSubmit}
                itemName={itemName}
                quantity={quantity}
                price={price}
                item={item}
                hanldeChangeprice={hanldeChangeprice}
                hanldeChangequantity = {hanldeChangequantity}
                hanldeChangename={hanldeChangename}
                instid={instid} instance={instance}/>

                <Viewpage instance={instance} item={item} instid={instid} handledelete={handledelete}/>
            </Route>



            <Route exact path="/mainitem/:itemName/:quantity/:price/:status/" children={<Mainitem/>}></Route>

            <Route exact path="*">
                <Errorpage/>
            </Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;
