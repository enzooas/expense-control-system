using ControleGastos.API.Data;
using ControleGastos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoaController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Pessoa>>> ListarPessoas()
    {
        var pessoas = await _context.Pessoas.ToListAsync();

        return Ok(pessoas);
    }

    [HttpPost]
    public async Task<ActionResult<Pessoa>> CriarPessoa(Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);

        await _context.SaveChangesAsync();

        return Ok(pessoa);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletarPessoa(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);

        if (pessoa == null)
        {
            return NotFound();
        }

        _context.Pessoas.Remove(pessoa);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}