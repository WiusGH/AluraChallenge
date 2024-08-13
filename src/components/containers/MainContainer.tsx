import { useState } from 'react'
import aluraLogo from '../../assets/images/aluralogo.png'
import style from './MainContainer.module.css'
import magnifglass from '../../assets/images/magnifglass.png'

const MainContainer = () => {
  const [text, setText] = useState('')

  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <img src={aluraLogo} alt='Alura logo'></img>
        <div className={style.textArea}>
          <textarea placeholder='Ingrese el texto aqui'></textarea>
        </div>
        <div className={style.buttons}>
          <button type='button'>Encriptar</button>
          <button type='button'>Desencriptar</button>
        </div>
        
      </div>
      <div className={style.rightContainer}>
          {text ? (
            <>
            <textarea>{text}</textarea>
            <button type='button'>Copiar</button>
            </>
          ) : (
            <>
            <img src={magnifglass} alt='Person with magnifying glass'></img>
            <h4>Ningún mensaje fue encontrado</h4>
            <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
            </>
          )}
        </div>
    </div>
  )
}

export default MainContainer