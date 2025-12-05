// netlify/functions/decode.js
export default async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const { data } = JSON.parse(event.body || "{}");
  if (data == null || isNaN(data)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid input" }) };
  }
  let n = parseFloat(data);
  // 示例算法，仅作演示（请替换为你的真实逻辑）
  for (let i = 0; i < 7; i++) {
    n = (n * 823 + 778899) % 31234;
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ output: Math.round(n) })
  };
}
