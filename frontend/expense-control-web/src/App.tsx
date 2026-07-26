import { useEffect, useState } from "react";
import api from "./services/api";
import type { Pessoa } from "./types/Pessoa";
import PessoaList from "./components/PessoaList";
import PessoaForm from "./components/PessoaForm";

function App() {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    async function buscarPessoas() {
        try {
            const resposta = await api.get("/Pessoa");
            setPessoas(resposta.data);
        } catch (erro) {
            console.error(erro);
        }
    }

    useEffect(() => {
       buscarPessoas();
    }, []);

    return (
    <>
        <h1>Controle de Gastos</h1>

        <PessoaForm aoCadastrar={buscarPessoas} />

        <PessoaList pessoas={pessoas} />
    </>
    );
}

export default App;