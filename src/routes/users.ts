import express, { Request, Response } from "express";
import db from "../db";
import authMiddleware from "../middleware/authMiddleware";
import { User } from "types/User";

const router = express.Router();

// Listar usuários
router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const [users] = await db.query("SELECT id, username, email FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});

// Atualizar usuário
router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
  const { id }: Partial<User> = req.params;
  const { username , email }: User = req.body;
  try {
    await db.query("UPDATE users SET username = ?, email = ? WHERE id = ?", [
      username,
      email,
      id,
    ]);
    res.json({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
});

// Deletar usuário
router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
  const { id }: Partial<User> = req.params;

  try {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário." });
  }
});

export default router;
