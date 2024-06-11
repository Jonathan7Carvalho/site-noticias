<?php
include 'config.php';

function getNewsArticles($pdo) {
    $stmt = $pdo->query("SELECT * FROM articles");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
