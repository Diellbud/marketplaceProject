function SignIn() {
  function handleSubmit(e) {
    e.preventDefault();
    const formInfo = new FormData(e.target);
    const formDataObject = Object.fromEntries(formInfo.entries());
    console.log(formDataObject);
    
  }
    return (
      <>
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" className="emailInput" name="email" required />
            </div>
            <div className="form-group">
              <input type="password" className="passwordInput" placeholder="Password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </>
    )
  }
  
  export default SignIn
  