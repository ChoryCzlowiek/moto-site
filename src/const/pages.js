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
        text: "Każdy warsztat zainteresowany współpracą może dołączyć do sieci OneSerwis i szczycić się ponadczasowymi rozwiązaniami, które przyciągną nowych klientów i zagwarantują najwyższą jakość obsługi.",
        gridArea: "first",
      },
      {
        title:
          "OneSerwis współpracuje z ADAC Polska, a co dokładnie otrzymuje warsztat przy dołączeniu do OneSerwis?",
        text: "Dołączenie do OneSerwis wiąże się z wieloma korzyściami dla warsztatu, o które cieżko w całej Polsce. To kompleksowa obsługa warsztatu oraz pomoc w budowaniu pozycji na rynku. Rzeczoznawca, radca prawny i ubezpieczenie. Usługa expert na etacie. Usługa odszkodowań zawiera szereg pakietów mających na celu zredukowanie kosztów w procesie prowadzenia warsztatu.",
        gridArea: "second",
      },
      {
        title:
          "O to w skrócie na co może liczyć każdy warsztat w sieci OneSerwis",
        text: "Każdy warsztat zainteresowany współpracą może dołączyć do sieci OneSerwis i szczycić się ponadczasowymi rozwiązaniami, które przyciągną nowych klientów i zagwarantują najwyższą jakość obsługi. CRM - Specjalny program warsztatów serwisowych wspierający warsztaty wideo obsługi klienta. Strona www - Strona zawierająca podstawowe informacje jak kontakt, cennik, zakres usług. Edycja zawrości strony jest intuicyjna, prosta w obsłudze i nie wymaga znajomośći programowanie",
        gridArea: "third",
      },
      {
        title: "Co możemy zaproponować?",
        text: "Szkolenie z obsługi programu i akceptacji klienta, Obrandowanie, Promocja w mediach społecznościowych i wyszukiwarkach Google",
        gridArea: "fourth",
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
          "Konsulatcje pomocy technicznej dedykowanego rzeczoznawcy",
          "Nadzór na prowadzeniem prac warsztatowych",
          "Pomoc przy zakupie pojazdu ( badanie technicze weryfikacja pojazdu w międzynarodowych bazach danych )",
          "Opinie technczne przez biegłego rzezcoznawcę",
          "Reprezentowanie przed Administacją Państwową",
          "Mediacje w sporach",
          "Kalkulacje napraw na zlecenie klienta w systemach komputerowych ( AUDATEX, EUROTAX, DAT )",
          "Wykonanie wyceny pojazdu na zlecenie klienta w systemach ( INFO-EXPERT, EUROTAX )",
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
          "Stacjonarne organizowane przez ADAC Europe",
          "Online organizowane przez ADAC Europe",
          "Zniżki na szkolenia oragnizowane przez ADAC Polska",
        ],
        img: "trainings",
      },
    ],
  },
  program: {
    name: "Program dla warsztatów dedykowany dla sieci OneSerwis",
    items: [
      {
        title: "Program dla warsztatów dedykowany dla sieci OneSerwis",
        textList: [
          "Baza danych klientów",
          "Baza danych pojazdów",
          "Historia napraw",
          "Magazyn i fakturowanie",
          "Kalendarz zleceń",
          "Bez limitu ilość magazynów przypisanych do warztatu",
          "Bez limitu ilość stanowisk (doradców serwisowych i techników)",
          "Video Obsługa Klienta",
          "Powiadomienia SMS, E-mail",
        ],
        img: "program",
      },
    ],
  },
  reklama: {
    name: "Strona WWW, obrandowanie, kampanie reklamowe",
    items: [
      {
        title: "Strona WWW",
        textList: [
          "Strona zawierająca podstawowe informacje jak kontakt, cennik, zakres usług",
          "Do każdej strony jest podpięty aplikacja Messenger, aby ułatwić komunikację z klientem",
          "Serwis możemy prowadzić my za dodatkową opłatą",
        ],
        img: "wwwDetails",
      },
      {
        title: "Promocja w mediach społecznościowych",
        textList: [
          "Promocja warsztatów oneserwis jest sponsorowana w miastach, w którycn funkcjonuje OneSerwis",
          "Materiały będą opłacane przez nas - sponsorowane grafiki i filmy mające na celu zwiększenie liczby klientów",
        ],
        img: "media",
        reverse: "reverse",
      },
      {
        title: "Google Advertising",
        textList: [
          "Kampanie reklamowe w Google Ads będą przez nas realizowane i przypisane indywidualnie do danego warsztatu",
          "Kampania reklamowa  jest przez nas finansowana",
        ],
        img: "google",
      },
      {
        title: "Obrandowanie ",
        textList: [
          "Zapewniamy koszulki, koszule, kamizelki, kurtki z logo i wizualizacją OneSerwis, zależnie od pakietu dołączenia do OneSerwis",
        ],
        img: "branding",
        reverse: "reverse",
      },
    ],
  },
};
