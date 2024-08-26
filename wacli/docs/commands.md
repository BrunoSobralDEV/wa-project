# Comandos da CLI

## Comando: `analyze`

### Descrição:
O comando `analyze` permite analisar uma frase em relação a uma hierarquia de categorias definidas em um arquivo JSON. Ele retorna a contagem de ocorrências de palavras na frase de acordo com as categorias em um determinado nível de profundidade.

### Uso:
```bash
wacli analyze --depth <número> "<frase>" [--verbose]
```

### Parâmetros:
- `--depth:` (Obrigatório) Especifica a profundidade da hierarquia a ser analisada. Deve ser um número inteiro.
- `<frase>:` (Obrigatório) A frase que será analisada. Deve ser passada como um argumento posicional.
- `--verbose:` (Opcional) Exibe informações adicionais sobre o tempo de execução do comando.

### Exemplos de Uso:
- Analisando uma frase com profundidade 2:
```bash
wacli analyze --depth 2 "Eu vi gorilas e papagaios"
```
- Output:
```bash
{
  "Mamíferos": 1,
  "Aves": 1
}
```
-Analisando uma frase com profundidade 3:
```bash
wacli analyze --depth 3 "Eu vi gorilas e papagaios"

```
- Output:
```bash
{
  "Primatas": 1,
  "Pássaros": 1
}

```
- Exibindo detalhes adicionais com `--verbose`:
```bash
wacli analyze --depth 2 "Eu vi gorilas e papagaios" --verbose
```

- Output:
```bash
{
  "Mamíferos": 1,
  "Aves": 1
}
```
- Verbose:
```bash
┌───────────────────────────────────────┬─────────┐
│ Tempo de carregamento dos parâmetros   │ 10ms    │
│ Tempo de verificação da frase          │ 5ms     │
└───────────────────────────────────────┴─────────┘
```

# Observações
- O comando analyze depende de um arquivo JSON de hierarquia localizado em dicts/hierarchy.json.
- Certifique-se de que o arquivo de hierarquia esteja bem formatado e acessível para que o comando funcione corretamente.

## Alias:
-O comando `analyze` também pode ser invocado usando o alias `a`.
## Erros Comuns:
- Falta de Frase: Se a frase não for fornecida, o comando exibirá a mensagem de erro: `Por favor, forneça uma frase.`
- Falta de Profundidade: Se a profundidade não for fornecida ou for inválida, o comando exibirá a mensagem de erro: `Por favor, forneça a profundidade.`