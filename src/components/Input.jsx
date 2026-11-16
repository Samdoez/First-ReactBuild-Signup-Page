
function Input({src, alt, error, ...rest}){ 
    // here ...rest acts as an accumulation of props passed from the components

    return(
    <>  
        <div className="input-row flex">
            <img className="form-icon" src={src} alt={alt} />            
            <input className="form-input" {...rest} /> 
            {/* ...rest is used to pack all the object and unpack all to avoid mistakes */}
        </div> 
        
        {error && <p className="error-color">{error.message}</p>}
    </>
    )
}

export default Input;