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


