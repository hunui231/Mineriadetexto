import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { test } from "./Backend/Controllers/reporbados.controller.js";
dotenv.config();

mongoose.connect(process.env.urldb)
.then(() => {
console.log("CONEXION EXITOSA");
})
.catch((err) => {
console.error("ERROR AL CONECTAR A LA BASE DE DATOS (NO JALA)", err)
})

const app=express();
app.use(cors())
app.listen(4000, () => {
 console.log("Se escucha correcto")
})

test()