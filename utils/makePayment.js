const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const makePayment = async (subUrl, payload) => {
  const url = `${apiUrl}/${subUrl}`;
  console.log(payload)
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

export default makePayment;
