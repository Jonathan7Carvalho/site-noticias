<?php
// Habilite a exibição de erros
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Inclua o arquivo de conexão com o banco de dados
include '../includes/db_connect.php';

$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 5;
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;

try {
    $stmt = $conn->prepare("SELECT * FROM articles ORDER BY published_at DESC LIMIT :limit OFFSET :offset");
    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($articles);
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
