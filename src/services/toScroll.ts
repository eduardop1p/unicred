export default function toScroll(elId: string) {
  const element = document.getElementById(elId) as Element;
  const margemSuperior = 50;
  const rect = element.getBoundingClientRect();
  const posicaoFinal = window.scrollY + rect.top - margemSuperior;

  window.scrollTo({
    top: posicaoFinal,
    behavior: 'smooth',
  });
}
