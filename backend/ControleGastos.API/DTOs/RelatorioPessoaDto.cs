namespace ControleGastos.API.DTOs;

public class RelatorioPessoaDto
{
    public int PessoaId { get; set; }
    public string NomePessoa { get; set; } = string.Empty;
    public decimal ReceitaTotal { get; set; }
    public decimal DespesaTotal { get; set; }
    public decimal Saldo { get; set; }
}
