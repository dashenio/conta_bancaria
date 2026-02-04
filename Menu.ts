import leia from 'readline-sync';
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

export function main() {
    let opcao: number;

    // Instanciar Objetos da Classe Conta
    const c1 = new Conta(1, 1234,'Sofia', 1, 100000);
    const c2 = new Conta(2, 5678, 'Marcelo', 2, 1000);
   
    // Testes do Médodo Sacar
    c1.visualizar();
    console.log('Sacar R$ 100,00: ', c1.sacar(100.00));
    console.log('Saldo R$:', c1.saldo.toFixed(2));
    console.log('Sacar R$ 200.000,00: ', c1.sacar(200000.00));
    console.log('Sacar R$ 0,00: ', c1.sacar(0.00));
    console.log('Saldo R$:', c1.saldo.toFixed(2));
    
    // Testes do Método Depositar
    c2.visualizar();
    console.log('Depositar: R$ 27,00');
    c2.depositar(27.00)
    console.log('Saldo: R$', c2.saldo.toFixed(2));
    console.log('Depositar R$ -100.00: ');
    c2.depositar(-100.00)
    console.log('Depositar R$ 0,00:');
    c2.depositar(0.00)
    console.log('Saldo R$:', c2.saldo.toFixed(2));
   
    while(true) {

        console.log(colors.fg.yellow,"\n*****************************************************");
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
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt('');
        if(opcao === 9){
            console.log(colors.fg.greenstrong,
                    '\nBanco do Brazil com Z - O seu futuro começa aqui!');
                sobre();
                console.log(colors.reset, '');
                process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    '\n\nCriar conta:\n\n', colors.reset);
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    '\n\nListar todas as Contas:\n\n');
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    '\n\nBuscar Conta por Numero:\n\n', colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    '\n\nAtualizar Dados da Conta:\n\n', colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    '\n\nApagar Conta:\n\n', colors.reset);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    '\n\nSacar:\n\n', colors.reset);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    '\n\nDepositar:\n\n', colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    '\n\nTransferir valores entre Contas:\n\n', colors.reset);
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
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
    }
}

main();

    
   


