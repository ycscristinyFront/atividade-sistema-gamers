Jp const prompt = require("prompt-sync")();

let elenco = [];
let rodando = true;

function exibirMenu() {
    console.log("\n--- GAMERTEAM PANEL ---");
    console.log("1. Registrar Novo Jogador");
    console.log("2. Remover Jogador");
    console.log("3. Listar Membros");
    console.log("4. Média de Pontos");
    console.log("5. Atualizar Pontuação");
    console.log("6. Encerrar");
    console.log("-----------------------\n");
}

function listarMembros() {
    if (elenco.length === 0) {
        console.log("Nenhum player registrado no momento.");
        return;
    }
    for (let i = 0; i < elenco.length; i++) {
        let player = elenco[i];
        console.log(${i + 1}# Name: ${player.nome} | Role: ${player.funcao} | Score: ${player.pontuacao});
    }
}

function registrarJogador() {
    let nome = prompt("Nome do player: ");
    let funcao = prompt("Função/Role: ");
    let pontuacao = Number(prompt("Pontos iniciais: "));

    if (isNaN(pontuacao)) {
        console.log("Aviso: Insira um valor numérico válido para os pontos.");
        return;
    } else {
        let novoPlayer = {
            nome: nome,
            funcao: funcao,
            pontuacao: pontuacao
        };
        elenco.push(novoPlayer);
        console.log("Player adicionado com sucesso!");
    }
}

function atualizarPontuacao() {
    console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
    
    let buscarNome = prompt("Qual jogador deseja atualizar? ");
    let achou = false;

    for (let i = 0; i < elenco.length; i++) {
        let playerAtual = elenco[i];

        if (playerAtual.nome.toLowerCase() === buscarNome.toLowerCase()) {
            let bonus = Number(prompt(`Quantos pontos ${playerAtual.nome} ganhou hoje? `));
            
            if (!isNaN(bonus)) {
                playerAtual.pontuacao += bonus;
                console.log(SUCESSO! A pontuação de ${playerAtual.nome} subiu para ${playerAtual.pontuacao} pontos!);
            } else {
                console.log("Erro: Pontuação inválida.");
            }
            
            achou = true;
            break;
        }
    }

    if (!achou) {
        console.log("Erro: Jogador não encontrado no sistema.");
    }
}

while (rodando) {
    exibirMenu();
    let escolha = prompt("Selecione uma opção: ");

    if (escolha === "1") {
        registrarJogador();
    } else if (escolha === "2") {
        console.log("Funcionalidade em desenvolvimento...");
    } else if (escolha === "3") {
        listarMembros();
    } else if (escolha === "4") {
        console.log("Funcionalidade em desenvolvimento...");
    } else if (escolha === "5") {
        atualizarPontuacao();
    } else if (escolha === "6") {
        console.log("Desconectando do painel...");
        rodando = false;
    } else {
        console.log("Comando inválido!");
    }
}
