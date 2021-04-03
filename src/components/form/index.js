import React from 'react'

import styles from '../../styles/pages/form.module.css'

function Form() {
    return(
        <form className={styles.form_container}>
            <fieldset className={styles.form_fieldset}>
                 <div className={styles.form_design}> <span> Seção 1 de 3 </span></div>
                <legend> Dados pessoais</legend>
                <div className={styles.form_inputBlock}> 
                    <label>Informe o seu nome</label>
                    <input type="text" placeholder="primeiro nome" />
                </div>

                <div className={styles.form_inputBlock}>
                    <label>'Nome', informe a sua idade(em anos)</label>
                    <input type="number" placeholder="ex: 40" min="0" />
                </div>

                <div className={styles.form_checkedBlock}>
                    <label>'Nome', você é fumante? </label>
                    <input id="fumanteSim" type="radio" name="fumante" checked /> <span> Sim </span> 
                    <input type="radio" name="fumante" /> <span> Não </span> 
                </div>
            </fieldset>

            <fieldset className={styles.form_fieldset}>
                <div className={styles.form_design}> <span> Seção 2 de 3 </span></div>
                <legend> Doenças Pré-existentes </legend>
                <div className={styles.form_selectBlock}>
                    <label> doenças pré-existentes mais comuns </label>
                    <select>
                        <option>Anemia</option>
                        <option>Hérnia</option>
                        <option>Hipertensão</option>
                        <option>Câncer</option>
                    </select>
                </div>

            </fieldset>
        </form>
    )
}

export default Form