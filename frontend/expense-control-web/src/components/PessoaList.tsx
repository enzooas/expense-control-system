import type { Pessoa } from "../types/Pessoa";

interface PessoaListProps {
    pessoas: Pessoa[];
}

function PessoaList({ pessoas }: PessoaListProps) {
    return (
        <>
            <h2>Pessoas</h2>
            {pessoas.map((pessoa) => (
                <div key={pessoa.id}>
                    <h3>{pessoa.nome}</h3>
                    <p>Idade: {pessoa.idade}</p>
                </div>
            ))}
        </>
    );
}

export default PessoaList;