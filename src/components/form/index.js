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
                    <select required>
                        <option value="" disabled> Selecione uma opção</option>
                        <option>Hérnia</option>
                        <option>Hipertensão</option>
                        <option>Câncer</option>
                        <option>Anemia</option> 
                    </select>
                </div>
            </fieldset>

            <fieldset className={styles.form_fieldset}>
                <div className={styles.form_design}> <span> Seção 3 de 3 </span></div>
                <legend> Sintomas apresentados </legend>
                <div className={styles.form_checkedBlock} style={{borderBottom: '1px solid var(--color-line-in-white)', paddingBottom:'5px', marginBottom: '10px'}}>
                    <label> Tosse seca? </label>
                    <input className={styles.inputRadio} id="tosseSim" type="radio" name="tosse" checked /> <span> Sim </span> 
                    <input id="tosseNao" type="radio" name="tosse" /> <span> Não </span> 
                </div>
                <div className={styles.form_checkedBlock} style={{borderBottom: '1px solid var(--color-line-in-white)', paddingBottom:'5px', marginBottom: '10px'}}>
                    <label> Cansaço excessivo? </label>
                    <input id="cansacoSim" type="radio" name="cansaco" checked /> <span> Sim </span> 
                    <input id="cansacoNao" type="radio" name="cansaco" /> <span> Não </span> 
                </div>
                <div className={styles.form_checkedBlock} style={{borderBottom: '1px solid var(--color-line-in-white)', paddingBottom:'5px', marginBottom: '10px'}}>
                    <label> Febre persistente? </label>
                    <input id="febreSim" type="radio" name="febre" checked /> <span> Sim </span> 
                    <input id="febreNao" type="radio" name="febre" /> <span> Não </span> 
                </div>
                <div className={styles.form_checkedBlock} style={{borderBottom: '1px solid var(--color-line-in-white)', paddingBottom:'5px', marginBottom: '10px'}}>
                    <label> Dificuldade de respirar? </label>
                    <input id="dificuldadeRespirarSim" type="radio" name="respirar" checked /> <span> Sim </span> 
                    <input id="dificuldadeRespirarNao" type="radio" name="respirar" /> <span> Não </span> 
                </div>
            </fieldset>

            <button type="button" className={styles.button}>Enviar</button>

        </form>
    )
}

export default Form