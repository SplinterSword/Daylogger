import getOcrByHour from "@/utils/ocr";

export async function GET() {
  let ocrData : any = []

  try {
    const hour = new Date().getHours()

    for (let i = 0; i < hour+1; i++) {
      const ocr = await getOcrByHour(i)
      if (ocr == "Some trouble fetching OCR") {
        throw new Error(ocr)
      }
      ocrData.push(ocr)
    }

    let data = []

    for (let i = 0; i < hour+1; i++) {
      if (ocrData[i].text == undefined || ocrData[i].text.length < 30) {
        continue
      }
      
      const groqData = await fetch('https://daylogger-backend-973390128867.us-central1.run.app/api/groq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ocrData: ocrData[i].text }),
      })
      if (!groqData.ok) {
        throw new Error('Failed to fetch groq data')
      }
      const groqJson = await groqData.json()
      const { activity, notes } = groqJson

      if (activity == 'Error') {
        throw new Error(notes[0])
      }

      data.push({
        "hour": i,
        "startTime": `${i === 0 ? "12" : i > 12 ? i - 12 : i}:00 ${i < 12 ? "AM" : "PM"}`,
        "endTime": `${i === 11 ? "12" : i === 23 ? "12" : i + 1 > 12 ? i + 1 - 12 : i + 1}:00 ${i < 11 ? "AM" : "PM"}`,
        "activity": activity,
        "notes": notes,
      })
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
