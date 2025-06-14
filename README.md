## ENG 🇬🇧

**An interactive weather map for every province and district in Turkey.**

### 🔍 How It Works
- Select a province and district
- The map zooms into the selected location
- Real-time weather data is shown (temperature, description, humidity, timestamp)
- The map style can be toggled (light/dark)

### 🛠 Technologies Used
- HTML5 + Tailwind CSS
- JavaScript (ES6)
- Leaflet.js (for map)
- OpenWeatherMap API (for weather data)
- Nominatim API (geolocation coordinates)
- Python (data preprocessing)
- JSON (data storage)

### ✨ Features
- Dynamic dropdown for city and district selection
- Realtime weather info display
- Smooth zoom-in map animation
- Custom JSON dataset with lat/lon
- Dark mode map theme
- Fully responsive UI

### 🚀 Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/KeremAyan27/tr-il-ilce-hava-durumu.git
Open main.js and replace the API key line:

js
Kopyala
Düzenle
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
Open index.html in your browser.

---

## TR

# 🌤 Türkiye İl-İlçe Hava Durumu Haritası
Türkiye’deki tüm il ve ilçeler için hava durumu bilgisi gösteren etkileşimli harita uygulaması.

🔍 Nasıl Çalışır?
İl ve ilçe seçildiğinde

Harita otomatik olarak konuma odaklanır

Gerçek zamanlı hava durumu bilgisi gösterilir (sıcaklık, açıklama, nem, saat)

Harita teması (açık/karanlık) değiştirilebilir

🛠 Kullanılan Teknolojiler
HTML5 + Tailwind CSS

JavaScript (ES6)

Leaflet.js (harita işlemleri)

OpenWeatherMap API (hava verisi)

Nominatim API (konum koordinatları)

Python (veri hazırlama)

JSON (veri formatı)

✨ Özellikler
İl ve ilçe seçim arayüzü

Otomatik konum yakınlaştırma

Gerçek zamanlı hava durumu bilgisi

Harita için light/dark tema

Koordinat içeren özel veri seti

Mobil uyumlu tasarım

🚀 Kurulum
Depoyu klonlayın:

bash
Kopyala
Düzenle
git clone https://github.com/KeremAyan27/tr-il-ilce-hava-durumu.git
main.js dosyasındaki şu satırı bulun ve kendi API anahtarınızla değiştirin:

js
Kopyala
Düzenle
const apiKey = "BURAYA_KENDİ_API_KEYİNİZİ_YAZIN";
index.html dosyasını tarayıcıda açın.

👨‍💻 Developer Note
This project was developed to gain experience in API integration, frontend design, and map-based interaction. It’s well-suited for portfolios of frontend developers.

Bu proje, API yönetimi, harita tabanlı etkileşim ve arayüz tasarımı konularında deneyim kazanmak amacıyla geliştirilmiştir. Frontend geliştirici portföyü için uygundur.