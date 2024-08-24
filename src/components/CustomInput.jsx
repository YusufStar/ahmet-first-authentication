import React from "react";

const CustomInput = ({
    label,
    placeholder
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize text-md text-[#121212]" htmlFor={label}>{label}</label>
      <input className="px-4 py-3 bg-[#F5F7FA] text-xs rounded-lg" type="email" id={label} placeholder={placeholder}/>
    </div>
  );
};

export default CustomInput;
