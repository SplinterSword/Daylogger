"use client";

import { SettingsProvider } from "@/lib/settings-provider";
import { ClientOnly } from "@/lib/client-only";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pipe } from "@screenpipe/browser";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

interface Pipe {
  id: string;
  name: string;
  description: string;
}

function isMacOS() {
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
}

// const generateMockData = () => {
//   const activities = [
//     "Team meeting with product managers to discuss roadmap priorities and align on quarterly objectives for the upcoming release cycle",
//     "Coding session",
//     "Research on competitor products and market analysis including user feedback trends and feature comparison across the industry",
//     "Break",
//     "Planning session for next sprint with estimation of tasks and discussion of potential blockers and dependencies",
//     "Code review",
//     "Documentation update for API endpoints and user flows with detailed examples and edge case handling",
//     "Debugging",
//     "Client call to gather requirements for upcoming features and discuss timeline expectations and resource allocation",
//     "Email",
//   ]

//   const notes = [
//     "Completed the detailed analysis of user feedback and identified key pain points that need to be addressed in the next release. Created action items for each team member and set up follow-up meetings.",
//     "Fixed bug #1234.",
//     "In progress with implementing the new dashboard widgets. Encountered some challenges with data visualization that need further investigation. Will need to consult with the design team about alternative approaches.",
//     "Coffee break.",
//     "Discussed integration points with the third-party payment provider and documented the API requirements for the development team. Need to schedule a technical deep dive with their engineering team.",
//     "Approved PR #567.",
//     "Analyzed user analytics data to identify usage patterns and potential areas for feature improvements. Created a detailed report with recommendations for the product team.",
//     "N/A",
//     "Collaborated with DevOps team to optimize CI/CD pipeline for faster deployments and more reliable testing. Identified several bottlenecks in the current process.",
//     "",
//   ]

//   const hours = []
//   for (let i = 0; i < 24; i++) {
//     // Intentionally create some entries with very short content
//     const activityIndex = i % activities.length
//     const noteIndex = (i + 3) % notes.length // Offset to ensure mismatched lengths

//     hours.push({
//       hour: i,
//       startTime: `${i === 0 ? "12" : i > 12 ? i - 12 : i}:00 ${i < 12 ? "AM" : "PM"}`,
//       endTime: `${i === 11 ? "12" : i === 23 ? "12" : i + 1 > 12 ? i + 1 - 12 : i + 1}:00 ${i < 11 ? "AM" : "PM"}`,
//       activity: activities[activityIndex],
//       notes: notes[noteIndex],
//     })
//   }
//   return hours
// }

export default function Page() {
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<any[]>([])
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )

  useEffect(() => {
    fetch("https://screenpi.pe/api/plugins/registry")
      .then((res) => res.json())
      .then((data) => {
        const transformedPipes = data.map((pipe: any) => ({
          id: pipe.id,
          name: pipe.name,
          description: pipe.description?.split("\n")[0] || "",
        }));
        setPipes(transformedPipes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pipes:", error);
        setLoading(false);
      });
  }, []);
  
  // Replace the fetchData function to indicate it's an API call
  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/daily-logs')
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const data = await response.json()
      console.log("fetched logs:", data)
      setLogs(data)
    } catch (error) {
      console.log("Error fetching logs:", error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <SettingsProvider>
      <ClientOnly>
        <>
        <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl w-full space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Daylogger</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                "The key is not to prioritize what's on your schedule, but to schedule your priorities."
                <span className="block mt-1 text-sm">— Stephen Covey</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">{date}</span>
              </div>

              <Button onClick={fetchData} disabled={loading} className="px-8 py-6 text-lg">
                {loading ? "Loading data..." : "Load Today's Logs"}
              </Button>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-black animate-spin"></div>
                <p className="mt-4 text-gray-600">Fetching your daily logs...</p>
              </div>
            )}

            {!loading && logs.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">Hourly Activity Log</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {logs.map((log) => (
                    <Card key={log.hour} className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="font-bold">
                            {log.startTime} - {log.endTime}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">ACTIVITY</h4>
                            <p className="font-medium">{log.activity}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500">NOTES</h4>
                            <p className="text-sm text-gray-600">{log.notes}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        </>
      </ClientOnly>
    </SettingsProvider>
  );
}
