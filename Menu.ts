import { Input } from './src/util/Input';
import { Colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {
    let opcao: number;

    // // Instanciar Objetos da Classe Conta
    // const c1 = new Conta(1, 1234,'Sofia', 1, 100000);
    // const c2 = new Conta(2, 5678, 'Marcelo', 2, 1000);
   
    // // Testes do Médodo Sacar
    // c1.visualizar();
    // console.log('Sacar R$ 100,00: ', c1.sacar(100.00));
    // console.log('Saldo R$:', c1.saldo.toFixed(2));
    // console.log('Sacar R$ 200.000,00: ', c1.sacar(200000.00));
    // console.log('Sacar R$ 0,00: ', c1.sacar(0.00));
    // console.log('Saldo R$:', c1.saldo.toFixed(2));
    
    // // Testes do Método Depositar
    // c2.visualizar();
    // console.log('Depositar: R$ 27,00');
    // c2.depositar(27.00);
    // console.log('Saldo: R$', c2.saldo.toFixed(2));
    // console.log('Depositar R$ -100,00: ');
    // c2.depositar(-100.00);
    // console.log('Depositar R$ 0,00:');
    // c2.depositar(0.00);
    // console.log('Saldo R$:', c2.saldo.toFixed(2));

    // Testes do Método Sacar - Conta Corrente

    const cc1 = new ContaCorrente(3, 6543, "Bianca", 1, 10000, 2000);
    cc1.visualizar();
    console.log('Sacar R$ 1000,00: ', cc1.sacar(1000.00));
    console.log('Saldo R$:', cc1.saldo.toFixed(2));
    console.log('Sacar R$ 11000,00: ', cc1.sacar(11000.00));
    cc1.visualizar();
    console.log();
   
    // Testes do Método Depositar - Conta Corrente

    cc1.visualizar();
    console.log('Depositar: R$ 1000,00');
    cc1.depositar(1000);
    console.log('Saldo: R$', cc1.saldo.toFixed(2));
    console.log('Depositar R$ 500,00: ');
    cc1.depositar(500);
    console.log('Depositar R$ 0,00:');
    cc1.depositar(0.00);
    console.log('Saldo R$:', cc1.saldo.toFixed(2))
    cc1.visualizar();
    console.log();

    // Testes do Método Sacar - Conta Poupança

    const cp1 = new ContaPoupanca(4, 8562, "André", 2, 10000, 19);
    cp1.visualizar();
    console.log('Sacar R$ 1000,00: ', cp1.sacar(1000.00));
    console.log('Saldo R$:', cp1.saldo.toFixed(2));
    console.log('Sacar R$ 3500,00: ', cp1.sacar(3500.00));
    console.log();

    // Testes do Método Depositar - Conta Poupança

    cp1.visualizar();
    console.log('Depositar: R$ 475,00');
    cp1.depositar(475);
    console.log('Saldo: R$', cp1.saldo.toFixed(2));
    console.log('Depositar R$ 500,00: ');
    cp1.depositar(500);
    console.log('Depositar R$ 20,00:');
    cp1.depositar(20);
    console.log('Saldo R$:', cp1.saldo.toFixed(2))
    cp1.visualizar();

    while(true) {

        console.log(Colors.fg.yellow,"\n*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt('');
        if(opcao === 9){
            console.log(Colors.fg.greenstrong,
                    '\nBanco do Brazil com Z - O seu futuro começa aqui!');
                sobre();
                console.log(Colors.reset, '');
                process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(Colors.fg.whitestrong,
                    '\n\nCriar conta:\n\n', Colors.reset);
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong,
                    '\n\nListar todas as Contas:\n\n');
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong,
                    '\n\nBuscar Conta por Numero:\n\n', Colors.reset);
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong,
                    '\n\nAtualizar Dados da Conta:\n\n', Colors.reset);
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong,
                    '\n\nApagar Conta:\n\n', Colors.reset);
                keyPress()
                break;
            case 6:
                console.log(Colors.fg.whitestrong,
                    '\n\nSacar:\n\n', Colors.reset);
                keyPress()
                break;
            case 7:
                console.log(Colors.fg.whitestrong,
                    '\n\nDepositar:\n\n', Colors.reset);
                keyPress()
                break;
            case 8:
                console.log(Colors.fg.whitestrong,
                    '\n\nTransferir valores entre Contas:\n\n', Colors.reset);
                keyPress()
                break;

            default:
                console.log('\nOpção inválida')
        }


    }
    function sobre(): void{
        console.log("*****************************************************");
        console.log("Projeto Desenvolvido por:");
        console.log("Vivian de Sousa Rodrigues - viviansousa.ro2@gmail.com");
        console.log("github.com/dashenio");
        console.log("*****************************************************");
    }

    function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
    }
}

main();

    
   


