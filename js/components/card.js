export async function getDataJSON() {
  const d = document,
    $cards = d.getElementById("eventos");

  let res = await fetch("js/data.json"),
    json = await res.json(),
    html = "";

  //console.log(res, json);

  json.indexUltimos.forEach((el) => {
    html += `
  <section class=" card mx-auto mt-4" style="max-width: 360px;">
            <article class="altura row card-m0 border">
              <div class=" col-6 pe-0 ps-0 card-m0">
                <img
                  src="${el.poster}"
                  class="rounded-start img-card"
                  alt="${el.title}"
                />
              </div>
              <article class="col-6 ps-0 card-m0 bg-c-fondo">
                <div class="card-body">
                  <h5 class="text-card-t">${el.title}</h5>
                  <!-- Máximo 25 caracteres -->
                  <p class="text-card-s">
                    ${el.descripcion}
                  </p>
                  <!-- Máximo 76 caracteres -->
                  <a href="${el.mas}" class="btn btn-sm color-btn-cp">Más</a>
                </div>
              </article>
            </article>
          </section>`;
  });

  $cards.innerHTML = html;
}
