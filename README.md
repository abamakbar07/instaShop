# INSTASHOP

## Local Development

pertama pastikan config baseURL API server pada src/config/api.js di atur ke [http://localhost:3000/api/v1/](http://localhost:3000/api/v1/).\
lalu pada server/server.js set `port = 3000`

jalankan aplikasi dengan perintah `npm run dev`

## Deploy ke Heroku

config baseURL API server pada src/config/api.js ubah menjadi [/api/v1/](/api/v1/).\
dan pada server/server.js set `port = process.env.PORT || 5000`
