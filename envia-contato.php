<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Verifica se os campos não estão vazios
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Configurações de email
        $to = "beatrizmfranco@gmail.com"; // Substitua pelo seu endereço de email
        $subject = "Novo Contato do Site";
        $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
        $headers = "From: $email";

        // Envia o email
        if (mail($to, $subject, $body, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.";
        }
    } else {
        echo "Todos os campos são obrigatórios!";
    }
} else {
    echo "Método de requisição inválido.";
}
?>