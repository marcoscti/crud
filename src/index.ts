import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth"
import userRoutes from "./routes/users"
//import publicRoutes from "./routes/publicRoute"
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/auth',authRoutes)
app.use('/users',userRoutes)
// Porta do servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
