import React, { useState } from "react";
import Prev from "./Prev";

function App() {
  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [skype, setSkype] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [res, setRes] = useState(false);

  const [prevname, setPrevname] = useState("");
  const [prevdep, setPrevdep] = useState("");
  const [prevskype, setPrevskype] = useState("");
  const [prevemail, setPrevemail] = useState("");
  const [prevcomment, setPrevcomment] = useState("");

  function handleChangeName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleChangeDep(event) {
    setDep(event.target.value);
  }

  function handleChangeSkype(event) {
    setSkype(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeText(event) {
    setComment(event.target.value);
  }

  function handleClick(event) {
    setPrevname(name);
    setPrevdep(dep);
    setPrevskype(skype);
    setPrevemail(email);
    setPrevcomment(comment);
    setRes(true);
    alert(
      `Greetings all! I'm ${name},
       I have joined ${dep} department @ Q3Tech.
       My Skype id is : ${skype}
       mail id : ${email}.
       ${comment}
       @all feel free to connect with ${name}.`
    );
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Welcome to Q3 Tech.</h1>
      <form onSubmit={handleClick}>
        {/* collect name */}
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChangeName}
          value={name}
        />

        {/* collect department */}
        <select value={dep} onChange={handleChangeDep}>
          <option>select your department</option>
          <option value=".net">.net</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="It">IT</option>
        </select>

        {/* collect skype id */}
        <input
          type="text"
          placeholder="Skype Id"
          onChange={handleChangeSkype}
          value={skype}
        />

        {/* collect email id */}
        <input
          type="text"
          placeholder="Email Id"
          onChange={handleChangeEmail}
          value={email}
        />

        <textarea
          type="text"
          onChange={handleChangeText}
          value={comment}
          placeholder="write a greeting message to all!"
        />
        <button type="submit">Send</button>
      </form>

      <div>
        <p>Past Response</p>
        <Prev
          name={prevname}
          dep={prevdep}
          skype={prevskype}
          email={prevemail}
          comment={prevcomment}
        />
      </div>
    </div>
  );
}

export default App;
