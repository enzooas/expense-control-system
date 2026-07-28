using ControleGastos.API.Enums;
using System.ComponentModel.DataAnnotations;

namespace ControleGastos.API.Models;

public class Transacao
{
    public int Id { get; set; }

    [Required(ErrorMessage = "A descrição é obrigatória")]
    public string Descricao { get; set; } = string.Empty;

    [Required(ErrorMessage = "O valor é obrigatório")]
    public decimal Valor { get; set; }
    public TipoTransacao Tipo { get; set; }
    public int PessoaId { get; set; }
  }
