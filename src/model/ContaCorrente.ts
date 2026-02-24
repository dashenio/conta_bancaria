import { Colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    // Atributos específicos de Conta Corrente
    private _limite: number;

    // Construtor com a chamada para a Super Classe
    constructor(
        numero: number, 
        agencia: number, 
        titular: string, 
        tipo: number, 
        saldo: number,
        limite: number,){
        
        super(numero, agencia, titular, tipo, saldo);
        
        this._limite = limite;
    }


  // Métodods Get e Set específicos da Classe Conta Corrente
	public get limite(): number {
		return this._limite;
	}

   
	public set limite(value: number) {
		this._limite = value;
	}

    // Método visualizar sobrescrito (Polimorfismo)
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: R$ ${this._limite.toFixed(2)}`);
    }

    // Método sacar sobrescrito
    public sacar(valor: number): boolean{
    
            if(valor > this.saldo + this._limite){
                console.log(Colors.fg.red, 'Saldo Insuficiente!', Colors.reset);
                return false
            }
            this.saldo -= valor;
            return true;
        }
}
