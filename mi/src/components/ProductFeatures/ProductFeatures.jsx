import mi1 from "./Images/mi1.png"
import mi2 from "./Images/mi2.png"
import mii1 from "./Images/mii1.png"
import mii2 from "./Images/mii2.png"
import mi4 from "./Images/mi4.png"
import mi5 from "./Images/mi5.png"
import mi6 from "./Images/mi6.jpg"
import mi8 from "./Images/mi8.png"
import mi9 from "./Images/mi9.png"
import mi10 from "./Images/mi10.png"
import mi11 from "./Images/mi11.png"
import mi12 from "./Images/mi12.png"
import mi13 from "./Images/mi13.png"
import mi14 from "./Images/mi14.png"
import mi15 from "./Images/mi15.png"
import mi16 from "./Images/mi16.png"
import mi17 from "./Images/mi17.png"
import overview from "./Videos/overview.mp4"
import mobile from "./Videos/mobilecharging.mp4"

export const ProductFeatures = ()=>{
    return(
        <div id="productfeatures">

            <div id="productfeature-navbar" style={{width:"100%", height:"60px", backgroundColor:"whitesmoke", display:"flex", justifyContent:"space-around", fontSize:"small", color:"gray"}}>
                <p>Xiaomi 11T Pro</p>
                <p>Overview</p>
                <p>Specs</p>
                <p style={{}}>120W Xiaomi HyperCharge</p>
            </div>

            <div id="productfeature-content" style={{backgroundColor:"black", width:"100%", height:"5000px"}}>
                <img style={{width:"100%"}} src={mi1} />
                <img style={{width:"100%"}} src={mi2} />
                <video style={{width:"100%"}} src={overview} muted autoPlay loop></video>
                <img style={{width:"100%"}} src={mii1} />
                <img style={{width:"100%"}} src={mii2} />
                <video style={{width:"50%", borderRadius:"10px"}} src="https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-11t-pro/overview04-video1.mp4" muted autoPlay loop></video>
                <video style={{width:"100%", marginTop:"100px"}} src="https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-11t-pro/overview05-video.mp4" muted autoPlay loop></video>
                <img style={{width:"100%"}} src={mi4} />
                <img style={{width:"100%"}} src={mi5} />
                <img style={{width:"100%"}} src={mi6} />
                <img style={{width:"100%"}} src={mi8} />
                <img style={{width:"100%"}} src={mi9} />
                <img style={{width:"100%"}} src={mi10} />
                <img style={{width:"100%"}} src={mi11} />
                <video style={{width:"100%"}} src={mobile} muted autoPlay loop></video>
                <img style={{width:"100%"}} src={mi12} />
                <img style={{width:"100%"}} src={mi13} />
                <img style={{width:"100%"}} src={mi14} />
                <img style={{width:"100%"}} src={mi15} />
                <img style={{width:"100%"}} src={mi16} />
                <img style={{width:"100%"}} src={mi17} />
            </div>
        </div>
    )
}