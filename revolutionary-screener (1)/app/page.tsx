"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"
import { useTheme } from "next-themes"

export default function RevolutionaryScreener() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [selectedStock, setSelectedStock] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

  const stock = useMemo(() => {
    // Mock stock data
    return {
      symbol: "AAPL",
      sector: "Technology",
      company: "Apple Inc.",
      price: 150.75,
      change: 5.25,
      changePercent: 3.5,
      marketCap: 2.5e12,
      pe: 30.5,
      dividendYield: 1.25,
      volume: 1.2e9,
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Dialog Container */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-6xl h-[90vh] overflow-y-auto">
        {/* Sticky Close Button */}
        <div className="sticky top-0 z-10 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedStock(null)}
              className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 text-center w-full">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{stock.symbol}</h1>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 text-sm font-medium">
                      {stock.sector}
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{stock.company}</p>
                </div>
                <div className="text-right space-y-2">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">${stock.price.toFixed(2)}</div>
                  <div className={`text-lg font-semibold ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Market Cap", value: `$${(stock.marketCap / 1e9).toFixed(1)}B` },
                  { label: "P/E Ratio", value: stock.pe?.toFixed(1) || "N/A" },
                  {
                    label: "Dividend Yield",
                    value: stock.dividendYield ? `${stock.dividendYield.toFixed(2)}%` : "N/A",
                  },
                  { label: "Volume", value: `${(stock.volume / 1e6).toFixed(1)}M` },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{metric.label}</div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 h-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="technicals">Technicals</TabsTrigger>
              <TabsTrigger value="ownership">Ownership</TabsTrigger>
              <TabsTrigger value="similar">Similar</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              {/* put your Overview grid + 90-day chart here */}
            </TabsContent>

            {/* Charts Tab */}
            <TabsContent value="charts" className="space-y-6 mt-6">
              {/* put your Price/Volume + RSI chart here */}
            </TabsContent>

            {/* Financials Tab */}
            <TabsContent value="financials" className="space-y-6 mt-6">
              {/* valuation, profitability, growth cards */}
            </TabsContent>

            {/* Technicals Tab */}
            <TabsContent value="technicals" className="space-y-6 mt-6">
              {/* indicators + moving averages */}
            </TabsContent>

            {/* Ownership Tab */}
            <TabsContent value="ownership" className="space-y-6 mt-6">
              {/* institutional owners + stats */}
            </TabsContent>

            {/* Similar Tab */}
            <TabsContent value="similar" className="space-y-6 mt-6">
              {/* similar stock cards */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
