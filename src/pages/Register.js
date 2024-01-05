// import React, { PureComponent } from 'react'

// export class Register extends PureComponent {
//   render() {
//     return (
//       <div>Register</div>
//     )
//   }
// }

// export default Register

import React, { useRef } from 'react';
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Register() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    }

    try {
      await addDoc(ref, data);
      console.log("Document successfully written!");
    } catch (e) {
      console.error("Error writing document: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
