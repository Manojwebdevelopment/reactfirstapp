import React, { useState } from "react";
import Card from "./Card";
import Sdata from "./Carddata";
export default function Service() {
  const [items, setItems] = useState(Sdata);

  const change = (e) => {
    const data = e.target.value;
    const update = Sdata.filter((cur) => {
      return cur.title === data;
    });
    setItems(update);
  };
 
 const btnclick=()=>{
    setItems(Sdata);
    window.location.reload();
    
  }
  // const filterdata=(gettitle)=>{
  //     const udateitem=Sdata.filter((curele)=>{
  //         return curele.title===gettitle;
  //     });
  //     setItems(udateitem);
  // }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-10 col-10 col-lg-10 col-xl-10 justify-content-center d-flex my-5 mx-auto text-center">
              <form action="">
                <div class="form-group ">
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    onChange={change}
                  >
                    <option>Choose Option</option>
                    <option value={"Mobile Application"}>
                      Mpbile Application
                    </option>
                    <option value={"Desktop Application"}>
                      Desktop Application
                    </option>
                    <option value={"IOS Application"}>IOS Application</option>
                    <option value={"Android Application"}>
                      Android Application
                    </option>
                  </select>
                 
                </div>
                </form>
                <button className='btn btn btn-success mx-2' onClick={btnclick}>reset</button>
                {/* <button className='btn btn btn-warning my-2 mx-2 ' onClick={()=>filterdata('Mobile Application')}>Mobile App</button>
            <button className='btn btn btn-warning my-2 mx-2' onClick={()=>filterdata('Desktop Application')}>Desktop App</button>
            <button className='btn btn btn-warning my-2 mx-2' onClick={()=>filterdata('IOS Application')}>IOS App</button>
            <button className='btn btn btn-warning my-2 mx-2' onClick={()=>filterdata('Android Application')}>Android App</button>
            <button className='btn btn btn-warning my-2 mx-2' onClick={()=>setItems(Sdata)}>All App</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {items.map((val, ind) => {
                return (
                  <>
                    <Card key={ind} imgsrc={val.img} title={val.title} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
