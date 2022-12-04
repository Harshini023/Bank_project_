function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div>
      {show ?
        <LoginForm setShow={setShow} setStatus={setStatus} /> :
        <LoginMsg setShow={setShow} setStatus={setStatus} />}
    </div>
  )

  function LoginMsg(props) {
    return (<>
      <h5>Success</h5>
      <button type="submit"
        className="btnstyle"
        onClick={() => props.setShow(true)}>
        Authenticate again
      </button>
    </>);
  }

  function LoginForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handle(e) {
      e.preventDefault();
      fetch(`/account/login/${email}/${password}`)
        .then(response => response.text())
        .then(text => {
          try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
            alert("Login Succssfully");
          } catch (err) {
            props.setStatus(text)
            console.log('err:', text);
            alert("Login Failed");
          }
        });
    }


    return (<>
      <div className="login">
        <div class="card">
          <div class="heading-ca">
            Login Your Account
          </div>
          <div class="card-body">
            <form>
            <label className="form-label">Email</label><br />
              <input type="email"
                id="exampleInputEmail1"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)} />
              {/* {error.email && <p className="error">{error.email}</p>} */}
              <br />
              <label className="form-label">Password</label><br />
              <input type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)} />
              {/* {error.password && (<p className="error">{error.password}</p>)} */}
              <br />
              <center>
                <button type="submit" className="btnstyle" onClick={handle}>Login</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>);
  }
}
