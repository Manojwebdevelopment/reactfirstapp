import React from 'react'
import Comman from './Comman'
export default function Home(props) {
    // const [img,setImg]=useState("")
  return (
    <>    
   
    {/* <div>Home</div>
    <input className="form-control search me-2" type="search" onChange={(e)=>{setImg(e.target.value)}} value={img} placeholder="Search" aria-label="Search"/>
    {img=== "" ? null : <Image name={img}/>} */}
    
   <Comman 
   name="Grow your business with"
    visit="Service"
    btname="Get Start"
    imgsrc="https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-128001.jpg?w=360&t=st=1702115686~exp=1702116286~hmac=7f23343605175494f89a81e118fcbdb7974b29e6ef8c84dd44b6c9b99cd25bb3"
   />
    </>
  )
}
