function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    // <Card
    //   bgcolor="info"
    //   header="Balance"
    //   status={status}
    //   body={show ?
    //     <BalanceForm setShow={setShow} setStatus={setStatus}/> :
    //     <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    // />

    <div className="head">
        <status>{status}</status>
        <body class="body">
        {show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
        </body>
    </div>
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
      <center>
        <button type="submit" 
          className="btnbtn-primary btnstyle1" 
          onClick={() => {
            props.setShow(true);
            props.setStatus('');
          }}>
            Check balance again
        </button>
      </center>
  
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>
    <div class="heading-bal">Balance</div>
    
    <br/>
    <label class="form-label1">Email</label>
    <div class="mb-3">
      <input type="input" 
        className="form-control1" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/>
        
        <br/>
        <br/>
        <br/>
      <center>
        <button type="submit" 
          className="btnbtn-primary btnstyle1" 
          onClick={handle}>
            Check Balance
        </button>
      </center>
    </div>

  </>);
}