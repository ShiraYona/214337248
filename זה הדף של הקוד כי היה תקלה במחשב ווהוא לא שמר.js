import React from "react";
import { useState,useEffect } from "react";
import { Calendar } from 'primereact/calendar';

import { Card, Button } from 'react-bootstrap';



const Date=()=>{
const [fdate,setFdate]=useState()
const [ldate,setLdate]=useState()
const[datearr,setDatearr]=useState([])
const[check,setcheck]=useState()

const dates=async()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
     
    }
  
        await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&&mod=on&lg=he&s=on&start=${fdate}&end=${ldate}`,requestOptions)
        .then(response => response.json())
        .then(result => setDatearr(result))
        .then(console.log(datearr))
        .catch(error => console.log('error', error)); 
    
}
//באמצע פתאום קפצה לי השגיאה ולא רציתי להתעכב אבל זה רץ והציג כרטסיות
const toggleAllSelected = (e) => {
    const { checked } = e.target;
    setcheck(checked)}

    return(<>
 {/* <input onBlur={(e)=>{setFdate(e.target.value)}} placeholder="enter start date"></input>  */}
 <Calendar showTime hourFormat="12" value={date1} onChange={(e) => setFdate(e.value)}></Calendar>
 <input onBlur={(e)=>{setLdate(e.target.value)}} placeholder="enter end date"></input> 

 <button onClick={dates}>הצג</button>
 <input type="checkbox"
  onChange={toggleAllSelected}
 ></input>

{/* <div>{datearr && datearr.map((i)=>{if(check){
return( <div>
  {datearr && datearr.map((i)=>{
    if(i.className=="parashat"){
      return(<div>
        <Card style={{ width: '18rem' }} >
               
                     <Card.Body>
                         <Card.Title>{i.title}</Card.Title>
                         <Card.Text>
                             {i.description}
                         </Card.Text>
                         <Card.Text>
                             {i.start}תאריך
                         </Card.Text>
                     </Card.Body>
                 </Card >
         
     </div>)
       
    }
    else{
return( <div>
  {datearr && datearr.map(i=>(
      <div>
     <Card style={{ width: '18rem',border:'dashed'}} >
            
                  <Card.Body>
                      <Card.Title>{i.title}</Card.Title>
                      <Card.Text>
                          {i.description}
                      </Card.Text>
                      <Card.Text>
                          {i.start}תאריך
                      </Card.Text>
                  </Card.Body>
              </Card >
      
  </div>
  ))}
   </div>)}
  })}
   </div>)
}

})}</div> */}

{/* {/*  
מביא הכל
 <div>
{datearr && datearr.map(i=>(
    <div>
   <Card style={{ width: '18rem' }} >
          
                <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                        {i.description}
                    </Card.Text>
                    <Card.Text>
                        {i.start}תאריך
                    </Card.Text>
                </Card.Body>
            </Card >
    
</div>


))}


 </div> */}
<div>
מציג רק לפי פרשות
  {datearr && datearr.map(i=>(
      <div>
     <Card style={{ width: '18rem' ,border:'dashed'}} >
            
                  <Card.Body>
                      <Card.Title>{i.title}</Card.Title>
                      <Card.Text>
                          {i.description}
                      </Card.Text>
                      <Card.Text>
                          {i.start}תאריך
                      </Card.Text>
                  </Card.Body>
              </Card >
      
  </div>
  ))}
   </div>  






    </>)
}
export default Date;