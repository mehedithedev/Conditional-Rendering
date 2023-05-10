import Input from "./Input"

const Form=(props)=>{
    return(
    <div className="container">
      
      <form className="form">
        <Input
            type='text'
            placeholder='Username'
        />
         <Input
            type='password'
            placeholder='Password'
        />
        {props.isRegestered===false && (
            <Input
            type="password"
            placeholder="Confirm Password"
        />
        )}
        
        <button type="submit">
           {props.isRegestered ? 'Login': "Register"}
        </button>
      </form>
      

    </div>
    )
}
export default Form