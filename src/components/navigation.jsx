import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand page-scroll">
            <img
              src="/logo.png"
              alt="Ventures Logo"
              style={{ maxHeight: "50px" }}
            />
          </Link>
        </div>

        <div
          className="navbar-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Dil Butonları */}
          <div className="language-switcher" style={{ display: "flex", gap: "5px" }}>
            <button
              onClick={() => changeLanguage("tr")}
              style={{
                ...langButtonStyle,
                opacity: i18n.language === "tr" ? 1 : 0.7,
              }}
            >
              TR
            </button>
            <button
              onClick={() => changeLanguage("en")}
              style={{
                ...langButtonStyle,
                opacity: i18n.language === "en" ? 1 : 0.7,
              }}
            >
              EN
            </button>
          </div>

          {/* Bize Ulaşın Butonu */}
          <ul className="nav navbar-nav">
            <li>
              <Link to="/iletisim" className="btn btn-contact">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// 🔘 Gradient Renkli Şık Buton Stili
const langButtonStyle = {
  background: "linear-gradient(135deg, #1f3c88, #6f42c1)",
  border: "none",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "opacity 0.3s ease",
};
