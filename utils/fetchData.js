const apiToken = process.env.API_TOKEN;
const apiUrl = process.env.API_URL || "http://localhost:1337";

const fetcher = async (method, subUrl) => {
  console.log("Called");
  const url = `${apiUrl}/${subUrl}`;
  const config = {
    method,
    headers: {
      Authorization: "Bearer " + apiToken,
    },
  };
  const res = await fetch(url, config);
  const data = await res.json();
//   console.log(data);

  return data;
};

export default fetcher;
