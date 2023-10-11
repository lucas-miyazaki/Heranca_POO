import { BebeNatimorto } from "./model/BebeNatimorto";
import { BebeNormal } from "./model/PessoaJuridica";
import { BebePrematuro } from "./model/PessoaFisica";
console.clear();
const bNm1 = new BebeNatimorto(`Jubilinho`, 2.5, 25, `falta de oxigenação`);

console.log(`Nome: `, bNm1.getNome());
console.log("Peso: " + bNm1.getPeso() + "kg");
console.log(`Altura: `, bNm1.getAltura() + "cm");
console.log("Causa da morte: " + bNm1.getCausa());

bNm1.setNome (`Jubilinha`);
bNm1.setPeso (1.5);
bNm1.setAltura (15);
bNm1.setCausa (`mau desenvolvimento`);

console.log(`Nome: `, bNm1.getNome());
console.log("Peso: " + bNm1.getPeso() + "kg");
console.log(`Altura: `, bNm1.getAltura() + "cm");
console.log("Causa da morte: " + bNm1.getCausa());

const bN1 = new BebeNormal(`Jubilinho Jr`, 4, 38, false);

console.log(`Nome: `, bN1.getNome());
console.log("Peso: " + bN1.getPeso() + "kg");
console.log(`Altura: `, bN1.getAltura() + "cm");
console.log("Vacinado: " + bN1.getVacinado());

bN1.setNome (`Jubilinha Jr`);
bN1.setPeso (2.5);
bN1.setAltura (20);
bN1.setVacinado (true);

console.log(`Nome: `, bN1.getNome());
console.log("Peso: " + bN1.getPeso() + "kg");
console.log(`Altura: `, bN1.getAltura() + "cm");
console.log("Vacinado: " + bN1.getVacinado());

const bP1 = new BebePrematuro(`Jubileu Jr`, 2.5, 17, 30);

console.log(`Nome: `, bP1.getNome());
console.log("Peso: " + bP1.getPeso() + "kg");
console.log(`Altura: `, bP1.getAltura() + "cm");
console.log("SemanasGestacao: " + bP1.getSemanasGestacao());

bP1.setNome (`Jubiléia Jr`);
bP1.setPeso (1.5);
bP1.setAltura (15);
bP1.setSemanasGestacao(25);

console.log(`Nome: `, bP1.getNome());
console.log("Peso: " + bP1.getPeso() + "kg");
console.log(`Altura: `, bP1.getAltura() + "cm");
console.log("SemanasGestacao: " + bP1.getSemanasGestacao());
