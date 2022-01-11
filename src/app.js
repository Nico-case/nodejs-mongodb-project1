import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path"
import {create} from "express-handlebars";
import morgan from "morgan"


 const app = express();

 app.set("views", path.join(__dirname, "views"));

const exphbs = create({
    extname:".hbs",
    partialsDir: path.join(app.get("views"), "partial"),
    layoutsDir: path.join(app.get("views"), "layout"),
    defaultLayout:"main-html"
});

app.engine(".hbs", exphbs.engine)

 app.set("view engine", ".hbs")

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended : false}));
//routes
app.use(indexRoutes)
//static files
app.use(express.static(path.join(__dirname,"public")))
export default app;