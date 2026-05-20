/**
 * AI Service Utility
 * Calls the local Express server to perform AI operations securely.
 */

export async function generateContent(prompt) {
  try {
    const response = await fetch("/api/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to generate content");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
}
