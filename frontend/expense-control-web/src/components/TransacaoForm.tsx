import { useState } from "react";
import api from "../services/api";
import type { Pessoa } from "../types/Pessoa";

interface TransacaoFormProps {
    pessoas: Pessoa[];
    aoCadastrar: () => void;
}

function TransacaoForm({
    pessoas,
    aoCadastrar,
}: TransacaoFormProps) {

    const [descricao, setDescricao] = useState("");

    const [valor, setValor] = useState<number | "">("");

    const [tipo, setTipo] = useState(0);

    const [pessoaId, setPessoaId] = useState(0);

    async function cadastrarTransacao(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            if (descricao === "" && valor === "") {
                alert("Informe a descrição e o valor.");
                return;
            } else if (descricao === "") {
                alert("Informe a descrição.");
                return;
            } else if (valor === "") {
                alert("Informe o valor.");
                return;
            }
            await api.post("/Transacao", {
                descricao,
                valor,
                tipo,
                pessoaId
            });

            aoCadastrar();

            setDescricao("");
            setValor("");
            setTipo(0);
            setPessoaId(0);
        } catch (erro: any) {
            alert(
                erro.response?.data ||
                "Erro ao cadastrar transação."
            );
        }
    }

    return (
        <>
            <h2>➕💰Cadastrar Transação</h2>
            <form onSubmit={cadastrarTransacao}>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={valor}
                    onChange={(e) =>
                        setValor(
                            e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                        )
                    }
                />
                <select
                    value={tipo}
                    onChange={(e) => setTipo(Number(e.target.value))}
                >
                    <option value={0}>
                        Receita
                    </option>
                    <option value={1}>
                        Despesa
                    </option>
                </select>
                <select
                    value={pessoaId}
                    onChange={(e) => setPessoaId(Number(e.target.value))}
                >
                    {pessoas.map((pessoa) => (
                        <option
                            key={pessoa.id}
                            value={pessoa.id}
                        >
                            {pessoa.nome}
                        </option>
                    ))}
                </select>
                <button type="submit">
                    Cadastrar Transação
                </button>
            </form>
        </>
    );
}

export default TransacaoForm;