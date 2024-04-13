const express = require("express");

const app = express();

const PORT = process.env.PORT || 3006;
const htmlRoutes = require("./Routes/htmlRoutes");
const apiRoutes = require("./Routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});
