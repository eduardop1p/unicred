import z from 'zod';

export const zodSchema = z.object({
  electronicSignature: z
    .string()
    .min(
      2,
      'Preencha o campo assinatura eletrônica para prosseguir com o acesso.'
    ),
});

export type BodyProtocol = z.infer<typeof zodSchema>;
