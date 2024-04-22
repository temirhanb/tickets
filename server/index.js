import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import router from "./router.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
ViteExpress.config({ mode: "production" })

app.listen(PORT, () => {
  console.log('Server start on port: ' + PORT);
});

ViteExpress.listen(app, PORT, () => console.log("Server is listening..."));
