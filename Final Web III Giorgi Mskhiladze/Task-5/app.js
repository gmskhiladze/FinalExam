const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");


const storage = new Storage();
const weather = storage.getLocationData();

if (weather !== undefined) {
    const city = new City(weather)
    city.getWeather().then(data => {
        addCity(data)
    })

    removeCity();
}


form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    storage.setLocationData(inputVal)

    const city = new City(inputVal);

    city.getWeather().then(data => {
        addCity(data)
    }).catch(() => {
        msg.textContent = "Please search for a valid city 😩";
    });

    msg.textContent = "";
    form.reset();
    input.focus();
});

function addCity(data) {
    const { main, name, sys } = data;
    const li = document.createElement("li");
    li.classList.add("city");
    li.innerHTML = `
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
        </h2>
      `;
    list.appendChild(li);
}

function removeCity() {
    setTimeout(() => {
        list.childNodes.forEach((item) => {
            item.addEventListener("click", e => {
                item.remove();
            })
        })

    }, 1000)
}