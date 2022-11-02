import React, { useReducer } from 'react'
import "./MenuRouting.css"
import imghome from '../ComponentsRoutings/pexels.jpeg'
import img2 from '../ComponentsRoutings/img2.jpg'
import img3 from '../ComponentsRoutings/img3.jpg'


  const mystyle = {
    width:"800px",
    height:"500px"
  }

const initialState = {
  images:<img src= {imghome} style={mystyle}/>, 
  images2:<img src= {img2} style={mystyle}/>,
  images3:<img src= {img3} style={mystyle}/>
};

function reducer(state, action) {
  switch (action.type) {
    case 'left':
      return {images:<img src= {imghome}style={mystyle}/> };
    case '*':
      return {images: <img src= {img2}style={mystyle}/>};
      case 'right':
      return {images: <img src= {img3}style={mystyle}/>};
    default:
      throw new Error();
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className='con'>
           <h2>What is Lorem Ipsum</h2> 
        <div className='imgdiv'>
              {state.images} 
        </div>
        <div className='btn'>
          <button onClick={() => dispatch({type: 'left' })}> </button>
          <button onClick={() => dispatch({type: '*' })}> </button>
         <button onClick={() => dispatch({type: 'right'})}></button>
    </div>
    </div>
  );
}
export default Home;

// export default function Home() {

//   return (


  
//     <div className='container'>
//       <div>
//       <img src={imghome} />
//       </div>
  
//     <div className='divtext'>
//       <h1>Hello Home</h1>
//       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
//        Ipsum has been the industry's standard dummy text ever since the 1500s, when <br />
//        an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
//        It has survived not only five centuries, </p>
//        </div>
//     </div>
//   )
// }
