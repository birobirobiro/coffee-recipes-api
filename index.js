const express = require("express");
const receitas = require("./receitas.json");

const app = express();
const PORT = process.env.PORT || 3000;

// Rota para obter todas as receitas
app.get("/", (req, res) => {
  const todasReceitas = [
    ...receitas.classic,
    ...receitas.special,
    ...receitas.gourmet,
  ];
  res.json(todasReceitas);
});

// Rota para obter todas as receitas Clássicas
app.get("/classic", (req, res) => {
  res.json(receitas.classic);
});

// Rota para obter todas as receitas Especiais
app.get("/special", (req, res) => {
  res.json(receitas.special);
});

// Rota para obter todas as receitas Gourmet
app.get("/gourmet", (req, res) => {
  res.json(receitas.gourmet);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
