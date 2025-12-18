import express from "express";
import bodyParser from "body-parser";
import { getAll, getById, create, updateById, deleteById } from "../store";
const app = express();

app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/api/v1/whisper", async (req, res) => {
	const whispers = await getAll();
	res.json(whispers);
});

app.set("view engine", "ejs");
app.get("/about", async (req, res) => {
	const whispers = await getAll();
	res.render("about", { whispers });
});
