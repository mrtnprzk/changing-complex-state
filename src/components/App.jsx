import React, {useState} from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // //Another way to work with
  // const [fullName, setFullName] = useState({
  //   firstName: "",
  //   lastName: ""
  // });

  // function handleChange(e) {
  //   const {name, value} = e.target

  //   setFullName(prevValue => {
  //     if (name === "firstName") {
  //       return {
  //         firstName: value,
  //         lastName: prevValue.lastName
  //       }
  //     } else if (name === "lastName") {
  //       return {
  //         firstName: prevValue.firstName,
  //         lastName: value
  //       }
  //     }
  //   })
  // }

  const [firstNameSubmit, setFirstNameSubmit] = useState("");
  const [lastNameSubmit, setLastNameSubmit] = useState("");

  const [hover, setHover] = useState(false)
  
  return (
    <div className="container">
      <h1>Hello {firstNameSubmit} {lastNameSubmit}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        
        <input name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        <input name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
        <button 
          type="submit"
          onClick={() => setFirstNameSubmit(firstName) + setLastNameSubmit(lastName) + setFirstName("") + setLastName("")}
          style={{background: hover ? "black" : "white"}}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >Submit
        </button>
      </form>
    </div>
  );
}

export default App;
