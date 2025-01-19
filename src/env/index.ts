import dotenv from 'dotenv'
import { z } from "zod";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

// Schema para validar as variáveis de ambiente
const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3001),
});

// Valida as variáveis de ambiente
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("Invalid environment variables:");
  console.error(_env.error.format());

  throw new Error("Invalid environment variables.");
}

// Exporta as variáveis de ambiente validadas
export const env = _env.data;
