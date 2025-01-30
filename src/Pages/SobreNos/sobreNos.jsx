import s from "./sobreNos.module.css";

export default function SobreNos() {
  return (



  <main className={s.main}>

    <div className={s.center}>
        <h1 className={s.titulo}>Sobre Nós</h1>
        <p className={s.texto}>O café do Amanhã foi fundado por Nanda e Junior,
          dois apaixonados por café e pela cidade de Fortaleza.
          Localizado na Avenida Beira Mar. Nosso café oferece
          um refúgio acolhedor onde você pode desfrutar de saberes únicos e de uma vista
          deslumbrante</p>
          </div>
          
            <div className={s.container}>
               <div className={s.wrapper}>

                <div className={s.wrapper_holder}>
                  <div className={s.sliderImg1}><legend>Nanda e Junior</legend></div>
            <div className={s.sliderImg2}></div>
            <div className={s.sliderImg3}></div>
            


                </div>
                 </div>
            <div className={s.button_holder}>
               <a href="#img1" className={s.button}></a>
               <a href="#img2" className={s.button}></a>
               <a href="#img3" className={s.button}></a>
      </div>

            </div>


 
       </main>
  );
}
