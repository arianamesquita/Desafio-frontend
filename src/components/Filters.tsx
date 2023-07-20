import { useState } from "react"


interface InputProps{
    label: string,
    value: string,
    updateValue (value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateInputs(){
    const[dateInicio, setDateInicio] = useState("");
    const[dateFim, setDateFim] = useState("");
    const[nome, setNome] = useState("");

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <form className="box1">
                    <Input label="Data de Início: " value={dateInicio} updateValue={setDateInicio} />
                </form>
                <form className="box2">
                    <Input label="Data de Fim: " value={dateFim} updateValue={setDateFim} />
                </form>
                <form className="box3">
                    <Input label="Nome do Operador da Transação: " value={nome} updateValue={setNome} />
                </form>
            </div>
            <button className="buttonFilter">{"Pesquisar"}</button>
        
          
        </div>

    )
}