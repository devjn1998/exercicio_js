function Loja(camisas, bermudas, sapatos, meias, marcas, valorBruto) {
    this.camisas = camisas;
    this.bermudas = bermudas;
    this.sapatos = sapatos;
    this.meias = meias;
    let _marcas = marcas;
    this.valorBruto = valorBruto;

    this.getMarcas = function() {
        return _marcas;
    }

    this.setMarcas = function(novaMarca) {
        _marcas = novaMarca;
    }
}

function ValorDasMarcas(camisas, bermudas, sapatos, meias, marcas, valorBruto) {
    Loja.call(this, camisas, bermudas, sapatos, meias, marcas, valorBruto);

    this.valorDasMarcas = function(indice, novoValor) {
        let valorDaMarca = this.getMarcas();
        if (indice >= 0 && indice < valorDaMarca.length) {
            valorDaMarca[indice] = novoValor;
        }
    }
}

function ValorDoEstoque(camisas, bermudas, sapatos, meias, marcas, valorBruto) {
    Loja.call(this, camisas, bermudas, sapatos, meias, marcas, valorBruto);

    this.getvalorDoEstoque = function() {
        const totalCamisas = this.camisas * this.getMarcas()[0];
        const totalBermudas = this.bermudas * this.getMarcas()[1];
        const totalSapatos = this.sapatos * this.getMarcas()[2];
        const totalMeias = this.meias * this.getMarcas()[3];
        const resultadoDoEstoque = totalCamisas + totalBermudas + totalSapatos + totalMeias;
        return resultadoDoEstoque;
    }

    this.setValorDoEstoque = function(novoValor) {
        this.valorBruto = novoValor;
    }
}

const loja1 = new Loja(100, 100, 20, 20, [20, 40, 60, 80], 1000);
const loja2 = new ValorDasMarcas(100, 100, 20, 20, [20, 40, 60, 80], 1000);
const loja3 = new ValorDoEstoque(100, 100, 20, 20, [20, 40, 60, 80], 1000);

console.log(loja1.getMarcas());
console.log(loja2.getMarcas());
console.log(loja3.getMarcas());
console.log("Valor do estoque:", loja3.getvalorDoEstoque());
