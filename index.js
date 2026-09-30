import "./index.css";

const COOKIE_CONSENT_KEY = "cookieConsentAccepted";

const initCookieConsent = () => {
  const cookieConsent = document.querySelector(".cookie-consent");
  const cookieButton = document.querySelector(".cookie-consent__button");

  if (!cookieConsent || !cookieButton) {
    return;
  }

  const isAccepted = localStorage.getItem(COOKIE_CONSENT_KEY) === "true";

  if (isAccepted) {
    cookieConsent.classList.add("hide");
    return;
  }

  cookieConsent.classList.remove("hide");

  cookieButton.addEventListener("click", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    cookieConsent.classList.add("hide");
  });
};

document.addEventListener("DOMContentLoaded", initCookieConsent);
