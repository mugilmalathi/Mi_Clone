import './styleproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Product =()=>{
    const [vxiaomi,setvXiaomi]=useState(true);
    const [vredmi,setvRedmi]=useState(true);
    const [vpoco,setvPoco]=useState(true);
    const [vmitv,setvMitv]=useState(true);
    const [vaudio,setvAudio]=useState(true);
    const [vpower,setvPower]=useState(true);
    const [vsmart,setvSmart]=useState(true);
    const [vlife,setvLife]=useState(true);
    //view//
    const [xiaomi,setXiaomi]=useState([]);
    const [redmi,setRedmi]=useState([]);
    const [poco,setPoco]=useState([]);
    const [mitv,setMitv]=useState([]);
    const [audio,setAudio]=useState([]);
    const [power,setPower]=useState([]);
    const [smart,setSmart]=useState([]);
    const [life,setLife]=useState([]);
    
    
    


    
    useEffect(()=>{
        axios.get("https://glacial-plateau-42634.herokuapp.com/xiaomi").then(res=>setXiaomi(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/redmi").then(res=>setRedmi(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/poco").then(res=>setPoco(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/mitv").then(res=>setMitv(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/audio").then(res=>setAudio(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/power").then(res=>setPower(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/smart").then(res=>setSmart(res.data));
        axios.get("https://glacial-plateau-42634.herokuapp.com/life").then(res=>setLife(res.data));

    },[])
    
    return (
        <div>
            <div className="breadcrumbs">
            <div className="container">
            <Link to={"/"}>Home</Link> &gt;
            <span>All Products</span>
            </div>
            </div>
            <div className="title" onClick={()=>{(vxiaomi)?setvXiaomi(false):setvXiaomi(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vxiaomi)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Xiaomi phones</h2></div>
            {(vxiaomi)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            
            <div className="title" onClick={()=>{(vredmi)?setvRedmi(false):setvRedmi(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vredmi)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Redmi phones</h2></div>
            {(vredmi)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vpoco)?setvPoco(false):setvPoco(true)}} ><h2 style={{color:"orangered",left:"0px"}}>{(vpoco)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Poco phones</h2></div>
            {(vpoco)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vmitv)?setvMitv(false):setvMitv(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vmitv)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Mi TV</h2></div>
            {(vmitv)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vaudio)?setvAudio(false):setvAudio(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vaudio)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Audio</h2></div>
            {(vaudio)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vpower)?setvPower(false):setvPower(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vpower)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Power Banks</h2></div>
            {(vpower)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vsmart)?setvSmart(false):setvSmart(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vsmart)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Smart device</h2></div>
            {(vsmart)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}
            <div className="title" onClick={()=>{(vlife)?setvLife(false):setvLife(true)}}><h2 style={{color:"orangered",left:"0px"}}>{(vlife)?<FontAwesomeIcon icon={faCircleArrowDown}/>:<FontAwesomeIcon icon={faCircleArrowUp}/>}Life Style</h2></div>
            {(vlife)?<div className='gridcontainer'>
                {
                    xiaomi.map((el)=>{return <Link to={"/"} className='children'>
                        <img src={el.image} className="childimg"/>
                        <Link to={"/"} className='childtitle' style={{textDecoration:"none"}}>{el.title}</Link>
                        
                    </Link>})
                }
            </div>:" "}

        </div>
    )
}