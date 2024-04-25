import { z } from 'zod';

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export const authLoginParamsSchema = z.object({
  nameOrEmail: z.string(),
  password: z.string(),
});
export type AuthLoginParams = z.infer<typeof authLoginParamsSchema>;
export type AuthLoginResponse = AuthUser;

export const authSignupParamsSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
export type AuthSignupParams = z.infer<typeof authSignupParamsSchema>;
export type AuthSignupResponse = AuthUser;
