export default function formateDate() {
  return new Date().toLocaleString('pt-BR', {
    timeStyle: 'short',
    dateStyle: 'long',
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  });
}
