
import Form from "./Components/Form";


let isUserLoggedIn= false;
let userIsREgistered= false;

const currentTime = new Date().getHours()
console.log(currentTime)
// Example of ternary operator:

// condition ? d if true: do if false
// isCloud === true ? bringUmbrella(): bringSunscreen()


function App() {
  return (
    <div className="container">
        {/* {isUserLoggedIn ? <h1>Hello</h1> : <Form/>} */}
        {/* {currentTime>16 && <h1>Why are you still working ?</h1>} */}
        { isUserLoggedIn ? <h1>Hello</h1>: <Form
          isRegestered= {userIsREgistered}
        />  }
      
        

    </div>
  );
}

export default App;
