# Receitas API

Esta é uma API simples para obter receitas de diferentes categorias. Atualmente, a API oferece receitas nas categorias Clássico, Especial e Gourmet.

## Rotas Disponíveis

- **GET /:** Retorna todas as receitas disponíveis, combinando as receitas das categorias Clássico, Especial e Gourmet.

- **GET /classic:** Retorna todas as receitas da categoria Clássico.

- **GET /special:** Retorna todas as receitas da categoria Especial.

- **GET /gourmet:** Retorna todas as receitas da categoria Gourmet.

## Exemplo de Uso

### Obtendo todas as receitas

```http
GET /
```

### Obtendo todas as receitas Clássicas

```http
GET /classic
```

### Obtendo todas as receitas Especiais

```http
GET /special
```

### Obtendo todas as receitas Gourmet

```http
GET /gourmet
```

## Como executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000` por padrão.

---

Feito com ♥ by [birobirobiro](https://birobirobiro.dev)
