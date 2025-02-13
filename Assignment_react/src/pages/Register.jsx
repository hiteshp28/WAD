import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const handleHobbyChange = (event) => {
    const value = event.target.value;
    setHobbies((prevHobbies) =>
      prevHobbies.includes(value)
        ? prevHobbies.filter((hobby) => hobby !== value)
        : [...prevHobbies, value]
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      mobile,
      address,
      city,
      gender,
      hobbies,
    };
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" required />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} maxLength="10" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
          </div>
          <div className="form-group">
            <label>City</label>
            <select value={city} onChange={(e) => setCity(e.target.value)} required>
              <option value="">Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Nashik">Nashik</option>
              <option value="Latur">Latur</option>
              <option value="Nanded">Nanded</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
                Other
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Hobbies</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" value="Reading" checked={hobbies.includes("Reading")} onChange={handleHobbyChange} />
                Reading
              </label>
              <label>
                <input type="checkbox" value="Gaming" checked={hobbies.includes("Gaming")} onChange={handleHobbyChange} />
                Gaming
              </label>
              <label>
                <input type="checkbox" value="Sports" checked={hobbies.includes("Sports")} onChange={handleHobbyChange} />
                Sports
              </label>
              <label>
                <input type="checkbox" value="Music" checked={hobbies.includes("Music")} onChange={handleHobbyChange} />
                Music
              </label>
            </div>
          </div>
          <div className="button-group">
            <button type="button" onClick={() => navigate("/")}>Back to Login</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
