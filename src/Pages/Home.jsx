import { useState } from "react";
import heroImg from "../assets/hero.svg"; // put hero.svg in the same folder as Home.jsx
import aquaImg from "../assets/aqua-north.png"; // put aqua-north.png in the same folder as Home.jsx
import petro1 from "../assets/petrogreen-1.jpg"; // put petrogreen-1.jpg in the same folder as Home.jsx
import petro2 from "../assets/petrogreen-2.jpg"; // put petrogreen-2.jpg in the same folder as Home.jsx
import petro3 from "../assets/petrogreen-3.jpg"; // put petrogreen-3.jpg in the same folder as Home.jsx
import petro4 from "../assets/petrogreen-4.jpg"; // put petrogreen-4.jpg in the same folder as Home.jsx
import batirol1 from "../assets/batirol-1.jpg"; // put batirol-1.jpg in the same folder as Home.jsx
import batirol2 from "../assets/batirol-2.jpg"; // put batirol-2.jpg in the same folder as Home.jsx
import batirol3 from "../assets/batirol-3.jpg"; // put batirol-3.jpg in the same folder as Home.jsx
import batirol4 from "../assets/batirol-4.jpg"; // put batirol-4.jpg in the same folder as Home.jsx

const DELIVERY = [
  { network: "Smart", number: "0939 644 8312", tel: "+639396448312", color: "#2a9d8f" },
  { network: "Globe", number: "0954 105 1454", tel: "+639541051454", color: "#1d6fd8" },
];

const ADDRESS = "4387 New York St., Don Cornelio Subd., Dau, Mabalacat City, Pampanga";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("4387 New York St, Don Cornelio Subdivision, Dau, Mabalacat City, Pampanga");

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Load & SIM", href: "#load" },
  { label: "Why AdelCom", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  { icon: "🍜", title: "Instant Noodles & Canned Goods", text: "Pancit canton, sardines, corned beef and more for quick meals." },
  { icon: "🥤", title: "Drinks & Refreshments", text: "Softdrinks, juice, bottled water, and 3-in-1 coffee sachets." },
  { icon: "🍪", title: "Snacks & Candies", text: "Chichirya, biscuits, candies and chocolates for the kids and kids-at-heart." },
  { icon: "🧼", title: "Household Essentials", text: "Sabon, shampoo sachets, detergent, toothpaste and tingi-tingi needs." },
  { icon: "🍚", title: "Rice, Sugar & Cooking Basics", text: "Bigas, asukal, mantika, toyo, suka and other kitchen staples." },
  { icon: "🥚", title: "Eggs & Everyday Items", text: "Fresh daily essentials you can grab without going far." },
];

const LOAD = [
  { name: "Smart", note: "Regular load, data & promos", color: "#2a9d8f" },
  { name: "Globe", note: "Regular load, GoSURF & promos", color: "#1d6fd8" },
  { name: "TNT / TM", note: "Budget load and promo codes", color: "#e67e22" },
  { name: "Other SIMs", note: "Ask us about other networks", color: "#8e44ad" },
];

const WHY = [
  { icon: "⚡", title: "Fast Loading", text: "Load goes through in seconds. No long queue." },
  { icon: "💸", title: "Tingi Prices", text: "Buy only what you need, at honest prices." },
  { icon: "📍", title: "Near You", text: "Your friendly neighborhood store, always close by." },
  { icon: "🤝", title: "Suki Service", text: "Friendly service for every suki, every day." },
];

const PETRO_IMAGES = [
  { src: petro1, alt: "Petrogreen Fiber Tank LPG, front view" },
  { src: petro2, alt: "Petrogreen Fiber Tank LPG, side view" },
  { src: petro3, alt: "Petrogreen Fiber Tank LPG, top view" },
  { src: petro4, alt: "Petrogreen Fiber Tank LPG, with regulator" },
];

const BATIROL_IMAGES = [
  { src: batirol1, alt: "Cold Brew Batirol bottles in five flavors" },
  { src: batirol2, alt: "Cold Brew Batirol Original flavor bottle" },
  { src: batirol3, alt: "Cold Brew Batirol served over ice" },
  { src: batirol4, alt: "Nang Del's Tsokolateng Batirol store sign" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [petroIdx, setPetroIdx] = useState(0);
  const [batirolIdx, setBatirolIdx] = useState(0);
  const close = () => setOpen(false);

  return (
    <div className="adc" id="home">
      <style>{css}</style>

      <div className="adc-topbar">
        💧 Purified drinking water delivery · 📱 Load for Smart, Globe & all SIMs
      </div>

      <header className="adc-nav">
        <a href="#home" className="adc-logo" onClick={close}>
          <span className="adc-logo-mark">A</span>
          <span>Adel<span className="adc-accent">Com</span></span>
        </a>
        <button className="adc-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`adc-links ${open ? "show" : ""}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
          <a href="#contact" className="adc-btn adc-btn-small" onClick={close}>Visit Us</a>
        </nav>
      </header>

      {/* Hero / banner */}
      <section className="adc-hero">
        <div>
          <span className="adc-pill">🏪 Sari-Sari Store · E-Load · SIM Cards</span>
          <h1>
            Everything you need,<br />
            <span className="adc-hl">one stop</span> away.
          </h1>
          <p>
            AdelCom is your neighborhood sari-sari store with fast and reliable
            load for Smart, Globe and more. Groceries, snacks and SIMs, all in
            one friendly place.
          </p>
          <div className="adc-cta-row">
            <a href="#products" className="adc-btn">Shop Our Products</a>
            <a href="#load" className="adc-btn adc-btn-outline">Get Load / SIM</a>
          </div>
          <ul className="adc-stats">
            <li><strong>100+</strong><span>Items in store</span></li>
            <li><strong>Fast</strong><span>E-load service</span></li>
            <li><strong>Daily</strong><span>Open for suki</span></li>
          </ul>
        </div>
        <div className="adc-hero-visual">
          <img src={heroImg} alt="AdelCom sari-sari store" className="adc-hero-art" />
        </div>
      </section>

      {/* Load & SIM */}
      <section className="adc-load" id="load">
        <div className="adc-head light">
          <span className="adc-eyebrow">Load & SIM Cards</span>
          <h2>Load up in seconds</h2>
          <p>Regular load, data promos and SIM cards for your favorite networks.</p>
        </div>
        <div className="adc-load-grid">
          {LOAD.map((l) => (
            <div className="adc-load-card" key={l.name} style={{ "--c": l.color }}>
              <div className="adc-chip" aria-hidden="true" />
              <h3>{l.name}</h3>
              <p>{l.note}</p>
            </div>
          ))}
        </div>
        <p className="adc-load-note">Available loads: ₱10 · ₱20 · ₱50 · ₱100 · ₱300 and promo codes. Just tell us your number!</p>
      </section>

      {/* Products */}
      <section className="adc-section" id="products">
        <div className="adc-head">
          <span className="adc-eyebrow">Our products</span>
          <h2>Clean water, delivered to your door</h2>
          <p>Our first product is purified drinking water. Just call or text and we'll bring it to you.</p>
        </div>

        {/* Featured product: Aqua North */}
        <div className="adc-feature">
          <div className="adc-feature-media">
            <span className="adc-badge">💧 Product #1</span>
            <img src={aquaImg} alt="Aqua North Purified Drinking Water" />
          </div>
          <div className="adc-feature-body">
            <span className="adc-eyebrow">Featured product</span>
            <h3>Aqua North Purified Drinking Water</h3>
            <p>
              Refreshing purified drinking water for your home, office or store.
              Order by call or text and we deliver.
            </p>
            <ul className="adc-checks">
              <li>Purified drinking water</li>
              <li>Delivery available</li>
              <li>Easy ordering by call or text</li>
            </ul>

            <div className="adc-order">
              <h4>🚚 For deliveries, please call or text:</h4>
              <div className="adc-numbers">
                {DELIVERY.map((d) => (
                  <div className="adc-num" key={d.network} style={{ "--c": d.color }}>
                    <span className="adc-net">{d.network}</span>
                    <strong>{d.number}</strong>
                    <div className="adc-num-btns">
                      <a href={`tel:${d.tel}`} className="adc-btn adc-btn-small">📞 Call</a>
                      <a href={`sms:${d.tel}`} className="adc-btn adc-btn-small adc-btn-outline">💬 Text</a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="adc-addr">
                📍 {ADDRESS}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="adc-feature rev">
          <div className="adc-feature-media adc-gallery">
            <span className="adc-badge">🔥 Product #2</span>
            <img
              className="adc-gallery-main"
              src={PETRO_IMAGES[petroIdx].src}
              alt={PETRO_IMAGES[petroIdx].alt}
            />
            <div className="adc-thumbs">
              {PETRO_IMAGES.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`adc-thumb ${i === petroIdx ? "active" : ""}`}
                  onClick={() => setPetroIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={img.src} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="adc-feature-body">
            <span className="adc-eyebrow">Featured product</span>
            <h3>Petrogreen Fiber Tank LPG</h3>
            <p>
              Petrogreen fiber tank LPG for your kitchen, carinderia or small business.
              Call or text us to order and arrange delivery.
            </p>
            <ul className="adc-checks">
              <li>Fiber tank LPG</li>
              <li>Delivery available</li>
              <li>Easy ordering by call or text</li>
            </ul>

            <div className="adc-order">
              <h4>🚚 For deliveries, please call or text:</h4>
              <div className="adc-numbers">
                {DELIVERY.map((d) => (
                  <div className="adc-num" key={d.network} style={{ "--c": d.color }}>
                    <span className="adc-net">{d.network}</span>
                    <strong>{d.number}</strong>
                    <div className="adc-num-btns">
                      <a href={`tel:${d.tel}`} className="adc-btn adc-btn-small">📞 Call</a>
                      <a href={`sms:${d.tel}`} className="adc-btn adc-btn-small adc-btn-outline">💬 Text</a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="adc-addr">
                📍 {ADDRESS}{" "}
              </p>
            </div>
          </div>
        </div>

            <div className="adc-feature-media adc-gallery adc-batirol-media">
            <span className="adc-badge">🍫 Product #3</span>
            <img
              className="adc-gallery-main adc-batirol-img"
              src={BATIROL_IMAGES[batirolIdx].src}
              alt={BATIROL_IMAGES[batirolIdx].alt}
            />
            <div className="adc-thumbs">
              {BATIROL_IMAGES.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`adc-thumb ${i === batirolIdx ? "active" : ""}`}
                  onClick={() => setBatirolIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={img.src} alt="" />
                </button>
              ))}
            </div>
          </div>

        <div className="adc-subhead">
          <span className="adc-eyebrow">Also at our store</span>
          <h3>Your everyday sari-sari needs</h3>
          <p>From breakfast to baon to bedtime snacks, we've got you covered.</p>
        </div>
        <div className="adc-grid">
          {PRODUCTS.map((p) => (
            <article className="adc-card" key={p.title}>
              <div className="adc-card-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="adc-section alt" id="why">
        <div className="adc-head">
          <span className="adc-eyebrow">Why AdelCom</span>
          <h2>Small store, big service</h2>
        </div>
        <div className="adc-grid four">
          {WHY.map((w) => (
            <div className="adc-why" key={w.title}>
              <div className="adc-why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="adc-cta" id="contact">
        <h2>Order your water today!</h2>
        <p>Need purified drinking water, load, a SIM card or a quick snack? Call or text us and we'll take care of you.</p>
        <div className="adc-cta-row center">
          {DELIVERY.map((d) => (
            <a key={d.network} href={`tel:${d.tel}`} className="adc-btn adc-btn-light">
              📞 {d.network}: {d.number}
            </a>
          ))}
        </div>
        <small>📍 {ADDRESS}</small>
      </section>

      <footer className="adc-footer">
        <div className="adc-logo">
          <span className="adc-logo-mark">A</span>
          <span>Adel<span className="adc-accent">Com</span></span>
        </div>
        <p>© {new Date().getFullYear()} AdelCom · Sari-Sari Store & E-Load</p>
      </footer>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap');

.adc {
  --navy: #1b3a4b; --red: #e63946; --red-dark: #c1121f; --yellow: #ffc233;
  --cream: #fff8ec; --text: #2b3a42; --radius: 18px;
  font-family: "Nunito", system-ui, sans-serif; color: var(--text); line-height: 1.6; background: #fff;
}
.adc *, .adc *::before, .adc *::after { box-sizing: border-box; }
.adc h1, .adc h2, .adc h3, .adc p { margin: 0; }
.adc h1, .adc h2, .adc h3, .adc-logo { font-family: "Baloo 2", "Nunito", sans-serif; line-height: 1.15; color: var(--navy); }
.adc a { text-decoration: none; color: inherit; }
html { scroll-behavior: smooth; }
.adc section[id] { scroll-margin-top: 80px; }

.adc-topbar { background: var(--navy); color: var(--yellow); text-align: center; font-size: .85rem; font-weight: 700; padding: 8px 16px; }

.adc-nav { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 12px 5vw; background: rgba(255,255,255,.95); backdrop-filter: blur(8px); border-bottom: 1px solid #f0e6d3; }
.adc-logo { display: flex; align-items: center; gap: 10px; font-size: 1.6rem; font-weight: 800; }
.adc-logo-mark { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 12px; background: var(--red); color: #fff; font-size: 1.4rem; box-shadow: 3px 3px 0 var(--navy); }
.adc-accent { color: var(--red); }
.adc-links { display: flex; align-items: center; gap: 26px; font-weight: 700; }
.adc-links a:not(.adc-btn):hover { color: var(--red); }
.adc-burger { display: none; background: none; border: 0; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
.adc-burger span { width: 26px; height: 3px; background: var(--navy); border-radius: 2px; }

.adc-btn { display: inline-block; background: var(--red); color: #fff !important; font-weight: 800; padding: 14px 28px; border-radius: 999px; border: 3px solid var(--navy); box-shadow: 4px 4px 0 var(--navy); transition: transform .15s, box-shadow .15s; cursor: pointer; }
.adc-btn:hover { transform: translate(2px,2px); box-shadow: 2px 2px 0 var(--navy); }
.adc-btn-small { padding: 8px 20px; font-size: .95rem; }
.adc-btn-outline { background: #fff; color: var(--navy) !important; }
.adc-btn-light { background: var(--yellow); color: var(--navy) !important; }
.adc-btn-ghost { background: transparent; border-color: #fff; box-shadow: 4px 4px 0 rgba(255,255,255,.35); }

.adc-hero { display: grid; grid-template-columns: 1.05fr 1fr; align-items: center; gap: 40px; padding: 64px 5vw 80px;
  background: radial-gradient(circle at 90% 10%, #ffe9b8 0, transparent 40%), radial-gradient(circle at 0% 100%, #ffd9dc 0, transparent 35%), var(--cream); }
.adc-pill { display: inline-block; background: #fff; border: 2px solid var(--navy); padding: 6px 16px; border-radius: 999px; font-weight: 700; font-size: .9rem; margin-bottom: 18px; }
.adc-hero h1 { font-size: clamp(2.4rem, 5.5vw, 4.2rem); font-weight: 800; margin-bottom: 18px; }
.adc-hl { color: var(--red); position: relative; white-space: nowrap; z-index: 0; }
.adc-hl::after { content: ""; position: absolute; left: 0; right: 0; bottom: 2px; height: 14px; background: var(--yellow); z-index: -1; border-radius: 6px; }
.adc-hero p { font-size: 1.15rem; max-width: 540px; margin-bottom: 28px; }
.adc-cta-row { display: flex; gap: 16px; flex-wrap: wrap; }
.adc-cta-row.center { justify-content: center; }
.adc-stats { list-style: none; display: flex; gap: 34px; margin: 36px 0 0; padding: 0; }
.adc-stats strong { display: block; font-family: "Baloo 2", sans-serif; font-size: 1.7rem; color: var(--red); line-height: 1; }
.adc-stats span { font-size: .85rem; font-weight: 600; }
.adc-hero-art { width: 100%; height: auto; display: block; filter: drop-shadow(0 18px 24px rgba(27,58,75,.18)); animation: adc-float 5s ease-in-out infinite; }
@keyframes adc-float { 50% { transform: translateY(-8px); } }

.adc-section { padding: 84px 5vw; }
.adc-section.alt { background: var(--cream); }
.adc-head { text-align: center; max-width: 640px; margin: 0 auto 48px; }
.adc-head h2 { font-size: clamp(1.9rem, 4vw, 2.7rem); font-weight: 800; margin-bottom: 10px; }
.adc-eyebrow { display: inline-block; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; font-size: .8rem; color: var(--red); margin-bottom: 8px; }
.adc-head.light h2, .adc-head.light p { color: #fff; }
.adc-head.light .adc-eyebrow { color: var(--yellow); }

.adc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
.adc-grid.four { grid-template-columns: repeat(4, 1fr); }
.adc-card { background: #fff; border: 3px solid var(--navy); border-radius: var(--radius); padding: 28px; box-shadow: 6px 6px 0 var(--navy); transition: transform .2s, box-shadow .2s; }
.adc-card:hover { transform: translate(-3px,-3px); box-shadow: 9px 9px 0 var(--red); }
.adc-card-icon { font-size: 2.4rem; margin-bottom: 10px; }
.adc-card h3 { font-size: 1.3rem; margin-bottom: 6px; }

.adc-why { text-align: center; padding: 10px; }
.adc-why-icon { width: 72px; height: 72px; margin: 0 auto 14px; display: grid; place-items: center; font-size: 2rem; background: #fff; border: 3px solid var(--navy); border-radius: 50%; box-shadow: 4px 4px 0 var(--yellow); }
.adc-why h3 { font-size: 1.2rem; }

.adc-load { background: var(--navy); padding: 84px 5vw; }
.adc-load-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }
.adc-load-card { position: relative; background: var(--c); color: #fff; border-radius: var(--radius); padding: 26px 22px; min-height: 170px; border: 3px solid #fff; overflow: hidden; }
.adc-load-card h3 { color: #fff; font-size: 1.7rem; margin-top: 40px; }
.adc-load-card p { font-size: .95rem; opacity: .95; }
.adc-chip { position: absolute; top: 18px; left: 22px; width: 42px; height: 30px; border-radius: 6px; background: linear-gradient(135deg, #ffe08a, #e9a800); border: 2px solid rgba(0,0,0,.35); }
.adc-chip::after { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 2px; background: rgba(0,0,0,.35); }
.adc-load-note { text-align: center; color: #cfe1ea; margin-top: 30px; font-weight: 600; }

.adc-cta { text-align: center; padding: 84px 5vw; color: #fff; background: linear-gradient(135deg, var(--red), var(--red-dark)); }
.adc-cta h2 { color: #fff; font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; }
.adc-cta p { margin: 10px auto 28px; max-width: 520px; font-size: 1.1rem; }
.adc-cta small { display: block; margin-top: 22px; opacity: .75; }

.adc-footer { background: var(--navy); color: #cfe1ea; padding: 28px 5vw; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.adc-footer .adc-logo, .adc-footer .adc-logo span { color: #fff; font-size: 1.3rem; }
.adc-footer .adc-accent { color: var(--yellow); }
.adc-footer .adc-logo-mark { box-shadow: 3px 3px 0 var(--yellow); }

@media (max-width: 900px) {
  .adc-hero { grid-template-columns: 1fr; text-align: center; padding-top: 40px; }
  .adc-hero p { margin-inline: auto; }
  .adc-cta-row, .adc-stats { justify-content: center; }
  .adc-hero-visual { order: -1; max-width: 460px; margin: 0 auto; }
  .adc-grid, .adc-grid.four, .adc-load-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 720px) {
  .adc-burger { display: flex; }
  .adc-links { position: absolute; top: 100%; left: 0; right: 0; background: #fff; flex-direction: column; padding: 20px; gap: 16px; border-bottom: 1px solid #f0e6d3; display: none; }
  .adc-links.show { display: flex; }
}
@media (max-width: 520px) {
  .adc-grid, .adc-grid.four, .adc-load-grid { grid-template-columns: 1fr; }
  .adc-stats { gap: 20px; }
  .adc-section, .adc-load, .adc-cta { padding-block: 60px; }
}

/* Featured product: Aqua North */
.adc-feature { display: grid; grid-template-columns: 1.1fr 1fr; max-width: 1100px; margin: 0 auto 72px; background: #fff; border: 3px solid var(--navy); border-radius: 26px; box-shadow: 8px 8px 0 var(--navy); overflow: hidden; }
.adc-feature-media { position: relative; display: grid; place-items: center; padding: 56px 28px 28px; background: linear-gradient(160deg, #3d8bff, #1b57c9); }
.adc-feature-media img { width: 100%; height: auto; display: block; border-radius: 14px; border: 4px solid #fff; box-shadow: 0 14px 30px rgba(0,0,0,.28); }
.adc-badge { position: absolute; top: 16px; left: 16px; background: var(--yellow); color: var(--navy); font-weight: 800; font-size: .8rem; padding: 6px 14px; border-radius: 999px; border: 2px solid var(--navy); }
.adc-feature-body { padding: 36px; }
.adc-feature-body h3 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; margin-bottom: 10px; }
.adc-checks { list-style: none; margin: 18px 0 22px; padding: 0; display: grid; gap: 8px; font-weight: 700; }
.adc-checks li::before { content: "✓"; display: inline-grid; place-items: center; width: 22px; height: 22px; margin-right: 10px; border-radius: 50%; background: #2a9d8f; color: #fff; font-size: .8rem; }
.adc-order { background: var(--cream); border: 2px dashed var(--navy); border-radius: 18px; padding: 20px; }
.adc-order h4 { margin: 0 0 14px; font-family: "Baloo 2", sans-serif; font-size: 1.15rem; color: var(--navy); }
.adc-numbers { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.adc-num { background: #fff; border: 3px solid var(--navy); border-radius: 14px; padding: 12px; text-align: center; }
.adc-net { display: inline-block; background: var(--c); color: #fff; font-weight: 800; font-size: .75rem; letter-spacing: 1px; text-transform: uppercase; padding: 2px 12px; border-radius: 999px; }
.adc-num strong { display: block; font-family: "Baloo 2", sans-serif; font-size: 1.25rem; color: var(--navy); margin: 6px 0 10px; }
.adc-num-btns { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.adc-num-btns .adc-btn { padding: 6px 14px; box-shadow: 3px 3px 0 var(--navy); }
.adc-addr { margin-top: 14px; font-weight: 700; font-size: .95rem; }
.adc-addr a { color: var(--red); white-space: nowrap; }
.adc-subhead { text-align: center; max-width: 1100px; margin: 0 auto 28px; }
.adc-subhead h3 { font-size: 1.8rem; font-weight: 800; }

@media (max-width: 900px) {
  .adc-feature { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .adc-numbers { grid-template-columns: 1fr; }
  .adc-feature-body { padding: 24px; }
}
/* Product #2: photo gallery */
.adc-feature.rev { grid-template-columns: 1fr 1.1fr; }
.adc-feature.rev .adc-feature-media { order: 2; }
.adc-gallery { background: linear-gradient(160deg, #ff9a3c, #e63946); align-content: center; gap: 14px; }
.adc-gallery-main { aspect-ratio: 4 / 3; object-fit: cover; }
.adc-thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%; }
.adc-thumb { padding: 0; border: 3px solid #fff; border-radius: 10px; overflow: hidden; cursor: pointer; background: #fff; opacity: .7; transition: opacity .15s, transform .15s; }
.adc-thumb:hover { opacity: 1; transform: translateY(-2px); }
.adc-thumb.active { opacity: 1; border-color: var(--yellow); box-shadow: 0 0 0 2px var(--navy); }
.adc-thumb img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; }

@media (max-width: 900px) {
  .adc-feature.rev { grid-template-columns: 1fr; }
  .adc-feature.rev .adc-feature-media { order: 0; }
}
.adc-gallery.adc-batirol-media { background: linear-gradient(160deg, #8a5a3c, #4a2418); }
.adc-gallery-main.adc-batirol-img { aspect-ratio: 4 / 5; object-fit: cover; object-position: center 78%; }
`;