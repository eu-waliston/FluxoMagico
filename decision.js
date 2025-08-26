// decision.js
class Decision {
  constructor(condition) {
    this.branches = [];
    this.defaultBranch = null;
    this.branches.push({ condition, callback: null });
  }

  entao(callback) {
    this.branches[this.branches.length - 1].callback = callback;
    return this;
  }

  senaoSe(condition) {
    this.branches.push({ condition, callback: null });
    return this;
  }

  senao(callback) {
    this.defaultBranch = callback;
    return this;
  }

  run() {
    for (const branch of this.branches) {
      if (branch.condition) {
        if (branch.callback) branch.callback();
        return;
      }
    }
    if (this.defaultBranch) this.defaultBranch();
  }
}

function quando(condition) {
  return new Decision(condition);
}

// -------------------------------
// Switch/Case com ranges, múltiplos valores e funções
// -------------------------------
class Escolha {
  constructor(valor) {
    this.valor = valor;
    this.casos = [];
    this.defaultCase = null;
  }

  caso(match, callback) {
    this.casos.push({ match, callback });
    return this;
  }

  padrao(callback) {
    this.defaultCase = callback;
    return this;
  }

  run() {
    for (const c of this.casos) {
      const match = c.match;

      // Função condicional
      if (typeof match === "function") {
        if (match(this.valor)) {
          c.callback();
          return;
        }
      }
      // Range [min, max]
      else if (Array.isArray(match) && match.length === 2 && typeof match[0] === "number" && typeof match[1] === "number") {
        if (this.valor >= match[0] && this.valor <= match[1]) {
          c.callback();
          return;
        }
      }
      // Lista de valores ["a", "b", "c"]
      else if (Array.isArray(match)) {
        if (match.includes(this.valor)) {
          c.callback();
          return;
        }
      }
      // Valor único
      else if (match === this.valor) {
        c.callback();
        return;
      }
    }

    if (this.defaultCase) this.defaultCase();
  }
}

function escolha(valor) {
  return new Escolha(valor);
}

module.exports = { quando, escolha };
