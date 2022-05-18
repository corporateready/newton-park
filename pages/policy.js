import React from "react";
import styles from "../styles/policy.module.scss";
import Link from "next/link";
import Layout from "../components/common/layout/Layout";

export default function policy() {
  const [isPolicy, setIsPolicy] = React.useState(true);

  React.useEffect(() => {
    if (isPolicy) document.body.style.overflow = "auto";
  });

  return (
    <>
      <Layout>
        <section className={styles.policy__wrapper}>
          <div className={styles.container}>
            <h2 className={styles.title}>Termeni și condiții</h2>
            <p className={styles.text}>
              În acest document sunt stabiliți termenii și condițiile de
              utilizare a site-ului{" "}
              <Link href="http://newtonpark.md/">
                <a className={styles.link__to}>www.newtonpark.md</a>
              </Link>
              .
              <br />
              <br />
              Acest site este deținut și administrat de{" "}
              <span className={styles.semibold__text}>NEWTON PARK</span>.
            </p>
            <h3 className={styles.subTitle}>POLITICA DE CONFIDENȚIALITATE</h3>
            <p className={styles.text}>
              Datele personale sunt informații care sunt asociate cu Dvs. ca
              persoană și ne permit să Vă identificăm. Acestea sunt utilizate
              numai în scopul desfășurării activității noastre în relație cu
              Dvs.
              <br />
              <br />
              Datele cu caracter personal le primim direct de la Dvs. atunci
              când solicitați prezentarea (informații de contact sub forma unui
              număr de telefon și a adresei de email).
              <br />
              <br />
              Site-ul
              <Link href="http://newtonpark.md/">
                <a className={styles.link__to}> www.newtonpark.md </a>
              </Link>
              colectează datele cu caracter personal, obținute cu acordul
              voluntar al utilizatorilor, având în vedere următoarele scopuri:
              <br />
              <br />
            </p>
            <ul className={styles.items__disc}>
              <li>contactarea utilizatorilor, la cererea voluntară</li>
              <li>
                transmiterea periodică a newsletterelor sau altor informații în
                format electronic
              </li>
              <li>scopuri statistice</li>
            </ul>
            <h3 className={styles.subTitle}>LICENȚĂ</h3>
            <p className={styles.text}>
              <span className={styles.semibold__text}>NEWTON PARK</span> deține
              drepturile de proprietate intelectuală pentru tot materialul
              plasat pe{" "}
              <Link href="http://newtonpark.md/">
                <a className={styles.link__to}>www.newtonpark.md</a>
              </Link>
              <br />
              <br />
              Este interzis:
            </p>
            <ul className={styles.items__minus}>
              <li>- Republicarea informației NEWTON PARK</li>
              <li>
                - Vânzarea, închirierea sau sublicențierea materialului NEWTON
                PARK
              </li>
              <li>
                {" "}
                - Reproducerea, dublarea sau copierea materialului NEWTON PARK
              </li>
              <li>- Redistribuirea conținutului NEWTON PARK</li>
            </ul>
            <p className={styles.text}>
              Toate drepturile de proprietate intelectuală sunt rezervate.
              Puteți solicita acest lucru de la{" "}
              <span className={styles.semibold__text}>NEWTON PARK</span> pentru
              uz personal, sub rezerva restricțiilor stabilite în acești termeni
              și condiții.
            </p>
            <h3 className={styles.subTitle}>COOKIE-URI</h3>
            <p className={styles.text}>
              Acest website folosește cookie-uri pentru a furniza vizitatorilor
              o experiență mult mai bună de navigare și servicii adaptate
              nevoilor și interesului fiecăruia.
              <br />
              <br />
              În ceea ce numim "web 2.0", "cookie"-urile joacă un rol important
              în facilitarea accesului și livrării multiplelor servicii de care
              utilizatorul beneficiază pe internet, precum:Personalizarea
              anumitor setări - limba în care este vizualizat un site, moneda în
              care se exprimă anumite prețuri sau tarife, păstrarea opțiunilor
              pentru diverse produse (măsuri, alte detalii etc) în coșul de
              cumpărături (și memorarea acestor opțiuni) - generându-se astfel
              flexibilitatea "coșului de cumpăraturi" (accesarea preferințelor
              vechi prin accesarea butonului „înainte" și „înapoi");
            </p>
            <ul className={styles.items__disc}>
              <li>
                Cookie-urile oferă deținătorilor de site-uri un feedback valoros
                asupra modului cum sunt folosite site-urile lor de către
                utilizatori, astfel încât să le poată face mai eficiente și mai
                accesibile pentru aceștia;
              </li>
              <li>
                Permit aplicațiilor multimedia sau de un tip diferit de pe alte
                site-uri să fie incluse într-un anumit site pentru a crea o
                experiență de navigare mai valoroasă, mai utilă și mai plăcută;
              </li>
              <li>Îmbunătățesc eficiența publicității online.</li>
            </ul>
            <h3 className={styles.subTitle}>HYPERLINK LA CONȚINUTUL NOSTRU</h3>
            <p className={styles.text}>
              Următoarele organizații se pot conecta la site-ul nostru fără
              aprobare prealabilă în scris:
            </p>
            <ul className={styles.items__minus}>
              <li>- Agenții guvernamentale;</li>
              <li>- Motoare de căutare;</li>
              <li>- Organizații de știri;</li>
              <li>
                - Distribuitorii de directoare online pot face link-uri către
                site-ul nostru în același mod în care fac hyperlink către
                site-urile altor companii listate;
              </li>
              <li>
                - Afaceri acreditate la nivelul întregului sistem, cu excepția
                organizațiilor non-profit, centrelor comerciale de caritate și a
                grupurilor de strângere de fonduri de caritate, care nu pot face
                linkuri către site-ul nostru Web.
              </li>
            </ul>
            <p className={styles.text}>
              Aceste organizații pot face linkuri către pagina noastră de
              pornire, către publicații sau către alte informații de pe site-ul
              web, atâta timp cât linkul: (a) nu este în niciun fel înșelător;
              (b) nu implică în mod fals sponsorizarea, aprobarea sau aprobarea
              părții care face legătura și a produselor și/sau serviciilor
              acesteia; și (c) se încadrează în contextul site-ului părții care
              face legătura.
              <br />
              <br />
              Putem lua în considerare și aproba alte solicitări de linkuri de
              la următoarele tipuri de organizații:
            </p>
            <ul className={styles.items__minus}>
              <li>
                - surse de informații cunoscute pentru consumatori și/sau
                afaceri;
              </li>
              <li>- site-urile comunității dot.com;</li>
              <li>
                - asociații sau alte grupuri care reprezintă organizații de
                caritate;
              </li>
              <li>- distribuitori de directoare online;</li>
              <li>- portaluri de internet;</li>
              <li>- firme de contabilitate, avocatură și consultanță;</li>
              <li>- instituții de învățământ și asociații comerciale.</li>
            </ul>
            <p className={styles.text}>
              Vom aproba solicitările de link-uri de la aceste organizații dacă
              decidem că: (a) linkul nu ne-ar face să ne arătăm nefavorabil
              pentru noi înșine sau pentru afacerile noastre acreditate; (b)
              organizația nu are înregistrări negative cu noi; (c) beneficiul
              pentru noi de vizibilitatea hyperlink-ului compensează absența
              <span className={styles.semibold__text}>NEWTON PARK</span> și (d)
              legătura se află în contextul informațiilor generale despre
              resurse.
              <br />
              <br />
              Dacă sunteți una dintre organizațiile enumerate în paragraful 2 și
              sunteți interesat să faceți un link către site-ul nostru, trebuie
              să ne informați trimițând un e-mail către{" "}
              <span className={styles.semibold__text}>NEWTON PARK</span>. Vă
              rugăm să includeți numele dvs., numele organizației dvs.,
              informațiile de contact, precum și adresa URL a site-ului dvs., o
              listă a oricăror adrese URL de la care intenționați să creați un
              link către site-ul nostru și o listă a adreselor URL de pe site-ul
              nostru la care doriți să le trimiteți legătură.
              <br />
              <br />
              Organizațiile aprobate pot face hyperlink către site-ul nostru web
              după cum urmează:
            </p>
            <ul className={styles.items__minus}>
              <li>- Prin utilizarea numelui nostru corporativ; sau</li>
              <li>
                - Prin utilizarea locatorului uniform de resurse la care este
                legat; sau
              </li>
              <li>
                - Prin folosirea oricărei alte descrieri a site-ului nostru la
                care este legată, aceasta are sens în contextul și formatul
                conținutului de pe site-ul părții care face legătura.
              </li>
            </ul>
            <p className={styles.text}>
              Nicio utilizare a siglei{" "}
              <span className={styles.semibold__text}>NEWTON PARK</span> sau a
              altor lucrări nu va fi permisă pentru conectare în absența unui
              acord de licență a mărcii comerciale.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
