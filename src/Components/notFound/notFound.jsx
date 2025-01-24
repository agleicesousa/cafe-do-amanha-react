import s from"./notFound.module.css";

export default function NotFound() {
  return (
    <main className={s.container_notFound}>
      <section>
        <h1>Página Não Encontrada</h1>
        <p>Ops! A página que você está procurando não existe.</p>
      </section>
    </main>
  );
}
