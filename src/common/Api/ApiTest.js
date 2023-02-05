import axios from "axios";

const keyToken = "Token c400dceec0542e36b4f4bc4b69ef8a237a5951b6";

export default {
  async get(dir, cb, errorCb) {
    await axios
      .get(apiTest + dir, {
        headers: {
          Accept: "application/json",
          authorization: keyToken,
        },
      })
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
  async post(payload, dir, cb, errorCb) {
    await axios
      .post(apiTest + dir, payload, {
        headers: {
          Accept: "application/json",
          authorization: keyToken,
        },
      })
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
  async put(payload, dir, cb, errorCb) {
    await axios
      .put(apiTest + dir, payload, {
        headers: {
          Accept: "application/json",
          authorization: keyToken,
        },
      })
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
};