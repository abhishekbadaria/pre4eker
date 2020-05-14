import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "src/components/Loading/Loading";

import Button from "src/components/Button/Button";

import RequestSettings from "../RequestSettings/RequestSettings";

import style from "./RequestJSON.css";

const JsonInput = loadable(() => import("../JsonInput/JsonInput"), {
  fallback: <Loading />,
});

const RequestJSON = ({ requestJSON, handleSubmit, setRequestJSON }) => {
  const [body, setBody] = useState(JSON.stringify(requestJSON.body, null, 1));
  const [key, setKey] = useState(requestJSON.key);

  useEffect(() => {
    setRequestJSON({
      ...requestJSON,
      body: JSON.parse(body),
    });
  }, [body]);

  return (
    <>
      <div className={`${style.formGroup}`}>
        <RequestSettings
          setRequestJSON={setRequestJSON}
          requestJSON={requestJSON}
          setKey={setKey}
          keyValue={key}
        />
      </div>
      <div className={style.editorWrapper}>
        <JsonInput value={body} onChange={setBody} name="RequestBody" />
      </div>

      <Button
        action={() =>
          handleSubmit({
            ...requestJSON,
            key,
          })
        }
        type="TEXT"
        size="sizeFull"
      >
        Рассчитать скидки
      </Button>
    </>
  );
};

RequestJSON.defaultProps = {
  requestJSON: {},
};

RequestJSON.propTypes = {
  requestJSON: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  setRequestJSON: PropTypes.func.isRequired,
};

export default RequestJSON;
