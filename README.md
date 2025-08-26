# 🌟 FluxoMágico 🪄

Transforme suas decisões em JavaScript em **magia pura**! ✨  
Uma DSL divertida e poderosa para `if/else` e `switch/case`.


## 🚀 Instalação

```bash
npm install fluxomagico
```

ou 

```bash
const { quando, escolha } = require("fluxomagico");
```

# 💡 Funcionalidades Mágicas

<div style="background-color:#f0f8ff; padding:10px; border-radius:8px;"> <ul> <li>🟢 <b>quando / entao / senaoSe / senao</b> → estilo if/else</li> <li>🔵 <b>escolha / caso / padrao</b> → estilo switch/case</li> <li>⚡ Suporte a <b>valores únicos, múltiplos valores, ranges e funções</b></li> <li>🌈 Fluxos mais legíveis, intuitivos e divertidos</li> </ul> </div>

# ✨ Exemplos Interativos

### 1️⃣ If / Else

```bash
let nota = 85;

quando(nota >= 90)
  .entao(() => console.log("🎉 Tirou A!"))
  .senaoSe(nota >= 70)
  .entao(() => console.log("👍 Tirou B"))
  .senaoSe(nota >= 50)
  .entao(() => console.log("😅 Tirou C"))
  .senao(() => console.log("❌ Reprovado"))
  .run();

```

### 2️⃣ Switch / Case

```bash
let cor = "azul";

escolha(cor)
  .caso("vermelho", () => console.log("❤️ Cor do amor"))
  .caso("azul", () => console.log("💙 Cor da calma"))
  .caso("verde", () => console.log("💚 Cor da esperança"))
  .padrao(() => console.log("🤔 Cor desconhecida"))
  .run();

```

### 3️⃣ Ranges & Múltiplos Valores

```bash

let idade = 25;

escolha(idade)
  .caso([0, 12], () => console.log("👶 Criança"))
  .caso([13, 17], () => console.log("🧒 Adolescente"))
  .caso([18, 64], () => console.log("🧑 Adulto"))
  .caso(x => x >= 65, () => console.log("👴 Idoso"))
  .padrao(() => console.log("🤔 Idade desconhecida"))
  .run();

```
### 4️⃣ Funções como Condição

```bash

let numero = 7;

escolha(numero)
  .caso(x => x % 2 === 0, () => console.log("🔢 É par"))
  .caso(x => x % 2 !== 0, () => console.log("🌀 É ímpar"))
  .run();

```

## 💎 Por que usar FluxoMágico?

<div style="background-color:#e6ffe6; padding:10px; border-radius:8px;"> <ul> <li>✨ Código mais limpo e legível</li> <li>🧙‍♂️ Encadeamento natural de condições</li> <li>🌟 Suporte a qualquer tipo de condição</li> <li>💻 Pode ser usado como <b>if/else</b> ou <b>switch/case</b>, tudo com a mesma DSL</li> </ul> </div>

## 🧙‍♂️ Contribuindo

Quer adicionar funcionalidades mágicas? ✨
Abra um PR ou abra uma issue!

## Essa versão já é **interativa e visual**, com:  
- GIFs demonstrando cada tipo de uso  
- Seções coloridas e destacadas  
- Emojis e badges  
- Layout limpo para GitHub  

## 📜 Licença

MIT © 2025
