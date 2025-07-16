const API_KEY = 'AIzaSyAKtNdBbjB9zm4dDs8grKPsHNbIowmxx6Y'; // ⚠️ Warning: Not secure, use only for testing
const MODEL = "gemini-2.5-flash";


const runChat = async (prompt) => {
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (err) {
    console.error("Error in runChat:", err);
    return "Something went wrong.";
  }
};

export default runChat;
