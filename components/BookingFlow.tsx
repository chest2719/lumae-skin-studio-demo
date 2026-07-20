"use client";

import { ArrowLeft, ArrowRight, Check, Clock, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
};

const services: Service[] = [
  {
    id: "skin-start",
    title: "Skin Start",
    description: "Hautanalyse, individuell abgestimmtes Facial und persönlicher Plan.",
    duration: "90 Minuten",
    price: "139 €",
  },
  {
    id: "consultation",
    title: "Skin Consultation",
    description: "Persönliche Hautanalyse ohne anschließendes Treatment.",
    duration: "45 Minuten",
    price: "69 €",
  },
  {
    id: "barrier",
    title: "Barrier Recovery Facial",
    description: "Für sensible, gerötete oder überpflegte Haut.",
    duration: "75 Minuten",
    price: "139 €",
  },
];

const dates = ["Di, 28. Juli", "Mi, 29. Juli", "Fr, 31. Juli", "Sa, 01. August"];
const times = ["09:30", "11:30", "14:00", "16:30"];

export function BookingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState("skin-start");
  const [date, setDate] = useState(dates[0]);
  const [time, setTime] = useState(times[1]);
  const [details, setDetails] = useState({ firstName: "", lastName: "", email: "", phone: "", note: "" });

  const service = useMemo(() => services.find((item) => item.id === serviceId) ?? services[0], [serviceId]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 4) {
      setStep((value) => value + 1);
      return;
    }
    sessionStorage.setItem(
      "lumae-booking",
      JSON.stringify({ service, date, time, details }),
    );
    router.push("/buchen/bestaetigt");
  }

  return (
    <div className="booking-layout">
      <div className="booking-main">
        <div className="booking-progress" aria-label={`Schritt ${step} von 4`}>
          {["Leistung", "Termin", "Angaben", "Prüfen"].map((label, index) => (
            <div className={index + 1 <= step ? "is-complete" : ""} key={label}>
              <span>{index + 1}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <fieldset className="booking-step">
              <legend>Was möchtest du buchen?</legend>
              <p>Zum ersten Mal bei Lumae? Skin Start ist der vollständige Einstieg – ohne vorher ein Treatment auswählen zu müssen.</p>
              <div className="service-options">
                {services.map((item) => (
                  <label className={`service-option ${serviceId === item.id ? "is-selected" : ""}`} key={item.id}>
                    <input
                      type="radio"
                      name="service"
                      value={item.id}
                      checked={serviceId === item.id}
                      onChange={() => setServiceId(item.id)}
                    />
                    <span>
                      <strong>{item.title}</strong>
                      {item.id === "skin-start" && <em>Empfohlen für Neukundinnen</em>}
                    </span>
                    <p>{item.description}</p>
                    <div>
                      <span><Clock size={16} aria-hidden="true" /> {item.duration}</span>
                      <span>{item.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="booking-step">
              <legend>Wähle deinen Termin.</legend>
              <p>Die angezeigte Zeit enthält Behandlung und Abschlussgespräch.</p>
              <div className="date-grid">
                {dates.map((item) => (
                  <label className={date === item ? "is-selected" : ""} key={item}>
                    <input type="radio" name="date" value={item} checked={date === item} onChange={() => setDate(item)} />
                    {item}
                  </label>
                ))}
              </div>
              <h2>Verfügbare Zeiten</h2>
              <div className="time-grid">
                {times.map((item) => (
                  <label className={time === item ? "is-selected" : ""} key={item}>
                    <input type="radio" name="time" value={item} checked={time === item} onChange={() => setTime(item)} />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <div className="booking-step">
              <h1>Wie können wir dich erreichen?</h1>
              <p>Eine ausführliche Hautanamnese erfolgt später persönlich und geschützt im Studio.</p>
              <div className="form-grid">
                <label>
                  Vorname
                  <input required value={details.firstName} onChange={(event) => setDetails({ ...details, firstName: event.target.value })} autoComplete="given-name" />
                </label>
                <label>
                  Nachname
                  <input required value={details.lastName} onChange={(event) => setDetails({ ...details, lastName: event.target.value })} autoComplete="family-name" />
                </label>
                <label>
                  E-Mail-Adresse
                  <input type="email" required value={details.email} onChange={(event) => setDetails({ ...details, email: event.target.value })} autoComplete="email" />
                </label>
                <label>
                  Telefonnummer
                  <input type="tel" required value={details.phone} onChange={(event) => setDetails({ ...details, phone: event.target.value })} autoComplete="tel" />
                </label>
                <label className="form-full">
                  Hinweise zu deiner Haut oder deinem Termin <span>(optional)</span>
                  <textarea value={details.note} onChange={(event) => setDetails({ ...details, note: event.target.value })} rows={5} placeholder="Zum Beispiel aktuelle Reizungen oder bekannte Unverträglichkeiten." />
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="booking-step review-step">
              <h1>Prüfe deine Buchung.</h1>
              <div className="review-list">
                <div><span>Leistung</span><strong>{service.title}</strong></div>
                <div><span>Termin</span><strong>{date}, {time} Uhr</strong></div>
                <div><span>Dauer</span><strong>{service.duration}</strong></div>
                <div><span>Preis</span><strong>{service.price}</strong></div>
                <div><span>Name</span><strong>{details.firstName} {details.lastName}</strong></div>
                <div><span>E-Mail</span><strong>{details.email}</strong></div>
              </div>
              <label className="consent">
                <input type="checkbox" required />
                <span>Ich habe die Demo-Stornierungsbedingungen gelesen und akzeptiere sie.</span>
              </label>
            </div>
          )}

          <div className="booking-controls">
            {step > 1 ? (
              <button className="button button-secondary" type="button" onClick={() => setStep((value) => value - 1)}>
                <ArrowLeft size={17} aria-hidden="true" /> Zurück
              </button>
            ) : <span />}
            <button className="button button-primary" type="submit">
              {step === 4 ? <><Check size={17} aria-hidden="true" /> Termin verbindlich buchen</> : <>Weiter <ArrowRight size={17} aria-hidden="true" /></>}
            </button>
          </div>
        </form>
      </div>

      <aside className="booking-summary">
        <p className="eyebrow">Deine Auswahl</p>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <div><Clock aria-hidden="true" /><span>{service.duration}</span></div>
        <div><MapPin aria-hidden="true" /><span>Lumae Skin Studio · Leipzig</span></div>
        <dl>
          <div><dt>Termin</dt><dd>{date}<br />{time} Uhr</dd></div>
          <div><dt>Preis</dt><dd>{service.price}</dd></div>
        </dl>
        <small>Dies ist ein funktionaler Demo-Buchungsflow. Es wird kein echter Termin reserviert.</small>
      </aside>
    </div>
  );
}
