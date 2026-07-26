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

    const [valor, setValor] = useState(0);

    const [tipo, setTipo] = useState(0);

    const [pessoaId, setPessoaId] = useState(0);

    async function cadastrarTransacao(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            await api.post("/Transacao", {
                descricao,
                valor,
                tipo,
                pessoaId
            });

            aoCadastrar();

            setDescricao("");
            setValor(0);
            setTipo(0);
            setPessoaId(0);
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <>
            <h2>Cadastrar Transação</h2>
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
                    onChange={(e) => setValor(Number(e.target.value))}
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