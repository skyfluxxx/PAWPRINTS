import React from 'react';
import '../components/Home.css';
import dogImage from '../assets/dog-home.jpg'; // Replace '../path/to/dog.jpg' with the actual path to your dog image

function Home() {
  return (
    <div>
      <div className="cover">
        <img src={dogImage} alt="Dog" className="dog-image" />
        <div className="text-overlay">
          <h1>Welcome to PawPrints</h1>
          <p>Record Management System for City Veterinary Office Lapu-Lapu Chapter</p>
          <button className="see-more">Register Now!</button>
        </div>
      </div>

      <div className="additional-info-container">
        <div className="additional-info">
          <h1>Our Story</h1>
          <div className="card">
            <p>
            PawPrints had a modest beginning, born from the shared vision
            of a passionate team of technologists and veterinarians in Lapu-Lapu City.
            </p>
          </div>
          <div className="card">
            <p>
            Through tireless dedication and innovation, PawPrints emerged as an indispensable
            tool, transforming the City Veterinary Office's operations, ensuring the well-being
            of pets, and fostering a stronger bond between the community and their beloved companions.
            </p>
          </div>
        </div>
      </div>

      <div className="background-color-container"></div>


    </div>
  );
}

export default Home;
