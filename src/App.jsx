import Form from "./Components/Form";

let isUserLoggedIn= false;


// Example of ternary operator:

// condition ? d if true: do if false
// isCloud === true ? bringUmbrella(): bringSunscreen()


function App() {
  return (
    <div className="container">
        {isUserLoggedIn===true ? <h1>Hello</h1> : <Form/>}
    </div>
  );
}

export default App;
