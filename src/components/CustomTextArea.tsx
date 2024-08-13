import React, { useState } from "react";
import style from "../components/containers/MainContainer.module.css"

const CustomTextArea: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    // Regex to allow only alphabets and spaces
    const filteredInput = input.replace(/[^a-zA-Z\s]/g, "");
    setValue(filteredInput);
  };

  return (
    <textarea
      className={style.textArea}
      value={value}
      onChange={handleChange}
      placeholder="Type only alphabets and spaces"
    />
  );
};

export default CustomTextArea;
