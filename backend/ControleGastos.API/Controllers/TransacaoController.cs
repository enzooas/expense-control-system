using ControleGastos.API.Data;
using ControleGastos.API.Enums;
using ControleGastos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly AppDbContext _context;

    public TransacaoController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Transacao>>> ListarTransacoes()
    {
        var transacoes = await _context.Transacoes.ToListAsync();

        return Ok(transacoes);
    }

    [HttpPost]
    public async Task<ActionResult<Transacao>> CriarTransacao(Transacao transacao)
    {
        var pessoa = await _context.Pessoas.FindAsync(transacao.PessoaId);

        if (pessoa == null)
        {
            return BadRequest("Pessoa não encontrada.");
        }

        if (pessoa.Idade < 18 &&
            transacao.Tipo == TipoTransacao.Receita)
        {
            return BadRequest("Menores de idade só podem cadastrar despesas.");
        }

        _context.Transacoes.Add(transacao);

        await _context.SaveChangesAsync();

        return Ok(transacao);
    }
}