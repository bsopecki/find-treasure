import './Login.css'

const Login = () => {
  return (
    <section className='form-wrapper'>
      <h1 className='form-title'>Ready to find your treasure?</h1>
      <form className="form">
        <label className='form-label'>What's your name?</label>
        <input type="text" required placeholder='Name'/>
        <button className="login-btn" type="submit">Let's play!</button>
      </form>
    </section>
  );
};

export default Login
