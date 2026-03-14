document.addEventListener("DOMContentLoaded", () => {
      const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(data => {
            const container = document.querySelector("#cards");
            const loading = document.querySelector("#loading");

          
            setTimeout(() => {
              
              loading.style.display = "none";

              data.forEach(post => {
                const card = document.createElement("div");
                card.className = "card";

                const title = document.createElement("h3");
                title.textContent = post.title;

                const info = document.createElement("p");
                info.className = "info";
                info.textContent = `User ID: ${post.userId} | Post ID: ${post.id}`;

                const body = document.createElement("p");
                body.textContent = post.body;

                card.appendChild(title);
                card.appendChild(info);   
                card.appendChild(body);

                container.appendChild(card);
              });
            }, 2000); 
          })
      };

      getData();
    });
