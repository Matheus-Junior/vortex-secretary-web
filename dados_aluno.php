<?php
// Simulando o ID do aluno. Esse valor pode vir de um banco de dados ou de uma variável de sessão.
$aluno_id = 123; // Exemplo de ID do aluno

// Caminho da imagem do aluno (ajuste conforme necessário)
$imagem_url = "img/" . $aluno_id . ".jpg"; // O caminho da imagem pode ser ajustado conforme a estrutura do seu servidor

// Dados simulados do aluno (esses dados podem vir de um banco de dados ou outra fonte)
$dadosAluno = [
    "aluno" => [
        "nome" => "Aluno Tal",
        "curso" => "Engenharia de Software",
        "email" => "aluno@fatec.edu.br",
        "imagem_url" => $imagem_url  // Incluindo o caminho da imagem
    ],
    "requerimentos" => [
        [
            "nome" => "Requerimento 1",
            "status" => "Feito"
        ],
        [
            "nome" => "Requerimento 2",
            "status" => "Em andamento"
        ],
        [
            "nome" => "Requerimento 3",
            "status" => "Aguardando confirmação"
        ],
        [
            "nome" => "Requerimento 4",
            "status" => "Possui falha"
        ]
    ]
];

// Definindo o cabeçalho para indicar que o retorno é JSON
header('Content-Type: application/json');

// Retornando o JSON gerado a partir do array
echo json_encode($dadosAluno);
?>
