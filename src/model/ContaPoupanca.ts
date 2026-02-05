import { Colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{

    // Atributos específicos de Conta Popança
    private _aniversario: number;

    // Construtor com a chamada para a Super Classe
    constructor(
        numero: number, 
        agencia: number, 
        titular: string, 
        tipo: number, 
        saldo: number,
        aniversario: number){
        
        super(numero, agencia, titular, tipo, saldo);
        
        this._aniversario = aniversario;
    }


  // Métodods Get e Set específicos da Classe Conta Poupança

	public get aniversario(): number {
		return this._aniversario;
	}

 
	public set aniversario(value: number) {
		this._aniversario = value;
	}
    

    // Método visualizar sobrescrito (Polimorfismo)
    public visualizar(): void {
        super.visualizar();
        console.log(`Aniversário da conta:`, Colors.fg.cyan,`dia ${this._aniversario}`, Colors.reset);
    }
     

}
