import React, { useState } from "react";

function AdvanceForm() {
  const [formData, setFormData] = useState({
    gender: "",
    country: "USA ",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with checkbox Radio select </h1>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input 
            type="radio"
            name="gender" 
            value="Female" 
            checked = {formData.gender === "Female"}
            onChange={handleChange}
            
            />
        Female
      </label>
      <br />
      <br />

      <label>
        Country:
        <select 
            name="country" 
            onChange={handleChange} 
            value={formData.country}
        >
            
          <option value="india">India</option>
          <option value="USA ">USA</option>
          <option value="US">US</option>
        </select>
      </label>

      <br />
      <br />

      <label htmlFor="">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I am agree to term and conditions
      </label>
      <br />
      <br />
      <label htmlFor="">
        <button typeof=" submit"> Submit</button>
      </label>
    </form>
  );
}

export default AdvanceForm;
