export default function Footer(){
    return(
        <footer className="footer">
         
            <div className="container">
                <ul className="footer-sl flex">
                    <li><a href="#"> <i className="fa-brands fa-facebook sl"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-pinterest sl"></i></a></li>
                    <li><a href="#"> <i className="fa-brands fa-instagram sl"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter sl"></i></a></li>
                  

                

            

                </ul>
                <ul className="footer-nav flex">
                <li className="footer-nav-link"><a href="#"> Home</a></li>
                <li className="footer-nav-link"><a href="#"> Shop</a></li>
                <li className="footer-nav-link"><a href="#"> About Us</a></li>
                <li className="footer-nav-link"><a href="#">Contact</a></li>
               
                    
                </ul>
                <p id="copyright">&copy; 2022</p>
            </div>
          
        </footer>
    )
}