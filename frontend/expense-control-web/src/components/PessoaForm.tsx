import { useState } from "react";
import api from "../services/api";

interface PessoaFormProps {
    aoCadastrar: () => void;
}

function PessoaForm({ aoCadastrar }: PessoaFormProps) {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState<number | "">("");

    async function cadastrarPessoa(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            if (nome === "" && idade === "") {
                alert("Informe o nome e a idade.");
                return;
            } else if (nome === "") {
                alert("Informe o nome.");
                return;
            } else if (idade === "") {
                alert("Informe a idade.");
                return;
            }
            await api.post("/Pessoa", {
                nome,
                idade
            });

            aoCadastrar();

            setNome("");
            setIdade("");
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <>
            <h2>➕👤Cadastrar Pessoa</h2>
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
                    onChange={(e) =>
                        setIdade(
                            e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                        )
                    }
                />
                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </>
    );
}

export default PessoaForm;