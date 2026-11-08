import emailjs from "@emailjs/browser";

export const EMAIL = {
  service: "service_wrh592n",
  template: "template_pvmag3p",
  publicKey: "UKVaAOhn3-2Alft8F",
};

const REPORTED_AT = "visit-reported-at";
const ONE_DAY = 24 * 60 * 60 * 1000;

// ponytail: one email per browser per day, because these use the same EmailJS
// quota as the contact form. Move to server-side analytics if traffic outgrows it.
export async function reportVisit() {
  if (
    process.env.NODE_ENV !== "production" ||
    navigator.webdriver ||
    navigator.globalPrivacyControl
  ) {
    return;
  }

  try {
    if (Date.now() - Number(localStorage.getItem(REPORTED_AT)) < ONE_DAY) return;
    localStorage.setItem(REPORTED_AT, Date.now());

    const geo = await (await fetch("https://ipapi.co/json/")).json();
    if (geo.error || !geo.city) return;

    const place = [geo.city, geo.region, geo.country_name].filter(Boolean).join(", ");
    await emailjs.send(
      EMAIL.service,
      EMAIL.template,
      {
        user_name: "Portfolio visitor",
        user_email: "sahilpawar9764@gmail.com", // the template needs a valid address here
        subject: `New visitor from ${place}`,
        message: `Approximate location: ${place}\nNetwork: ${geo.org || "Unknown"}`,
      },
      EMAIL.publicKey
    );
  } catch {
    // Reporting a visit must never affect the page.
  }
}
