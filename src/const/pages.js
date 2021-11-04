export const pages = {
  glowna: {
    location: "glowna",
    path: "/",
    sliderTitle: "Witamy w naszym zakładzie",
    sliderSubtitle: "Dbamy o kazdy szczegol!",
  },
  oNas: {
    location: "oNas",
    path: "/o-nas",
  },
  zalety: {
    location: "zalety",
    path: "/zalety",
    items: [
      {
        title: "Co daje OneSerwis?",
        text: "OneSerwis to przede wszystkim znacznie uproszczony proces wysyłania prezentacji wideo do klienta, co skraca czas potrzebny na załatwienie wszystkich formalności. Prosta procedura akceptacji klienta eliminuje wszelkie problemy związane z niezrozumieniem wszystkich warunków współpracy. Nigdy więcej problemów takich jak; klient nie widział, klient nie słyszał.",
        gridArea: "first",
      },
      {
        title:
          "OneSerwis współpracuje z ADAC i EIEA, a co dokładnie otrzymuje warsztat przy dołączeniu do OneSerwis?",
        text: "Dołączenie do OneSerwis wiąże się z wieloma korzyściami dla warsztatu, o które cieżko w całej Polsce. To kompleksowa obsługa warsztatu oraz pomoc w budowaniu pozycji na rynku.",
        gridArea: "second",
      },
      {
        title:
          "O to w skrócie na co może liczyć każdy warsztat w sieci OneSerwis",
        text: "Każdy warsztat zainteresowany współpracą może dołączyć do sieci OneSerwis i szczycić się ponadczasowymi rozwiązaniami, które przyciągną nowych klientów i zagwarantują najwyższą jakość obsługi.",
        gridArea: "third",
      },
    ],
  },
  oferta: {
    location: "oferta",
    path: "/oferta",
  },
  kontakt: {
    location: "kontakt",
    path: "/kontakt",
  },
  ofertaDetale: {
    location: "ofertaDetale",
    path: "/oferta/:name",
    subsites: [
      {
        location: "expert",
        title: "Rzeczoznawca, radca prawny i ubezpieczenie",
        text: "To niewątpliwie jeden z największych atutów OneSerwis. Dołączając do naszej sieci warsztatów OneSerwis. Przy dołączeniu za pomocą pakietu pozwalającego na wykorzystanie maksimum możliwości OneSerwis, Warsztat otrzymuje rzeczoznawcę samochodowego (wykonuje kalkukację napraw na zlecenie klienta), radcę prawnego z możliwościami konsultacji prawnych oraz ubezpieczenie.",
        path: "/oferta/rzeczoznawca",
        img: "expert",
      },
      {
        location: "program",
        title: "Program dla warsztatów dedykowany dla sieci OneSerwis",
        text: "Dedykowany program warsztatów serwisowych wspierający warsztaty wideo obsługi klienta. Podstawową metodą zwiększania zaufania do klienta jest jego rzeczowe i uczciwe traktowanie. Z naszym oprogramowaniem każdy warsztat otrzymuje najlepsze warunki do tworzenia stabilnej relacji na linii klient-warsztat.",
        path: "/oferta/program",
        img: "program",
        reverse: "reverseOrder",
      },
      {
        location: "advertisement",
        title: "Strona WWW, obrandowanie, kampanie reklamowe",
        text: "Dołączenie do OneSerwis wiąże się z wieloma korzyściami dla warsztatu, o które cieżko w całej Polsce. To kompleksowa obsługa warsztatu oraz pomoc w budowaniu pozycji na rynku. O to w skrócie na co może liczyć każdy warsztat w sieci OneSerwis",
        path: "/oferta/reklama",
        img: "advertisement",
      },
    ],
  },
  rzeczoznawca: {
    name: "Rzeczoznawca, radca prawny i ubezpieczenie",
    items: [
      {
        title: "Asystent na etacie",
        textList: [
          "konsulatcje pomocy technicznej dedykowanego rzeczoznawcy",
          "nadzór na prowadzeniem prac warsztatowych",
          "pomoc przy zakupie pojazdu ( badanie technicze weryfikacja pojazdu w międzynarodowych bazach danych )",
          "opinie technczne przez biegłego rzezcoznawcę",
          "reprezentowanie przed Administarcją Państwową",
          "mediacje w sporach",
          "kalkulacje napraw na zlecenie klienta w systemach komputerowych ( AUDATEX, EUROTAX, DAT )",
          "wykonanie wyceny pojazdu na zlecenie klienta w systemach ( INFO-EXPERT, EUROTAX )",
        ],
        img: "assistant",
      },
      {
        title: "Ochrona Prawna",
        textList: [
          "Profesjonaln ochrona prawna online",
          "Konsultacje prawne z działem prawnym ( Doradcą prawnym, Radcą Prawnym, Adwokatem w punkcie obsługi siedziby firmy)",
          "Prowadzenie spraw sądowych",
          "Obsługa notarialna na terenie RP",
        ],
        img: "legalProtection",
        reverse: "reverse",
      },
      {
        title: "Szkolenia",
        textList: [
          "stacjonarne organizowane przez ADAC Europe",
          "online organizowane przez ADAC Europe",
          "zniżki na szkolenia oragnizowane przez ADAC",
        ],
        img: "trainings",
      },
    ],
  },
  program: {
    name: "Program dla warsztatów dedykowany dla sieci OneSerwis",
    items: [
      {
        title: "Program dla warsztatów",
        textList: [
          "Dzięki naszemu profesjonalnemu systemowi warsztatów samochodowych Twój klient zapamięta Cię raz na zawsze",
          "Rozwiązanie zaimplementowane w formie powiadomień jest idealnym zwieńczeniem kompletnego oprogramowania",
          "Możesz stworzyć usługę powiadamiania zgodnie ze swoimi preferencjami",
          "Konsultant serwisowy i klient otrzymują powiadomienia w formie e-maili i sms o upływie terminu ważności badania technicznego, aby mogli skontaktować się z klientem i zorganizować przegląd i ewentualne naprawy",
        ],
        img: "program",
      },
    ],
  },
  reklama: {
    name: "Strona WWW, obrandowanie, kampanie reklamowe",
    items: [
      {
        title: "Szkolenia",
        textList: [
          "stacjonarne organizowane przez ADAC Europe",
          "online organizowane przez ADAC Europe  ",
          "zniżki na szkolenia oragnizowane przez ADAC",
        ],
        img: "trainings",
      },
    ],
  },
};
