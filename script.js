 document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();

      let num = parseInt(document.getElementById("numero").value);
      let salida = "";
      let suma = 0;

      if (num < 1 || num > 10) {
        salida = "<p class='error'>⚠️ Error: el número debe estar entre 1 y 10</p>";
      } else {
        for (let i = 1; i <= 10; i++) {
          let resultado = num * i;
          salida += `<p>${num} x ${i} = <b>${resultado}</b></p>`;
          suma += resultado;
        }
        salida += `<p class='total'>✨ La suma total es: ${suma}</p>`;
      }

      document.getElementById("resultado").innerHTML = salida;
    });