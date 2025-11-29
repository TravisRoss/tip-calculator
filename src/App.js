import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0)
  const [userTip, setUserTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0)

  return (
    <div className="App">
      <Bill bill={bill} onBillChange={setBill} />
      <Rating text="How did you like the service?" tip={userTip} onChange={setUserTip} />
      <Rating text="How did your friend like the service?" tip={friendTip} onChange={setFriendTip} />
      <TotalBill bill={bill} userTip={userTip} friendTip={friendTip} />
      <Reset setBill={setBill} setUserTip={setUserTip} setFriendTip={setFriendTip} />
    </div>
  );
}

function Bill({bill, onBillChange}) {

  function handleBillChange(e) {
    onBillChange(Number(e.target.value))
    console.log("bill value", bill)
  }

  return (
    <div className="row">
      <p>How much was the bill?</p>
      <input type="text" value={bill} onChange={(e) => handleBillChange(e)} />
    </div>
  )
}

function Rating({text, tip, onChange}) {

  function handleTipChange(e) {
    onChange(Number(e.target.value))
  }
  
  return (
    <div className="row">
      <p>{text}</p>
      <select value={tip} onChange={(e) => handleTipChange(e)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>was okay (5%)</option>
        <option value={0.1}>was good (10%)</option>
        <option value={0.2}>absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function TotalBill({bill, userTip, friendTip}) {
  let totalTip = userTip + friendTip
  let totalBill = totalTip > 0 ? bill + (bill * totalTip) : bill
  
  return <p>You pay ${totalBill} (${bill} + ${Math.round(totalTip * 100)} tip)</p>
}

function Reset({setBill, setFriendTip, setUserTip}) {
  function handleReset() {
    setBill(0)
    setFriendTip(0)
    setUserTip(0)
  }

  return (
    <button onClick={handleReset}>Reset</button>
  )
}



export default App;
