import z from 'zod';

export const zodSchema = z.object({
  sms: z
    .string()
    .min(
      2,
      'Preencha o campo com o código sms enviado para prosseguir com o acesso.'
    ),
});

export type BodyProtocol = z.infer<typeof zodSchema>;
