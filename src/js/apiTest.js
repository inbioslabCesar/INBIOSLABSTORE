const url = "../src/data/data.json";

export const getTest = async () => {
  const resp = await fetch(url);
  console.log(resp.url);
  const data = await resp.json();
  return data;
};
