import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
    ResponsiveContainer
} from "recharts";

interface Props {
    receita: number;
    despesa: number;
}

function GraficoResumo({
    receita,
    despesa
}: Props) {

    const dados = [
        {
            name: "Receitas",
            value: receita
        },
        {
            name: "Despesas",
            value: despesa
        }
    ];

    const cores = [
        "#22c55e",
        "#ef4444"
    ];

    if (receita === 0 && despesa === 0) {
        return (
            <>
                <h2>📊Distribuição Financeira</h2>
                <p>Nenhum dado para exibir.</p>
            </>
        );
    }

    return (
        <>
            <h2>📊Distribuição Financeira</h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <PieChart>
                    <Pie
                        data={dados}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label
                    >
                        {
                            dados.map((_, index) => (

                                <Cell
                                    key={index}
                                    fill={cores[index]}
                                />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default GraficoResumo;