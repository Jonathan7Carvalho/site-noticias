document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém o termo de pesquisa digitado pelo usuário
    var query = document.getElementById('search-input').value.toLowerCase();

    // Seleciona todos os elementos que deseja pesquisar na página
    var elementsToSearch = document.querySelectorAll('h1, h2, p');

    // Remove a formatação anterior de pesquisa
    elementsToSearch.forEach(function(element) {
        element.innerHTML = element.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    });

    // Loop através dos elementos e verifica se eles contêm o termo de pesquisa
    elementsToSearch.forEach(function(element) {
        var textContent = element.textContent.toLowerCase();
        var newTextContent = textContent.replace(new RegExp(query, 'gi'), '<span class="highlight">$&</span>'); // Destaque a palavra correspondente
        element.innerHTML = element.innerHTML.replace(textContent, newTextContent); // Substitua o conteúdo original pelo novo conteúdo destacado
    });

    // Limpa o campo de pesquisa
    document.getElementById('search-input').value = '';
});
