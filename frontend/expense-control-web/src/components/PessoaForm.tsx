import { useState } from "react";
import api from "../services/api";

interface PessoaFormProps {
    aoCadastrar: () => void;
}

function PessoaForm({ aoCadastrar }: PessoaFormProps) {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);

    async function cadastrarPessoa(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            await api.post("/Pessoa", {
                nome,
                idade
            });

            aoCadastrar();

            setNome("");
            setIdade(0);
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <>
            <h2>Cadastrar Pessoa</h2>
            <form onSubmit={cadastrarPessoa}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(Number(e.target.value))}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </>
    );
}

export default PessoaForm;