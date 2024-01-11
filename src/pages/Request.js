import React, { useState } from 'react';
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import '../components/Request.css';

const Request = () => {
  const [formData, setFormData] = useState({
    nameOfClient: '',
    address: '',
    telCellphone: '',
    requestFor: '',
    assistedBy: '',
    dateAssisted: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const requiredFields = ['nameOfClient', 'address', 'telCellphone', 'requestFor', 'assistedBy', 'dateAssisted', 'remarks'];

    e.preventDefault();
    const isAnyFieldEmpty = requiredFields.some((field) => formData[field].trim() === '');

    if (isAnyFieldEmpty) {
      alert('Please fill all necessary required fields!');
      return;
    }

    console.log('Form submitted:', formData);

    try {
      const requestRef = collection(firestore, 'request');

      await addDoc(requestRef, formData);
      console.log('Form data stored in Firestore!');
      alert('Form data stored in Firestore!');

      setFormData({
        nameOfClient: '',
        address: '',
        telCellphone: '',
        requestFor: '',
        assistedBy: '',
        dateAssisted: '',
        remarks: '',
      });
    } catch (error) {
      console.error('Error storing form data:', error);
      alert('Error storing form data:', error);
    }
  };

  return (
    <div className="request-form-container">
      <h1>REPUBLIC OF THE PHILIPPINES</h1>
      <h2>CITY OF LAPU-LAPU</h2>
      <h3>OFFICE OF THE CITY VETERINARIAN</h3>
      <p>Tel. No.: 341-2612</p>
      <br />
      <form onSubmit={handleSubmit} className="request-form">
        <label>
          Name of Client
          <input type="text" name="nameOfClient" value={formData.nameOfClient} onChange={handleChange} />
        </label>

        <label>
          Address
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>

        <label>
          Tel/Cellphone No.
          <input type="text" name="telCellphone" value={formData.telCellphone} onChange={handleChange} />
        </label>

        <label>
          Request for:
          <select name="requestFor" value={formData.requestFor} onChange={handleChange}>
            <option value="" disabled selected>Select...</option>
            <option value="Dog Vaccination">Dog Vaccination</option>
            <option value="Dog Impounding">Dog Impounding</option>
            <option value="Dog Surrender">Dog Surrender</option>
            <option value="Others/Specify">Others/Specify</option>
          </select>

        </label>

        <label>
          Assisted By
          <input type="text" name="assistedBy" value={formData.assistedBy} onChange={handleChange} />
        </label>

        <label>
          Date Assisted
          <input type="date" name="dateAssisted" value={formData.dateAssisted} onChange={handleChange} />
        </label>

        <label>
          Remarks
          <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} />
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Request;
