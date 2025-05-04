"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Users, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"

// Mock data for analytics
const visitorData = [
  { name: "Jan", visitors: 1200 },
  { name: "Feb", visitors: 1900 },
  { name: "Mar", visitors: 2400 },
  { name: "Apr", visitors: 1800 },
  { name: "May", visitors: 2800 },
  { name: "Jun", visitors: 3500 },
  { name: "Jul", visitors: 4200 },
]

const pageViewsData = [
  { name: "Home", views: 12500 },
  { name: "Lineup", views: 8700 },
  { name: "Tickets", views: 7300 },
  { name: "About", views: 3200 },
  { name: "Contact", views: 2100 },
  { name: "News", views: 4500 },
  { name: "Merch", views: 3800 },
]

const deviceData = [
  { name: "Mobile", value: 65 },
  { name: "Desktop", value: 28 },
  { name: "Tablet", value: 7 },
]

const referralData = [
  { name: "Direct", value: 35 },
  { name: "Social Media", value: 25 },
  { name: "Search", value: 20 },
  { name: "Email", value: 12 },
  { name: "Other", value: 8 },
]

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("7d")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Tabs defaultValue="overview" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,781</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,105</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+8.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 45s</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              <span>-1.3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visitor Trends</CardTitle>
            <CardDescription>Visitor count over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-end gap-2">
            {visitorData.map((month, i) => (
              <div key={i} className="relative flex flex-col items-center flex-1">
                <div
                  className="w-full bg-red-600 rounded-t-md"
                  style={{ height: `${(month.visitors / 5000) * 100}%`, maxHeight: "100%" }}
                ></div>
                <span className="text-xs mt-2">{month.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most viewed pages on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pageViewsData.map((page, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{page.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${(page.views / pageViewsData[0].views) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground">{page.views.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audience Overview</CardTitle>
            <CardDescription>Device and referral breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3">Devices</h4>
                <div className="flex items-center gap-4">
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden flex">
                    <div className="h-full bg-red-600" style={{ width: `${deviceData[0].value}%` }}></div>
                    <div className="h-full bg-red-400" style={{ width: `${deviceData[1].value}%` }}></div>
                    <div className="h-full bg-red-300" style={{ width: `${deviceData[2].value}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    <span>Mobile ({deviceData[0].value}%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span>Desktop ({deviceData[1].value}%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-300"></div>
                    <span>Tablet ({deviceData[2].value}%)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Traffic Sources</h4>
                <div className="space-y-2">
                  {referralData.map((source, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm">{source.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-red-600 rounded-full"
                            style={{ width: `${source.value}%`, opacity: 1 - i * 0.15 }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{source.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
