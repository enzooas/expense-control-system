using ControleGastos.API.Data;
using ControleGastos.API.DTOs;
using ControleGastos.API.Enums;
using ControleGastos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RelatorioController : ControllerBase
{
    private readonly AppDbContext _context;

    public RelatorioController(AppDbContext context)
    {
        _context = context;
    }

    // Calcula receitas, despesas e saldo de cada pessoa.
    [HttpGet]
    public async Task<ActionResult<List<RelatorioPessoaDto>>> GerarRelatorio()
    {
        var pessoas = await _context.Pessoas.ToListAsync();

        var relatorio = pessoas.Select(pessoa =>
        {
            var receitaTotal = _context.Transacoes
                .Where(t => t.PessoaId == pessoa.Id)
                .Where(t => t.Tipo == TipoTransacao.Receita)
                .Sum(t => t.Valor);

            var despesaTotal = _context.Transacoes
                .Where(t => t.PessoaId == pessoa.Id)
                .Where(t => t.Tipo == TipoTransacao.Despesa)
                .Sum(t => t.Valor);

            return new RelatorioPessoaDto
            {
                PessoaId = pessoa.Id,
                NomePessoa = pessoa.Nome,
                ReceitaTotal = receitaTotal,
                DespesaTotal = despesaTotal,
                Saldo = receitaTotal - despesaTotal
            };
        }).ToList();

        return Ok(relatorio);
    }
}