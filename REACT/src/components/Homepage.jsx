import React from "react";
function Homepage() {
    const loggedin=false
//     if(loggedin){
//         return(
//             <button>Loogout</button>
        
//         )
//     }else(
//         return(
//             <button>Login</button>
//         )
    
//     )
    
//     }
// }
return(
    loggedin?<buton>Logout</buton> : <button>Login</button>

)
}
export default Homepage