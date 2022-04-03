import React from "react";
import "./nav.css"
function Nav(){
    
    return (
         <div className="nav">
             <div className="miaccount"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png" className="miicon"/>
        <p className="mip">Mi Account</p></div>
        <div className="links">
            <a href="https://static.account.xiaomi.com/html/agreement/user/global/en_US.html"><p className="p">User Agreement</p></a>
           <a href="https://privacy.mi.com/globalmiaccount/en_US/"><p className="p">Privacy Policy</p></a> 
           <a href="https://in.account.xiaomi.com/helpcenter?_locale=en_US"><p className="p">Need help?</p></a> 
            <div><hr className="line"/></div>
            <p className="p">Select Your Language
</p>

        </div>
        
                </div>
       
    )
}
export default Nav;