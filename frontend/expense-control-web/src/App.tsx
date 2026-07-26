import { useEffect, useState } from "react";
import api from "./services/api";
import type { Pessoa } from "./types/Pessoa";
import type { Transacao } from "./types/Transacao";
import PessoaList from "./components/PessoaList";
import PessoaForm from "./components/PessoaForm";
import TransacaoForm from "./components/TransacaoForm";

function App() {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

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

    useEffect(() => {
        buscarPessoas();
        buscarTransacoes();
    }, []);

    return (
        <>
            <h1>Controle de Gastos</h1>

            <PessoaForm aoCadastrar={buscarPessoas} />

            <PessoaList pessoas={pessoas} />

            <TransacaoForm
                pessoas={pessoas}
                aoCadastrar={buscarPessoas}
            />
        </>
    );
}

export default App;