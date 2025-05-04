"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Search, Edit, Trash2, MoreHorizontal, ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function LineupPage() {
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterDay, setFilterDay] = useState("all")

  // Mock data for artists
  const artists = [
    {
      id: 1,
      name: "HINDIA",
      day: "Day 1",
      time: "21:30 - 23:00",
      stage: "Main Stage",
      type: "Headliner",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "BARASUARA",
      day: "Day 1",
      time: "19:30 - 21:00",
      stage: "Main Stage",
      type: "Main Act",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "KUNTO AJI",
      day: "Day 1",
      time: "18:00 - 19:00",
      stage: "Main Stage",
      type: "Main Act",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "EFEK RUMAH KACA",
      day: "Day 2",
      time: "21:30 - 23:00",
      stage: "Main Stage",
      type: "Headliner",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "ISYANA SARASVATI",
      day: "Day 2",
      time: "19:30 - 21:00",
      stage: "Main Stage",
      type: "Main Act",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "LOMBA SIHIR",
      day: "Day 2",
      time: "18:00 - 19:00",
      stage: "Main Stage",
      type: "Main Act",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Filter artists based on day
  const filteredArtists = artists.filter((artist) => {
    if (filterDay === "all") return true
    return artist.day === filterDay
  })

  // Sort artists
  const sortedArtists = [...filteredArtists].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    if (sortField === "day") {
      return sortDirection === "asc" ? a.day.localeCompare(b.day) : b.day.localeCompare(a.day)
    }
    if (sortField === "time") {
      return sortDirection === "asc" ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time)
    }
    if (sortField === "type") {
      return sortDirection === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
    }
    return 0
  })

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getSortIcon = (field) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Lineup Management</h1>
          <p className="text-muted-foreground">Manage artists and schedule for Cherrypop Festival</p>
        </div>
        <Link
          href="/admin/dashboard/lineup/add"
          className="mt-4 md:mt-0 flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Artist
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search artists..."
            className="w-full p-2 pl-10 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterDay}
            onChange={(e) => setFilterDay(e.target.value)}
            className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          >
            <option value="all">All Days</option>
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
          </select>
        </div>
      </div>

      {/* Artists Table */}
      <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-accent/10">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center">Name {getSortIcon("name")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("day")}
                >
                  <div className="flex items-center">Day {getSortIcon("day")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("time")}
                >
                  <div className="flex items-center">Time {getSortIcon("time")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("type")}
                >
                  <div className="flex items-center">Type {getSortIcon("type")}</div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedArtists.map((artist) => (
                <tr key={artist.id} className="hover:bg-accent/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-10 h-10">
                      <Image
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{artist.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{artist.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{artist.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        artist.type === "Headliner"
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-muted-foreground"
                      }`}
                    >
                      {artist.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{" "}
          <span className="font-medium">6</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">Previous</button>
          <button className="px-3 py-1 bg-primary text-white rounded-md">1</button>
          <button className="px-3 py-1 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">Next</button>
        </div>
      </div>
    </div>
  )
}
