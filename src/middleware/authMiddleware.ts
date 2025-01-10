import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "types/JwtPayload";

// Tipagem do token

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Acesso não autorizado." });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido." });
  }
};

export default authMiddleware;
