import { connect } from 'react-redux';
import Allorder from './allorder';


function App(props) {
  return (
    <>
    <Allorder/>
     <div className="App">
    <button onClick={props.handleMinus}>-</button>
     <span>{props.order}</span>
    <button onClick={props.handlePlus}>+</button>
    </div>
    </>
   
  );
}
const mapStateToProps=(state)=>{
return {
  order : state.totalOrder
}
}
const mapDispatchToProps =(dispatch)=>{
  return{
    handlePlus : ()=>{dispatch({type: 'PLUS_ORDER'})},
    handleMinus : ()=>{dispatch({type: 'MINUS_ORDER'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
