import { APIMethod } from "../enum";

export const callAPI = async (accessToken, method, apiController, bodyData) => {
  try {
    console.log(`API call: ${apiController} - ${method} - value: ${JSON.stringify(bodyData)}`);
    const res = await fetch(`${process.env.LANCER_PUBLIC_API_URL}${apiController}`, {
      cache: "no-store",
      method: method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: bodyData && JSON.stringify(bodyData),
    });

    console.log(`API call response: ${apiController} - ${method} - ${res.status}`);
    if (res.status >= 400) {
      console.log(res);
      throw new Error("Failed to fetch data");
    }
    else {
      if (method === APIMethod.PUT || method === APIMethod.DELETE) {
        return res;
      } else {
        return res.json();
      }
    }    
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const postFormToAPI = async (accessToken, method, apiController, formData) => {
  try {
    console.log(`API call: ${apiController} - ${method} - value: ${formData}`);
    const res = await fetch(`${process.env.LANCER_PUBLIC_API_URL}${apiController}`, {
      cache: "no-store",
      method: method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    console.log(`API call response: ${apiController} - ${method} - ${res.status}`);
    if (res.status >= 400) {
      console.log(res);
      throw new Error("Failed to fetch data");
    }
    else {
      if (method === APIMethod.PUT || method === APIMethod.DELETE) {
        return res;
      } else {
        return res.json();
      }
    }    
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export const createGuid = function () {
  var chars = "0123456789abcdef".split("");

  var uuid = [];
  var rnd = Math.random;
  var r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
  uuid[14] = "4";

  for (var i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | (rnd() * 16);
      uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r & 0xf];
    }
  }

  return uuid.join("");
};

export const createTimeId = function () {
  const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ss = d.getMilliseconds();

return `-${h}${m}${s}${ss}`
}
