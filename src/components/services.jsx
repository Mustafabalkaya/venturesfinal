import React from "react";
import { useTranslation } from "react-i18next";
import serviceData from "../data/data.json";

export const Services = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const services = serviceData.Services;

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          {/* Başlık istiyorsan buraya t('services_title') gibi bir şey ekleyebiliriz */}
        </div>

        <div className="row">
          {services && services.length > 0 ? (
            services.map((service, i) => {
              const { icon } = service;
              const content = service[currentLang] || service["tr"];
              return (
                <div key={`${content.name}-${i}`} className="col-lg-4 col-md-4 col-sm-6 d-flex">
                  <div className="service-desc w-100">
                    <i className={icon}></i>
                    <h3>{content.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: content.text }}></p>
                  </div>
                </div>
              );
            })
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
