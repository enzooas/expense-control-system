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


function App() {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);
    const [relatorios, setRelatorios] = useState<RelatorioPessoa[]>([]);

    async function buscarPessoas() {
        try {
            const resposta = await api.get("/Pessoa");
            setPessoas(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    async function buscarTransacoes() {
        try {
            const resposta = await api.get("/Transacao");

            setTransacoes(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    async function buscarRelatorio() {
        try {
            const resposta = await api.get("/Relatorio");

            setRelatorios(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    async function atualizarDados() {
        await buscarTransacoes();
        await buscarRelatorio();
    }

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
        </div>
    );
}

export default App;