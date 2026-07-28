import type { Pessoa } from "../types/Pessoa";
import api from "../services/api";

interface PessoaListProps {
    pessoas: Pessoa[];
    aoExcluir: () => void;
}

function PessoaList({ pessoas, aoExcluir }: PessoaListProps) {
    async function excluirPessoa(id: number) {

        const confirmar = window.confirm(
            "Deseja realmente excluir esta pessoa?\nTodas as transações dela também serão removidas."
        );
        if (!confirmar) {
            return;
        }
        await api.delete(`/Pessoa/${id}`);
        aoExcluir();
    }

    if (pessoas.length === 0) {
        return (
            <>
                <h2>👥 Pessoas</h2>
                <p>Nenhuma pessoa cadastrada.</p>
            </>
        );
    }
    // Percorre todas as pessoas cadastradas.
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