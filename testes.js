// testes.js
const { quando, escolha } = require("./decision");

console.log("===== 🚀 Testes FluxoMágico =====");

// 1️⃣ Teste if/else com nota
console.log("\n🎓 Teste de notas:");
let nota = 85;

quando(nota >= 90)
  .entao(() => console.log("🎉 Tirou A!"))
  .senaoSe(nota >= 70)
  .entao(() => console.log("👍 Tirou B"))
  .senaoSe(nota >= 50)
  .entao(() => console.log("😅 Tirou C"))
  .senao(() => console.log("❌ Reprovado"))
  .run();

// 2️⃣ Teste switch/case com cores
console.log("\n🎨 Teste de cores:");
let cor = "azul";

escolha(cor)
  .caso("vermelho", () => console.log("❤️ Cor do amor"))
  .caso("azul", () => console.log("💙 Cor da calma"))
  .caso("verde", () => console.log("💚 Cor da esperança"))
  .padrao(() => console.log("🤔 Cor desconhecida"))
  .run();

// 3️⃣ Teste ranges com idades
console.log("\n👶 Teste de idades:");
let idade = 25;

escolha(idade)
  .caso([0, 12], () => console.log("👶 Criança"))
  .caso([13, 17], () => console.log("🧒 Adolescente"))
  .caso([18, 64], () => console.log("🧑 Adulto"))
  .caso(x => x >= 65, () => console.log("👴 Idoso"))
  .padrao(() => console.log("🤔 Idade desconhecida"))
  .run();

// 4️⃣ Teste múltiplos valores
console.log("\n📅 Teste de dias da semana:");
let dia = "domingo";

escolha(dia)
  .caso(["sábado", "domingo"], () => console.log("🎉 Final de semana!"))
  .caso("segunda", () => console.log("😴 Começo da semana..."))
  .padrao(() => console.log("📆 Dia comum"))
  .run();

// 5️⃣ Teste com função condicional
console.log("\n🔢 Teste de número par/ímpar:");
let numero = 7;

escolha(numero)
  .caso(x => x % 2 === 0, () => console.log("🔢 É par"))
  .caso(x => x % 2 !== 0, () => console.log("🌀 É ímpar"))
  .run();

console.log("\n===== ✅ Fim dos testes =====");
