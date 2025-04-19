"use client";

import { SettingsProvider } from "@/lib/settings-provider";
import { ClientOnly } from "@/lib/client-only";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Clock, Calendar, Search, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


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

// Helper function to highlight search terms in text
const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm || searchTerm.length < 2) return text

  // Escape special regex characters in the search term
  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  // Create a regular expression that's case insensitive
  const regex = new RegExp(`(${escapedSearchTerm})`, "gi")

  // Split the text by the regex
  const parts = String(text).split(regex)

  // If there are no matches, return the original text
  if (parts.length === 1) return text

  // Return the text with highlighted parts
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-200 rounded px-0.5">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

const containsSearchTerm = (text: string, searchTerm: string) => {
  if (!text) return false
  if (!searchTerm || searchTerm.length < 2) return true

  return String(text).toLowerCase().includes(searchTerm.toLowerCase())
}


export default function Page() {
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<any[]>([])
  const [allLogs, setAllLogs] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )

  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setLogs(allLogs)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = allLogs.filter(
      (log) => containsSearchTerm(log.activity, query) || containsSearchTerm(log.notes, query),
    )
    setLogs(filtered)
  }, [searchQuery, allLogs])

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

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/daily-logs')

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const data = await response.json()
      setAllLogs(data)
      setLogs(data)
    } catch (error) {
      console.error("Error fetching logs:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetSearch = () => {
    setSearchQuery("")
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

              {!loading && allLogs.length > 0 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center">Hourly Activity Log</h2>

                    {/* Search bar */}
                    <div className="relative max-w-md mx-auto">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search activities and notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 py-2"
                      />
                      {searchQuery && (
                        <button
                          onClick={resetSearch}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          aria-label="Clear search"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {searchQuery.trim() && searchQuery.length > 1 && logs.length > 0 && (
                      <p className="text-center text-sm text-gray-500">
                        Found {logs.length} {logs.length === 1 ? "result" : "results"} for "{searchQuery}"
                        {logs.length !== allLogs.length && (
                          <button onClick={resetSearch} className="ml-2 text-black underline hover:no-underline">
                            Clear
                          </button>
                        )}
                      </p>
                    )}
                  </div>

                  {logs.length > 0 ? (
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
                                <p className="font-medium">
                                  {searchQuery && searchQuery.length > 1
                                    ? highlightText(log.activity, searchQuery)
                                    : log.activity}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-gray-500">NOTES</h4>
                                <p className="text-sm text-gray-600">
                                  {searchQuery && searchQuery.length > 1 ? highlightText(log.notes, searchQuery) : log.notes}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 px-4 border rounded-lg bg-gray-50">
                      <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium mb-2">No matching logs found</h3>
                      <p className="text-gray-500 text-center mb-6">
                        We couldn't find any logs matching "{searchQuery}". Try a different search term or view all logs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" onClick={resetSearch} className="flex items-center gap-2">
                          <RefreshCw className="h-4 w-4" />
                          Show all logs
                        </Button>
                        <Button
                          onClick={() => {
                            const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
                            if (searchInput) {
                              searchInput.focus()
                              searchInput.select()
                            }
                          }}
                        >
                          Try another search
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>
        </>
      </ClientOnly>
    </SettingsProvider>
  );
}
