import { JwtPayload } from "./JwtPayload";

export interface User extends JwtPayload{
    email: string;
    password: string;
}