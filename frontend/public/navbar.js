function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <a className="navbar-brand"><img style={{ width: "75px", height:"75px"}} src="HNB.png"></img> &nbsp; Magyar Nemzeti Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="navbar-brand" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>

  );
}