const express = require('express')
const app = express()
const port = 4000

/* Settings */
app.use(express.static('public'));

/* Routers */
const routerMain = require("./routers/main");

/* Routes */
app.use(routerMain);

/* Server */
app.listen(port, () => {
  console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
})
