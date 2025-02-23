import React, { useState } from "react";

const CheckBox = ({ text, name, id, onChange, textField }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [limitValue, setLimitValue] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    if (id === "spaces") {
      if (textField) {
        const sinEspacios = !isChecked ? textField.replace(/\s+/g, "") : textField;
        onChange(sinEspacios);
      }
    }
  };

  const handleLimitChange = (e) => {

    const value = e.target.value;
    setLimitValue(value);
    onChange(value);
  };

  return (
    <div className="flex font-[16px] h-[29px] items-center gap-4 leading-[1.3] tracking-[-0.6px]">
      <label htmlFor={id} className="flex items-center">
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={isChecked}
          onChange={handleCheckboxChange} // Cambia solo el estado del checkbox
          className="mr-2.5 w-4 h-4 border border-white rounded-md bg-transparent cursor-pointer"
        />
        {text}
      </label>

      {/* Solo muestra el input si el checkbox "limit" está marcado */}
      {id === "limit" && isChecked && (
        <input
          id="setLimit"
          name=""
          value={limitValue}
          onChange={handleLimitChange}
          className="border bg-transparent border-[#404254] rounded-lg w-[55px] h-[29px] text-center"
          placeholder="Limit"
        />
      ) }
    </div>
  );
};

export default CheckBox;
