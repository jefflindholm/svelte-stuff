import sirv from "sirv";
import compression from "compression";
import * as sapper from "@sapper/server";
import { append } from "svelte/internal";

import express from "express";
import api from "./api";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const server = express({ logger: true });

server.use(express.json());

server.use(compression({ threshold: 0 }));
server.use(sirv("static", { dev }));
server.use("/api", api);

// last piece
server.use(sapper.middleware());

server.listen(PORT, err => {
  if (err) console.log("error", err);
});
