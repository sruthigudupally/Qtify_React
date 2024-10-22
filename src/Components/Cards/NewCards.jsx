import React,{useState,useEffect} from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NewCards = () => {
    let[newdata,setNewdata]=useState([]) 
    let navigate=useNavigate()
    useEffect(()=>{
        fetch("https://qtify-backend-labs.crio.do/albums/new").then(x=>x.json()).then(x=>setNewdata(x)).catch(()=>alert("Top Albums Api Failed"))
    },[])
  return (
    <>
        <h3 id="top">New Albums</h3>
        <div id="cardsdiv">
        <Carousel>
            <CarouselItem>
            <CardGroup>
            {newdata.slice(0,6).map((x,y)=>{
            return(
                <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})}>
                    <div className='cdata1'>
                        <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                        <span className="cdataspan">{x.follows} Follows</span>
                        </div>
                        </div>
                        <p className='cdatatitle'>{x.title}</p>
                        </div>)})}
            </CardGroup>
            </CarouselItem>
            <CarouselItem>
            <CardGroup>
            {newdata.slice(6,12).map((x,y)=>{
            return(
                <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})}>
                    <div className='cdata1'>
                        <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                        <span className="cdataspan">{x.follows} Follows</span>
                        </div>
                        </div>
                        <p className='cdatatitle'>{x.title}</p>
                        </div>)})}
            </CardGroup>
            </CarouselItem>
           
            
        </Carousel>
        </div>
        

      
    </>
  )
}

export default NewCards
