import React,{useState,useEffect} from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SongCards = () => {
    let[songsdata,setSongsdata]=useState([])
    let navigate=useNavigate();
    useEffect(()=>{  
        fetch("https://qtify-backend-labs.crio.do/songs").then(x=>x.json()).then(x=>setSongsdata(x)).catch(()=>alert("Top Albums Api Failed"))
    },[])
  
return (
    
    <div id="songs">
           <h3 id="songsheading">Songs</h3>
           <div id="cardsdiv" >
            <Carousel>
            <CarouselItem><CardGroup>
               {songsdata.slice(0,6).map((x,y)=>{
                return(
                    <div key={y} className='carddiv' onClick={()=>navigate("/songpage",{state:{x}})}>
                         <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                            <span className="cdataspan">{x.likes} Likes</span>
                            </div>
                            </div>
                            <p className='cdatatitle'>{x.title}</p>
                        </div>
                    )})}
                </CardGroup></CarouselItem>
                <CarouselItem><CardGroup>
               {songsdata.slice(6,12).map((x,y)=>{
                return(
                    <div key={y} className='carddiv' onClick={()=>navigate("/songpage",{state:{x}})}>
                         <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                            <span className="cdataspan">{x.likes} Likes</span>
                            </div>
                            </div>
                            <p className='cdatatitle'>{x.title}</p>
                        </div>
                    )})}
                </CardGroup></CarouselItem>
                <CarouselItem><CardGroup>
               {songsdata.slice(12,18).map((x,y)=>{
                return(
                    <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})}>
                         <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                            <span className="cdataspan">{x.likes} Likes</span>
                            </div>
                            </div>
                            <p className='cdatatitle'>{x.title}</p>
                        </div>
                    )})}
                </CardGroup></CarouselItem>
                <CarouselItem><CardGroup>
               {songsdata.slice(18,24).map((x,y)=>{
                return(
                    <div className='carddiv'  key={y} onClick={()=>navigate("/songpage",{state:{x}})}>
                         <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                            <span className="cdataspan">{x.likes} Likes</span>
                            </div>
                            </div>
                            <p className='cdatatitle'>{x.title}</p>
                        </div>
                    )})}
                </CardGroup></CarouselItem>
                <CarouselItem><CardGroup>
               {songsdata.slice(24,30).map((x,y)=>{
                return(
                    <div className='carddiv'  key={y} onClick={()=>navigate("/songpage",{state:{x}})}>
                         <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                        <div className='cdata11'>
                            <span className="cdataspan">{x.likes} Likes</span>
                            </div>
                            </div>
                            <p className='cdatatitle'>{x.title}</p>
                        </div>
                    )})}
                </CardGroup></CarouselItem>
                </Carousel>
        </div>
    </div>
      
    
  )
}

export default SongCards
