import { Bebe } from "./Bebe";
    export class BebePrematuro extends Bebe {
        private semanasGestacao: number;
    
        public constructor(_id: string, _nome: string, _peso: number, _altura: number, _semanasGestacao: number) {
            super(_id, _nome, _peso, _altura)
            this.semanasGestacao = _semanasGestacao;
        }
        public setSemanasGestacao(_semanasGestacao: number): void {
            this.semanasGestacao = _semanasGestacao;
        }
        public getSemanasGestacao(): number {
            return this.semanasGestacao;
        }
    }

