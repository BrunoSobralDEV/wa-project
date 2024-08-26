# WA Project CLI

Uma CLI poderosa desenvolvida com [Gluegun](https://infinitered.github.io/gluegun/#/) para análise de frases com base em uma hierarquia de categorias.

## Visão Geral

Esta ferramenta CLI permite que você analise uma frase fornecida em relação a uma hierarquia de categorias armazenada em um arquivo JSON. O comando principal `analyze` permite especificar a profundidade na hierarquia para a análise, retornando a contagem de palavras na frase que correspondem às categorias no nível especificado.

## Funcionalidades

- Análise de frases com base em uma hierarquia categórica.
- Suporte a diferentes profundidades de análise na hierarquia.
- Modo verbose para exibição de informações detalhadas sobre o tempo de execução.

## Requisitos

- Node.js (v12 ou superior)
- npm ou yarn para gerenciar as dependências

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/BrunoSobralDEV/wa-project.git
cd wa-project/wacli
npm install
```
# Uso
## Comando: analyze
- Analisa uma frase em relação à hierarquia de categorias.
```bash
wacli analyze --depth 2 "Eu vi gorilas e papagaios" --verbose
```
- Output:
```bash
{
  "Mamíferos": 1,
  "Aves": 1
}
┌───────────────────────────────────────┬─────────┐
│ Tempo de carregamento dos parâmetros  │ 10ms    │
│ Tempo de verificação da frase         │ 5ms     │
└───────────────────────────────────────┴─────────┘
```

# Estrutura do Projeto
- `src/commands/:` Contém os comandos da CLI. Atualmente, existe o comando analyze.
- `src/utils/:` Contém utilitários como hierarchyLoader e phraseAnalyzer.
- `docs/commands.md` Documentação detalhada dos comandos disponíveis na CLI.

# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para reportar bugs ou sugerir melhorias.

# Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.