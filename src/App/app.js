import Left_bar from "../Left-bar/left-bar";
import Center_bar from '../Center-bar/center-bar';
import Right_bar from "../Right-bar/right-bar";
import Footer from "../Footer/footer"
import './App.css'


function App(){
  return( 
    <div>
        <div className="container">
          <Left_bar></Left_bar>
          <Center_bar></Center_bar>
          <Right_bar></Right_bar>
          
        </div> 
        
    </div>        
  );
}
export default App;