import './Footer.scss';

export const Footer = () => {
    return(
        <div className="Footer_Page">
            <div className="Footer_Email">
                <div className="Left_side">
                    <div className="Left_first">
                        <h2>LET'S STAY IN TOUCH</h2>
                        <p>Get updates on sales specials and more</p>
                    </div>
                    <div className="Left_second">
                        <input type="email" placeholder='Enter Email Address'/>
                        
                    </div>
                </div>
                <div className="Right_side">
                    <div className="Left_first">
                        <h2>FOLLOW MI</h2>
                        <p>We want to hear from you!</p>
                    </div>
                    <div className="Left_second"></div>
                </div>
            </div>
            <img src="https://user-images.githubusercontent.com/93377428/160822436-e99824c6-bf2c-4892-9e39-ce83782e5fe6.png" className="Black_Image" alt="Footer_Image" />
        </div>
    )
}