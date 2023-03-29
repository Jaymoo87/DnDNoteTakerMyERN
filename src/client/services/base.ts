import storage from "../utilities/storage";

const makeFetch = (url: string, info: any) => {
  return fetch(url, info);
};

const json = async (url: string, method: string, body?: { [key: string]: string }) => {
  const TOKEN = storage.getToken();
  const headers = {
    "Content-Type": "application/json",
  };
  if (TOKEN) {
    headers["Authorization"] = `Bearer ${TOKEN}`;
  }
  const data = {
    method,
    headers,
    body: JSON.stringify(body),
  };

  if (method !== "POST" && method !== "PUT") {
    delete headers["Content-Type"];
    delete data.body;
  }

  try {
    const fetchResponse = await makeFetch(url, data);
    const response = await fetchResponse.json();

    if (fetchResponse.ok) {
      return response;
    } else {
      throw new Error(response.error || response.message || "something went wrong");
    }
  } catch (error) {
    throw error;
  }
};
const get = (url: string) => {
  return json(url, "GET");
};

const post = (url: string, payload: { [key: string]: string }) => {
  return json(url, "POST", payload);
};

const update = (url: string, payload: { [key: string]: string }) => {
  return json(url, "PUT", payload);
};
const destroy = (url: string) => {
  return json(url, "DELETE");
};

export default {
  get,
  post,
  update,
  destroy,
};
