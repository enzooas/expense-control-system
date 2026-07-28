import { useState } from "react";
import api from "../services/api";

interface PessoaFormProps {
    aoCadastrar: () => void;
}

function PessoaForm({ aoCadastrar }: PessoaFormProps) {
// Estados do formulário.
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState<number | "">("");

    async function cadastrarPessoa(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            if (nome === "") {
                alert("Informe o nome.");
            }

            if (idade === "") {
                alert("Informe a idade.");
                return;
            }
            // Envia a nova pessoa para a API.
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