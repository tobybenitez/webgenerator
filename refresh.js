document.addEventListener("DOMContentLoaded", () => {
  refreshDatos();
  refreshId = setInterval(refreshDatos, 10000)
})

function refreshDatos(){
  let temp = document.querySelector("#temp-int")
  temp.innerHTML = parseInt(temp.innerHTML) + 1

  let humedad = document.querySelector("#humedad-int")
  humedad.innerHTML = parseInt(humedad.innerHTML) + 1

  let viento = document.querySelector("#viento-int")
  viento.innerHTML = parseInt(viento.innerHTML) + 1

  let incendio = document.querySelector("#incendio-int")
  incendio.innerHTML = parseInt(incendio.innerHTML) + 1
}
