import type { RelatorioPessoa } from "../types/RelatorioPessoa";

interface RelatorioProps {
    relatorios: RelatorioPessoa[];
}

function Relatorio({ relatorios }: RelatorioProps) {
    const receitaTotal = relatorios.reduce(
        (total, relatorio) => total + relatorio.receitaTotal,
        0
    );

    const despesaTotal = relatorios.reduce(
        (total, relatorio) => total + relatorio.despesaTotal,
        0
    );

    const saldoTotal = relatorios.reduce(
        (total, relatorio) => total + relatorio.saldo,
        0
    );
    return (
        <>
            <h2>📊Relatório</h2>
            {relatorios.map((relatorio) => (
                <div
                    key={relatorio.pessoaId}
                    className="card"
                >
                    <h3>{relatorio.nomePessoa}</h3>
                    <p style={{ color: "green" }}>
                        Receitas: {
                            relatorio.receitaTotal.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </p>
                    <p style={{ color: "red" }}>
                        Despesas: {
                            relatorio.despesaTotal.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </p>
                    <p>
                        <strong
                            style={{
                                color:
                                    relatorio.saldo >= 0
                                        ? "green"
                                        : "red"
                            }}
                        >
                            <hr />
                            Saldo: {
                                relatorio.saldo.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })
                            }
                        </strong>
                    </p>
                </div>
            ))}
            <div className="card">
                <h2>🧮Total Geral</h2>
                <p style={{ color: "green" }}>
                    Receitas: {
                        receitaTotal.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                </p>
                <p style={{ color: "red" }}>
                    Despesas: {
                        despesaTotal.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                </p>
                <p>
                    <strong
                        style={{
                            color:
                                saldoTotal >= 0
                                    ? "green"
                                    : "red"
                        }}
                    >
                        <hr />
                        Saldo: {
                            saldoTotal.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    </strong>
                </p>
            </div>
        </>
    );
}

export default Relatorio;