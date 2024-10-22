import React,{useState,useEffect} from 'react'
import { CardGroup, Carousel, CarouselItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const TopCards = () => {
    let[topdata,setTopdata]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        fetch("https://qtify-backend-labs.crio.do/albums/top").then(x=>x.json()).then(x=>setTopdata(x)).catch(()=>alert("Top Albums Api Failed"))
    },[])
  return (
    <>
    <div id="cdiv1">
            <div id="cdiv1h1">
            <h1 id="h1">100 Thousand Songs, ad free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>           
         <div id="cdiv1img">
         <img src="https://qtify-venkykumar.netlify.app/static/media/headphone.66e109c97f55e2a35a02d810fa2b6650.svg" alt="Headphone" />       
         </div>       
        </div>                ggg
        <h3 id="top">Top Albums</h3>
        <div id="cardsdiv">
        <Carousel>
            <CarouselItem><CardGroup>                                                                              
            {topdata.slice(0,6).map((x,y)=>{
                return(
                    <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})} >
                        {/* data-toggle="tooltip" data-placement="top" title={x.songs.length}Songs */}
                        <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                            <div className='cdata11'>
                                <span className="cdataspan">{x.follows} Follows</span>
                            </div>
                        </div>
                            <p className='cdatatitle'>{x.title}</p>
                            
                        </div>)})}
            </CardGroup></CarouselItem>
            <CarouselItem><CardGroup>
            {topdata.slice(6,12).map((x,y)=>{
                return(
                    <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})} >
                        {/* data-toggle="tooltip" data-placement="top" title={x.songs.length}Songs */}
                        <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                            <div className='cdata11'>
                                <span className="cdataspan">{x.follows} Follows</span>
                            </div>
                        </div>
                            <p className='cdatatitle'>{x.title}</p>
                            
                        </div>)})}
            </CardGroup></CarouselItem>

            <CarouselItem><CardGroup>
            {topdata.slice(12,).map((x,y)=>{
                return(
                    <div className='carddiv' key={y} onClick={()=>navigate("/songpage",{state:{x}})} >
                        {/* data-toggle="tooltip" data-placement="top" title={x.songs.length}Songs */}
                        <div className='cdata1'>
                            <img src={x.image} alt="album" className='cimg'/>
                            <div className='cdata11'>
                                <span className="cdataspan">{x.follows} Follows</span>
                            </div>
                        </div>
                            <p className='cdatatitle'>{x.title}</p>
                            
                        </div>)})}
            </CardGroup></CarouselItem>
                        
                    </Carousel>
        </div>
      
    </>
  )
}

export default TopCards
