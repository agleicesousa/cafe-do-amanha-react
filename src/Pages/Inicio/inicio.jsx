import s from "./inicio.module.css";

export default function Inicio() {
    return (
        <main className={s.sMain}>
            <section id="inicio" className={s.sInicio}>
                <div className={s.sInicio__intro}>
                    <h2>Bem-vindo ao nosso Café da Manhã!</h2>
                    <p>Aqui você encontrará histórias e delícias de dar água na boca. Aproveite!</p>
                </div>
            </section>
        </main>
    );
}

