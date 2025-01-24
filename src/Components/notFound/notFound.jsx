import s from"./notFound.module.css";

export default function NotFound() {
  return (
    <main className={s.container_notFound}>
      <h1 className={s.titulo_notFound}>Página Não Encontrada</h1>
      <p className={s.paragrafo_notFound}>Ops! A página que você está procurando não existe.</p>
    </main>
  );
}
