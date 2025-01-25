import { Schema, model } from "mongoose";


const Esquema = new Schema ({

Comment: String,

 })

export const Tabla = new model(

"Reprobados", Esquema

)