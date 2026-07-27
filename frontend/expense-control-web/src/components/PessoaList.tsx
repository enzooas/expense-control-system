import type { Pessoa } from "../types/Pessoa";
import api from "../services/api";

interface PessoaListProps {
    pessoas: Pessoa[];
    aoExcluir: () => void;
}

function PessoaList({ pessoas, aoExcluir }: PessoaListProps) {
    async function excluirPessoa(id: number) {
        try {
            await api.delete(`/Pessoa/${id}`);
            aoExcluir();
        } catch (erro) {
            console.error(erro);
        }
    }
    return (
        <>
            <h2>👤Pessoas</h2>
            {pessoas.map((pessoa) => (
                <div
                    key={pessoa.id}
                    className="card"
                >
                    <h3>{pessoa.nome}</h3>
                    <p>Idade: {pessoa.idade}</p>
                    <button className="excluir"
                        onClick={() => excluirPessoa(pessoa.id)}
                    >
                        Excluir
                    </button>
                </div>
            ))}
        </>
    );
}

export default PessoaList;