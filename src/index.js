import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';


const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1 ;
    case "DECREMENT":
      return state - 1 ;
    default:
      return state;
  }
}
let store = createStore(countReducer);


const mapStateToProps = state => {
  return {
    count: state
  }
}
const mapDispatchToProps  = dispatch =>{
  return{
    handleDecrementClick:()=> dispatch({type:'INCREMENT'}),
    handleIncrementClick:()=> dispatch({type:'DECREMENT'})
  }
}
const Component = ({ count, handleDecrementClick, handleIncrementClick}) =>
  (
    <div>
      <h1>Hello react and redux {count}</h1>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  );


const Container = connect(mapStateToProps,mapDispatchToProps)(Component);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
