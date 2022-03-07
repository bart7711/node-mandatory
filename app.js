const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const node = fs.readFileSync("./public/pages/node/node.html").toString();
const nodeSpecifics = fs.readFileSync("./public/pages/nodeSpecifics/nodeSpecifics.html").toString();
const rest = fs.readFileSync("./public/pages/rest/rest.html").toString();
const expres = fs.readFileSync("./public/pages/express/express.html").toString();
const expressRest = fs.readFileSync("./public/pages/expressRest/expressRest.html").toString();
const tools = fs.readFileSync("./public/pages/tools/tools.html").toString();
const ssr = fs.readFileSync("./public/pages/ssr/srr.html").toString();
const cleanCode = fs.readFileSync("./public/pages/cleanCode/cleanCode.html").toString();

const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Main Page") + frontpage + footer;
const nodePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Node") + node + footer;
const nodeSpecificsPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Node details") + nodeSpecifics + footer;
const restPage = nav.replace("%%TITLE_PLACEHOLDER%%", "REST") + rest + footer;
const expressPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Express") + expres + footer;
const expressRestPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Express Rest") + expressRest + footer;
const toolsPage = nav.replace("%%TITLE_PLACEHOLDER%%", "tools") + tools + footer;
const ssrPage = nav.replace("%%TITLE_PLACEHOLDER%%", "SSR") + ssr + footer;
const cleanCodePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Clean Code Conventions") + cleanCode + footer;


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/node", (req, res) => {
    res.send(nodePage);
});

app.get("/nodeSpecific", (req, res) => {
    res.send(nodeSpecificsPage);
});

app.get("/rest", (req, res) => {
    res.send(restPage);
});

app.get("/express", (req, res) => {
    res.send(expressPage);
});

app.get("/restExpress", (req, res) => {
    res.send(expressRestPage);
});

app.get("/tools", (req, res) => {
    res.send(toolsPage);
});

app.get("/ssr", (req, res) => {
    res.send(ssrPage);
});

app.get("/ccc", (req, res) => {
    res.send(cleanCodePage);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});