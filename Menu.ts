import leia from 'readline-sync';
import { colors } from './src/util/Colors'

export function main() {
    let opcao: number;

    while(true) {

        console.log(colors.bg.black, colors.fg.yellow,"\n*****************************************************");
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

    
   


