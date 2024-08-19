import z from 'zod';

export const zodSchema = z.object({
  agency: z
    .string()
    .trim()
    .min(2, 'Agência inválida. Por favor, verifique seus dados.'),
  account: z
    .string()
    .trim()
    .min(2, 'Conta inválida. Por favor, verifique seus dados.'),
});

export type BodyProtocol = z.infer<typeof zodSchema>;
