const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    fs.readdir("./files", function (err, files) {
        res.render("index", { files: files });
    });
});
app.get("/file/:filename", function (req, res) {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, "utf-8", function (err, filedata) {
        if (err) {
            // Handle error, such as file not found
            return res.status(404).send("File not found");
        }
        res.render('show', { file: filedata, filename: filename });
    });
});
app.get("/edit/:filename", function (req, res) {
    const filename = req.params.filename;
    res.render('edit', { filename: filename }); 
});
app.post("/edit", function (req, res) {
fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`,function(err){
    res.redirect("/") ;
})
});


app.post("/create", function (req, res) {
    const title = req.body.title;
    const details = req.body.details;
    const filename = `${title.replace(/\s+/g, '_')}.txt`; // Replaces spaces with underscores

    fs.writeFile(`./files/${filename}`, details, function (err) {
        res.redirect("/");
    });
});

app.listen(3000);
