const links = document.querySelectorAll('.nav-links a[data-page]');
        const conteudo = document.getElementById('conteudo');
      
        // Carrega a página inicial automaticamente ao abrir o site
        window.addEventListener('DOMContentLoaded', () => {
          fetch('home.html')
            .then(response => {
              if (!response.ok) throw new Error("Erro ao carregar a página inicial");
              return response.text();
            })
            .then(html => {
              conteudo.innerHTML = html;
            })
            .catch(error => {
              conteudo.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
            });
        });
      
        // Clique nos links
        links.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const pagina = this.getAttribute('data-page');
      
            fetch(pagina)
              .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar a página");
                return response.text();
              })
              .then(html => {
                conteudo.innerHTML = html;
              })
              .catch(error => {
                conteudo.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
              });
          });
        });