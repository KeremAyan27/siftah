let map;
let marker;
let data = [];
let isDarkMode = false;

const apiKey = "91fb13f387394a65e42ae00828d2c28d"; // <-- kendi key'inle değiştir

// Light ve dark tile tanımları
const lightTile = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap"
});

const darkTile = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 18,
  attribution: "© CartoDB"
});

// Veri dosyasını yükle
fetch("turkiye_il_ilce_coords.json")
  .then((res) => res.json())
  .then((json) => {
    data = json;
    populateCities();
    initializeMap();
  });

function populateCities() {
  const citySelect = document.getElementById("citySelect");
  data.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });

  citySelect.addEventListener("change", populateDistricts);
}

function populateDistricts() {
  const selectedCity = document.getElementById("citySelect").value;
  const districtSelect = document.getElementById("districtSelect");
  districtSelect.innerHTML = '<option value="">İlçe seçin</option>';

  const city = data.find((c) => c.name === selectedCity);
  if (city) {
    for (let districtName in city.districts) {
      const option = document.createElement("option");
      option.value = districtName;
      option.textContent = districtName;
      districtSelect.appendChild(option);
    }
  }
}

function initializeMap() {
  map = L.map("map").setView([39.0, 35.0], 6);
  lightTile.addTo(map); // Başlangıç teması: açık tema
}

function selectDistrict() {
  const city = document.getElementById("citySelect").value;
  const district = document.getElementById("districtSelect").value;

  if (!city || !district) {
    alert("Lütfen il ve ilçe seçin.");
    return;
  }

  const cityData = data.find((c) => c.name === city);
  const coords = cityData.districts[district];

  if (coords) {
    const lat = parseFloat(coords.lat);
    const lon = parseFloat(coords.lon);

    map.setView([lat, lon], 11);

    if (marker) {
      map.removeLayer(marker);
    }

    marker = L.marker([lat, lon], { title: `${district}, ${city}` }).addTo(map);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=tr`
    )
      .then((res) => res.json())
      .then((weather) => {
        const info = `
          📍 <strong>${district}, ${city}</strong><br>
          🌤 ${weather.weather[0].description}<br>
          🌡️ ${weather.main.temp} °C<br>
          💧 Nem: ${weather.main.humidity}%<br>
          🕒 ${new Date().toLocaleTimeString()}
        `;
        document.getElementById("weatherInfo").innerHTML = info;
      })
      .catch(() => {
        document.getElementById("weatherInfo").innerText =
          "Hava durumu alınamadı.";
      });
  }
}

// 🌙 Tema değiştirici fonksiyon
function toggleMapTheme() {
  if (isDarkMode) {
    map.removeLayer(darkTile);
    lightTile.addTo(map);
  } else {
    map.removeLayer(lightTile);
    darkTile.addTo(map);
  }
  isDarkMode = !isDarkMode;
}

document.getElementById("darkModeBtn")?.addEventListener("click", toggleMapTheme);
