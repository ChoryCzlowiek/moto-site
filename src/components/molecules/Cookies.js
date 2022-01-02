import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default function CookiesBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Akceptuję"
            cookieName="OneSerwis"
            style={{
                background: "#13182c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            buttonStyle={{
                background: "#e24115",
                color: "#13182c",
                fontFamily: "Roboto",
                fontSize: "16px"
            }}
            expires={150}
        >
            Ta strona wykorzystuje pliki cookie.
            Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia
            maksymalnej wygody w korzystaniu z naszego serwisu. Mogą też korzystać
            z nich współpracujące z nami firmy badawcze oraz reklamowe. Jeżeli wyrażasz
            zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo;
            w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące
            plików cookies możesz zmienić w swojej przeglądarce.{" "}
        </CookieConsent>
    )
}