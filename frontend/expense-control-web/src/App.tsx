import "./App.css";
import { useEffect, useState } from "react";
import api from "./services/api";
import type { Pessoa } from "./types/Pessoa";
import type { Transacao } from "./types/Transacao";
import type { RelatorioPessoa } from "./types/RelatorioPessoa";
import PessoaList from "./components/PessoaList";
import PessoaForm from "./components/PessoaForm";
import TransacaoForm from "./components/TransacaoForm";
import TransacaoList from "./components/TransacaoList";
import Relatorio from "./components/Relatorio";
import GraficoResumo from "./components/GraficoResumo";


function App() {
    // Estados principais da aplicação.
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);
    const [relatorios, setRelatorios] = useState<RelatorioPessoa[]>([]);

    // Busca todas as pessoas cadastradas.
    async function buscarPessoas() {
        try {
            const resposta = await api.get("/Pessoa");
            setPessoas(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    // Busca todas as transações.
    async function buscarTransacoes() {
        try {
            const resposta = await api.get("/Transacao");

            setTransacoes(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    // Busca os dados do relatório.
    async function buscarRelatorio() {
        try {
            const resposta = await api.get("/Relatorio");

            setRelatorios(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    // Atualiza apenas transações e relatório após cadastrar uma transação.
    async function atualizarDados() {
        await buscarTransacoes();
        await buscarRelatorio();
    }

    // Atualiza todos os dados após cadastrar ou excluir pessoas.
    async function atualizarTudo() {
        await buscarPessoas();
        await buscarTransacoes();
        await buscarRelatorio();
    }

    useEffect(() => {
        buscarPessoas();
        buscarTransacoes();
        buscarRelatorio();
    }, []);

    return (
        <div className="container">
            <h1>Controle de Gastos</h1>

            <section>
                <PessoaForm
                    aoCadastrar={atualizarTudo}
                />
            </section>
            <section>
                <PessoaList
                    pessoas={pessoas}
                    aoExcluir={atualizarTudo}
                />
            </section>
            <section>
                <TransacaoForm
                    pessoas={pessoas}
                    aoCadastrar={atualizarDados}
                />
            </section>
            <section>
                <TransacaoList
                    transacoes={transacoes}
                    pessoas={pessoas}
                />
            </section>
            <section>
                <Relatorio
                    relatorios={relatorios}
                />
            </section>
            <section>
                <GraficoResumo
                    receita={
                        relatorios.reduce(
                            (total, r) => total + r.receitaTotal,
                            0
                        )
                    }
                    despesa={
                        relatorios.reduce(
                            (total, r) => total + r.despesaTotal,
                            0
                        )
                    }
                />
            </section>
            <footer>
                Desenvolvido por Enzo Amaral
                <br />
                React • TypeScript • ASP.NET Core • SQLite
            </footer>
        </div>
    );
}

export default App;