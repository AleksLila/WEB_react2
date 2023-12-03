import './Footer.css'
import footer from '../data/footer.json'


function Footer(){
    return( 
      <div className="Footer">
         {footer.map(item=>
                <section>
                    <p>{item.title}</p>
              
                </section>   
          )} 
          
      </div>         
    );
  }
  export default Footer;