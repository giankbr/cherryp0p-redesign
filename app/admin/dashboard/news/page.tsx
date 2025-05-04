"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function NewsPage() {
  const [sortField, setSortField] = useState("date")
  const [sortDirection, setSortDirection] = useState("desc")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES",
      date: "10 JANUARI 2025",
      author: "Admin",
      status: "Published",
      category: "Announcements",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "INTERVIEW WITH HINDIA",
      date: "5 JANUARI 2025",
      author: "Admin",
      status: "Published",
      category: "Interviews",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "REKAM SKENA: DOKUMENTASI MUSIK LOKAL",
      date: "28 DESEMBER 2024",
      author: "Editor",
      status: "Published",
      category: "Programs",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      title: "WEEKEND POP TOUR DATES ANNOUNCED",
      date: "15 DESEMBER 2024",
      author: "Admin",
      status: "Published",
      category: "Announcements",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "NEW MERCHANDISE COLLECTION PREVIEW",
      date: "10 DESEMBER 2024",
      author: "Editor",
      status: "Draft",
      category: "Merchandise",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      title: "ARTIST SPOTLIGHT: EFEK RUMAH KACA",
      date: "5 DESEMBER 2024",
      author: "Editor",
      status: "Draft",
      category: "Artist Spotlight",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Filter articles based on status
  const filteredArticles = articles.filter((article) => {
    if (filterStatus === "all") return true
    return article.status === filterStatus
  })

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortField === "title") {
      return sortDirection === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    }
    if (sortField === "date") {
      return sortDirection === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    }
    if (sortField === "author") {
      return sortDirection === "asc" ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author)
    }
    if (sortField === "status") {
      return sortDirection === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
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
          <h1 className="text-3xl font-bold mb-2">News Management</h1>
          <p className="text-muted-foreground">Manage news articles for Cherrypop Festival</p>
        </div>
        <Link
          href="/admin/dashboard/news/add"
          className="mt-4 md:mt-0 flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Article
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-2 pl-10 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          >
            <option value="all">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-accent/10">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  <div className="flex items-center">Title {getSortIcon("title")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center">Date {getSortIcon("date")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("author")}
                >
                  <div className="flex items-center">Author {getSortIcon("author")}</div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center">Status {getSortIcon("status")}</div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedArticles.map((article) => (
                <tr key={article.id} className="hover:bg-accent/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-10 h-10">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{article.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        article.status === "Published"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <Eye className="h-4 w-4" />
                      </button>
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
