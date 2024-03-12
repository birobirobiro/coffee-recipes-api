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

// Rota para buscar receita por nome
app.get("/receita/:nome", (req, res) => {
  const nome = req.params.nome.toLowerCase();
  let receitaEncontrada = null;

  // Procura a receita em cada categoria
  Object.values(receitas).forEach(categoria => {
    categoria.forEach(receita => {
      if (receita.nome.toLowerCase() === nome) {
        receitaEncontrada = receita;
      }
    });
  });

  if (receitaEncontrada) {
    res.json(receitaEncontrada);
  } else {
    res.status(404).json({ mensagem: "Receita não encontrada" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
