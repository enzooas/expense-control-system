import { useState } from "react";

function PessoaForm() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);

    return (
        <>
            <h2>Cadastrar Pessoa</h2>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="number"
                placeholder="Idade"
            />
            <button>
                Cadastrar
            </button>
        </>
    );
}

export default PessoaForm;