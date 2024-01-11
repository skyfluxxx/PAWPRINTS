import React, { useState } from 'react';
import '../components/Surrender.css';
import { firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Surrender = () => {
  const [formData, setFormData] = useState({
    animalControlOfficer: '',
    petName: '',
    ownerName: '',
    date: '',
    placeFound: '',
    address: '',
    time: '',
    ownerControlNo: '',
    animalType: '',
    dateTime: '',
    age: '',
    color: '',
    veterinaryAttention: '',
    releasingOfficer: '',
    claimant: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    const requiredFields = [
      'animalControlOfficer',
      'petName',
      'ownerName',
      'date',
      'placeFound',
      'address',
      'time',
      'ownerControlNo',
      'animalType',
      'dateTime',
      'age',
      'color',
      'veterinaryAttention',
      'releasingOfficer',
      'claimant',
    ];

    e.preventDefault();
    const isAnyFieldEmpty = requiredFields.some((field) => formData[field].trim() === '');

    if (isAnyFieldEmpty) {
      alert('Please fill all necessary required fields!');
      return;
    }

    console.log('Form submitted:', formData);

    try {
      const surrenderRef = collection(firestore, 'surrendered');

      await addDoc(surrenderRef, formData);
      console.log('Your inputs are successfully submitted!');
      alert('Your inputs are successfully submitted!');

      setFormData({
        animalControlOfficer: '',
        petName: '',
        ownerName: '',
        date: '',
        placeFound: '',
        address: '',
        time: '',
        ownerControlNo: '',
        animalType: '',
        dateTime: '',
        age: '',
        color: '',
        veterinaryAttention: '',
        releasingOfficer: '',
        claimant: '',
      });
    } catch (error) {
      console.error('Error encountered:', error);
      alert('Error encountered:', error);
    }
  };

  return (
    <div className="surrender-form-container">
      <h1>ANIMALS SURRENDER</h1>
      <h2>OFFICE OF THE CITY VETERINARIAN</h2>
      <h3>LAPU-LAPU CITY</h3>
      <p>Tel. No.: 341-2612</p>
      <br></br>
      <form onSubmit={handleSubmit} className="surrender-form">
        <label>
          Animal Control Officer
          <input type="text" name="animalControlOfficer" value={formData.animalControlOfficer} onChange={handleChange} />
        </label>

        <label>
          Name of Pet
          <input type="text" name="petName" value={formData.petName} onChange={handleChange} />
        </label>

        <label>
          Owner's Name
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} />
        </label>

        <label>
          Date
          <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="dd/mm/yyyy" />
        </label>

        <label>
          Place Found
          <input type="text" name="placeFound" value={formData.placeFound} onChange={handleChange} />
        </label>

        <label>
          Address
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>

        <label>
          Time
          <input type="time" name="time" value={formData.time} onChange={handleChange} placeholder="--:--" />
        </label>

        <label>
          Owner's Control No.
          <input type="text" name="ownerControlNo" value={formData.ownerControlNo} onChange={handleChange} />
        </label>

        <label>
          Animal Type/Breed
          <input type="text" name="animalType" value={formData.animalType} onChange={handleChange} />
        </label>

        <label>
          Date & Time
          <input type="text" name="dateTime" value={formData.dateTime} onChange={handleChange} placeholder="dd/mm/yyyy --:--" />
        </label>

        <label>
          Age
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>

        <label>
          Color
          <input type="text" name="color" value={formData.color} onChange={handleChange} />
        </label>

        <label>
          Veterinary Attention
          <input type="text" name="veterinaryAttention" value={formData.veterinaryAttention} onChange={handleChange} />
        </label>

        <label>
          Releasing Officer
          <input type="text" name="releasingOfficer" value={formData.releasingOfficer} onChange={handleChange} />
        </label>

        <label className="claimant-section">
          Claimant
          <div className="claimant-input">
            <input type="text" name="claimant" value={formData.claimant} onChange={handleChange} />
          </div>
        </label>

        <br></br>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Surrender;
