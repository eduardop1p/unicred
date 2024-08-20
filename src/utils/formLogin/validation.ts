import z from 'zod';

export const zodSchema = z.object({
  user: z
    .string()
    .min(2, 'Preencha o campo usuário para prosseguir com o acesso.'),
  password: z
    .string()
    .min(2, 'Preencha o campo senha para prosseguir com o acesso.'),
});

export type BodyProtocol = z.infer<typeof zodSchema>;
