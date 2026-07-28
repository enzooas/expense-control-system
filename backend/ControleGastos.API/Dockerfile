# Imagem usada para compilar o projeto
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app

# Copia o arquivo do projeto
COPY ControleGastos.API.csproj .

# Restaura dependências
RUN dotnet restore

# Copia todo o restante do código
COPY . .

# Compila o projeto
RUN dotnet publish -c Release -o /app/publish


# Imagem usada para executar
FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "ControleGastos.API.dll"]