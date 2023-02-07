import './App.css';

function Heading() {
  return (
    <h1>Not Your Grandpa's Budget App</h1>
  )
}

function InputValue({ valueType }) {
  return (
    <div>
      <h2>{valueType}</h2>
      <input placeholder="Input Value"></input>
      <button>Submit</button>
    </div>
  )
}

function TotalMonthlyIncome() {
  return (
    <div>
      <p></p>
    </div>
  )
}

function App() {
  return (
    <>
      <Heading />
      <InputValue valueType="Total Monthly Income"/>
      <InputValue valueType="Total Monthly Outgoings"/>
    </>
  );
}

export default App;

/*
PSEUDOCODE

  DISPLAYED VALUES
    Monthly Income: Input Interactable

    Monthly Outgoings: Input Interactable

    Total Monthly Available Funds: Calculated

    Weekly Available Funds: Calculated

    Week 1 Funds: Calculated Interactable

    Week 2 Funds: Calculated Interactable

    Week 3 Funds: Calculated Interactable

    Week 4 Funds: Calculated Interactable

*/