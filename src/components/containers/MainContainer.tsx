import { useRef, useEffect, useState } from "react";
import aluraLogo from "../../assets/images/alura.svg";
import style from "./MainContainer.module.css";
import magnifglass from "../../assets/images/magnifglass.png";
import { FaCircleExclamation } from "react-icons/fa6";

const MainContainer = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const invalidCharRegex = /[^a-zA-Z\s]/;

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto before setting the new height
      textareaRef.current.style.height = 'auto';
      // Set height based on scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [result]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = event.target.value;
    if (invalidCharRegex.test(input)) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
      setText(event.target.value.toLowerCase().replace(/[^a-z\s]/g, ""));
      console.log(text);
    }
  };

  const encrypt = (text: string) => {
    const encrypted = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    setResult(encrypted);
  };

  const decrypt = (text: string) => {
    const decrypted = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    setResult(decrypted);
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <img className={style.aluraLogo} src={aluraLogo} alt="Alura logo"></img>
      </div>
      <div className={style.middleContainer}>
        <div>
          {invalidInput && (
            <div className={style.invalidInputNotification}>
              <p>Por favor, ingrese solo letras minúsculas y sin tildes.</p>
            </div>
          )}
          <textarea
            className={style.textArea}
            placeholder="Ingrese el texto aquí"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <p className={style.alert}>
          <FaCircleExclamation /> Solo letras minúsculas y sin tildes.
        </p>
        <div className={style.buttons}>
          <button
            className={style.encrypt}
            type="button"
            onClick={() => encrypt(text)}
          >
            Encriptar
          </button>
          <button
            className={style.decrypt}
            type="button"
            onClick={() => decrypt(text)}
          >
            Desencriptar
          </button>
        </div>
      </div>
      <div className={style.rightContainer}>
        {result ? (
          <>
            <textarea
            ref={textareaRef}
              className={style.resultTextArea}
              value={result}
            ></textarea>
            <button
              className={style.copy}
              type="button"
              onClick={() => copy(result)}
            >
              Copiar
            </button>
          </>
        ) : (
          <>
            <img
              className={style.magnifglass}
              src={magnifglass}
              alt="Person with magnifying glass"
            ></img>
            <h4>Ningún mensaje fue encontrado</h4>
            <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
