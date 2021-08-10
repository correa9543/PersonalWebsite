const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const indexRouter = require("./routes/index");

// app.get('/', (req, res) => {
//     res.send("YESSIR");
// });

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})


app.engine(
    "hbs",
    handlebars({
        // layoutsDir: path.join(__dirname,"./views/layout"),
        // partialsDir: path.join(__dirname, "./views/partials"),
        extname: ".hbs",
        defaultLayout: "website",
        layoutsDir: "./views/layout",
        partialsDir: "./views/partials"
    })
);

app.set("view engine", "hbs");


app.use("/", indexRouter);