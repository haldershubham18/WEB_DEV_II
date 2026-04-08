// import React from 'react'
// import { add } from "./utility"

// function Sample(props) {
//     console.log(add(2,4))
//   return (
//     <div>
//       <h2>Trending Topics</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod voluptatum iure incidunt, temporibus sequi iusto, pariatur maxime commodi ducimus, nihil autem. Magni modi praesentium, fuga culpa ad animi laboriosam!</p>
//        <button
//           className="counter"
//           onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count is {props.count}
//         </button>
//     </div>
//   )
// }

// export default Sample

import React, {Component} from 'react'
import NavStyle from

class Sample extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
          <h2>Trending Topics</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod voluptatum iure incidunt, temporibus sequi iusto, pariatur maxime commodi ducimus, nihil autem. Magni modi praesentium, fuga culpa ad animi laboriosam!</p>
           <button
            className="counter"
            onClick={() => this.props.setCount((count) => count + 1)}
            >
            Count is {this.props.count}
            </button>
        </div>
    )
    }
}
export default Sample


function sample() {
    const [count, setCount] = useState (0)
    const increment =() =>{
        setCount(count + 1)
    }
    return (
        <div>
            <h1>This is a sample</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Incerment</button>
        </div>
    )
}

function sample() {
    const [count, setCount] = useState (0)
    const decrement =() =>{
        setCount(count - 1)
    }
    return (
        <div>
            <h1>This is a sample</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrment</button>
        </div>
    )
}

Constructor(props){
    super(props)
    this.state={}
}

ComponentDioMount() {
    console.log("component is mounted")
}

shouldComponentUpdate(nextProps, nextState){

}
return(
    <div>
        <h1>this is a sample component</h1>
        <h2>{count}</h2>
        <button style={{backgroundColor:"red",color:"white",width:"100px",height:"30px"}}
        onClick={increment}
    </div>
)