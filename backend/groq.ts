import Groq from "groq-sdk";

export interface HourlyGroqSummary {
    activity: string;
    notes: string[];
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export function extractJson<T = HourlyGroqSummary>(input: string): T | null {
    const jsonMatch = input.match(/{[\s\S]*}/)
  
    if (!jsonMatch) return null
  
    try {
      return JSON.parse(jsonMatch[0]) as T
    } catch (err) {
      const returnError:HourlyGroqSummary = {
        activity: "Error",
        notes: [err instanceof Error ? err.message : "Some kind of parsing error"]
      }
      console.error("JSON parse failed:", err)
      return returnError as T
    }
  }

async function groqSummarizer(ocrInput: string): Promise<HourlyGroqSummary> {

    const prompt = `
You are an intelligent assistant. Your job is to analyze a list of raw OCR screen texts from a computer session lasting one hour. 

Return a JSON with:
2. "activity" (string): A short title for the main activity.
3. "notes" (array of strings): Important observations or sub-tasks performed.

Be concise, don't add commentary. Here's the data:
${ocrInput}

Return only a JSON object like:
{
  "activity": "Browsing and Note Taking",
  "notes": [
    "Visited Notion workspace for project planning.",
    "Watched a YouTube video on web security."
  ]
}
`
    try {

        const chatResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that analyzes OCR logs and provides useful summaries.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "deepseek-r1-distill-llama-70b",
        });
    
        const resultText = chatResponse.choices[0]?.message?.content || "";

        const jsonResult = extractJson<HourlyGroqSummary>(resultText)

        return jsonResult !== null ? jsonResult : { activity: "Error", notes: ["Unable to parse JSON response"] }
    } catch (error) {
        console.error("Error:", error);
        return {
            activity: "Error",
            notes: [error instanceof Error ? error.message : "Unknown error"],
        }
    }
}

export default groqSummarizer