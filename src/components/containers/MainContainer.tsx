import { useRef, useEffect, useState } from "react";
import aluraLogo from "../../assets/images/alura.svg";
import style from "./MainContainer.module.css";
import magnifglass from "../../assets/images/magnifglass.png";
import { FaCircleExclamation } from "react-icons/fa6";

const MainContainer = () => {
  const [text, setText] = useState(""); // Testo ingresado por el usuario
  const [result, setResult] = useState(""); // Texto encriptado
  const [invalidInput, setInvalidInput] = useState(false); // Para indicar que el texto ingresado es inválido
  const [copyAlert, setCopyAlert] = useState(false); // Para mostrar un alerta cuando se copie el texto

  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Para controlar el tamaño del textarea

  const invalidCharRegex = /[^a-zA-ZñÑ\s.,¿?¡!]/; // Para evitar que el usuario ingrese carcateres inválidos

  // Para controlar el tamaño del textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [result]);

  // Para evitar que el usuario ingrese caracteres inválidos
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = event.target.value;
    if (invalidCharRegex.test(input)) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
      setText(
        event.target.value.toLowerCase().replace(/[^a-zA-ZñÑ\s.,¿?¡!]/g, "")
      );
      console.log(text);
    }
  };

  // Para encriptar el texto
  const encrypt = (text: string) => {
    const encrypted = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    setResult(encrypted);
  };

  // Para desencriptar el texto
  const decrypt = (text: string) => {
    const decrypted = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    setResult(decrypted);
  };

  // Para copiar el texto encriptado
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    setCopyAlert(true);

    setTimeout(() => {
      setCopyAlert(false);
    }, 1000);
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
          {copyAlert && (
            <div className={style.copyAlert}>
              <p>Texto copiado</p>
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
            <div className={style.message}>
              <h4>Ningún mensaje fue encontrado</h4>
              <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
