using System.ComponentModel.DataAnnotations;

namespace ControleGastos.API.Models;

public class Pessoa
{
    public int Id { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Nome { get; set; } = string.Empty;

    [Required(ErrorMessage = "A idade é obrigatória")]
    public int Idade { get; set; }
    
    public List<Transacao> Transacoes { get; set; } = new();
}
