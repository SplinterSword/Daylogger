import { pipe } from '@screenpipe/js'

interface OCRResult {
    text: string;
    hour: number;
}

async function getOcrByHour(hour: number) {

    const todayStr = new Date().toISOString().split('T')[0]

    try {

        const results = await pipe.queryScreenpipe({
            contentType: "ocr",
            startTime: `${todayStr}T${hour}:00:00.000Z`,
            endTime: `${todayStr}T${hour + 1}:00:00.000Z`,
            offset: 0,
        })

        const finalData : OCRResult = {
            text: results?.data?.slice(7, 11).map(item => item?.content?.text).join(' ') !== undefined ? results?.data?.slice(5, results?.data?.length).map(item => item?.content?.text).join('\n') : '',
            hour: hour
        }
    
        return finalData

    } catch (error) {
        console.error(error)
        return "Some trouble fetching OCR"
    }
}

export default getOcrByHour