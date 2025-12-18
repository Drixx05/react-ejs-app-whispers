import express from "express";
import bodyParser from "body-parser";
import { getAll, getById, create, updateById, deleteById } from "./store.js";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "public/views");

app.get("/", async (req, res) => {
    const whispers = await getAll();
    res.render("about", { whispers });
});

app.get("/api/v1/whisper", async (req, res) => {
	const whispers = await getAll();
	res.json(whispers);
});

app.get("/api/v1/whisper/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	const whisper = await getById(id);
	res.json(whisper);
});

app.post("/api/v1/whisper", async (req, res) => {
	const newWhisper = await create(req.body.message);
	res.status(201).json(newWhisper);
});

app.put("/api/v1/whisper/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	await updateById(id, req.body.message);
	res.sendStatus(200);
});

app.delete("/api/v1/whisper/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	await deleteById(id);
	res.sendStatus(200);
});

export { app };
