import React, { useState } from "react";

const SearchHeader = ({ search }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz ?</label>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchHeader;
