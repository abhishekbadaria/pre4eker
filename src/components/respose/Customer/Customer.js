import React from "react";
import PropTypes from "prop-types";

import stylesShared from "src/components/respose/responseShared.css";
import Contact from "../Contact/Contact";
import statuses from "./statuses";
import sexes from "./sexes";
import CustomFields from "../CustomFields/CustomFields";

const Customer = ({ customer }) => {
  const {
    processingStatus,
    sex,
    birthDate,
    mobilePhone,
    pendingMobilePhone,
    isMobilePhoneInvalid,
    isMobilePhoneConfirmed,
    email,
    isEmailInvalid,
    isEmailConfirmed,
    pendingEmail,
    area,
    ianaTimeZone,
    timeZoneSource,
    customFields,
  } = customer;

  return (
    <div>
      <h2>Клиент</h2>
      <div className={stylesShared.customer}>
        <div className={stylesShared.line}>
          <div className={stylesShared.inline}>
            {(customer.firstName ||
              customer.middleName ||
              customer.lastName) && (
              <div className={stylesShared.half}>
                <div className={stylesShared.name}>ФИО</div>
                <div className={stylesShared.value}>
                  {customer.lastName} {customer.firstName} {customer.middleName}
                </div>
              </div>
            )}
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Статус обработки</div>
              <div className={stylesShared.value}>
                {statuses[processingStatus] || processingStatus}
              </div>
            </div>
          </div>
        </div>

        <div className={stylesShared.line}>
          <div className={stylesShared.inline}>
            {sex && (
              <div className={stylesShared.half}>
                <div className={stylesShared.name}>Пол</div>
                <div className={stylesShared.value}>{sexes[sex]}</div>
              </div>
            )}
            {birthDate && (
              <div className={stylesShared.half}>
                <div className={stylesShared.name}>Дата рождения</div>
                <div className={stylesShared.value}>{birthDate}</div>
              </div>
            )}
          </div>
        </div>

        <div className={stylesShared.line}>
          {mobilePhone && (
            <Contact
              label="Мобильный телефон"
              main={mobilePhone}
              invalid={isMobilePhoneInvalid}
              confirmed={isMobilePhoneConfirmed}
              pending={pendingMobilePhone}
            />
          )}
        </div>
        <div className={stylesShared.line}>
          {email && (
            <Contact
              label="Email"
              main={email}
              invalid={isEmailInvalid}
              confirmed={isEmailConfirmed}
              pending={pendingEmail}
            />
          )}
        </div>

        <div className={stylesShared.inline}>
          {area && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Зона</div>
              <div className={stylesShared.value}>{area.name}</div>
              <p className={`${stylesShared.neutral} ${stylesShared.status}`}>
                {area.ids.externalId}
              </p>
            </div>
          )}
          {ianaTimeZone && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Часовой пояс</div>
              <div className={stylesShared.value}>{ianaTimeZone}</div>
              <p className={`${stylesShared.neutral} ${stylesShared.status}`}>
                {timeZoneSource}
              </p>
            </div>
          )}
        </div>
        {customFields && <CustomFields data={customFields} />}
      </div>
    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object,
};

Customer.defaultProps = {
  customer: {},
};

export default Customer;
