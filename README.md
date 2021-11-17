# elemestest
Fikra Hadi Ramadhan
Vue.Js Frontend Engineer (Junior) - Test

## Memulai Project
1. Membuat repo terlebih dahulu pada github, lalu clone ke komputer
2. Lalu pada terminal menuliskan "vue create elemestest ." untuk memulai project
3. Melakukan setup lainnya seperti install router, star rating, dan lainnya
4. Sebelum menjalankan harus menuliskan "npm install" terlebih dahulu
5. Untuk menjalankan project bisa dengan menuliskan "npm run serve"

## Deploy Heroku
1. Install heroku cli dan express
2. Login heroku pada komputer
3. Mengetikkan "git init" lalu "heroku git:remote -a elemestest2"
4. Menambahkan script server.js berisikan:
```const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)```
5. Lalu add, commit, dan push
6. Terakhir "git push heroku main"
7. Aplikasi sudah bisa terbuka pada website https://elemestest2.herokuapp.com


# Soal 2
## Beri saran/masukan untuk perbaikan website elemes.id
Saran dari saya sepertinya hanya pada desain, lebih eye catching dan jelas perbedaan antar fitur dalam satu halaman, karena yang sekarang masih terlalu sama jadi benar benar harus dilihat secara teliti jika tidak ingin terlewat



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
