import type { Pessoa } from "../types/Pessoa";
import type { Transacao } from "../types/Transacao";
import { TipoTransacao } from "../enums/TipoTransacao";

interface TransacaoListProps {
    transacoes: Transacao[];
    pessoas: Pessoa[];
}

function TransacaoList({ transacoes, pessoas }: TransacaoListProps) {
    if (transacoes.length === 0) {
        return (
            <>
                <h2>💰Transações</h2>
                <p>Nenhuma transação cadastrada.</p>
            </>
        );
    }
    return (
        <>
            <h2>💰Transações</h2>
            {transacoes.map((transacao) => {
                const pessoa = pessoas.find(
                    p => p.id === transacao.pessoaId
                );
                return (
                    <div
                        key={transacao.id} className="card"
                    >
                        <h3>{transacao.descricao}</h3>
                        <p>
                            Valor: {
                                transacao.valor.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })
                            }
                        </p>
                        <p>
                            Tipo: {
                                transacao.tipo === TipoTransacao.Receita
                                    ? "Receita"
                                    : "Despesa"
                            }
                        </p>
                        <p>
                            
                            Pessoa: {pessoa?.nome}
                        </p>
                    </div>
                );
            })}
        </>
    );
}

export default TransacaoList;