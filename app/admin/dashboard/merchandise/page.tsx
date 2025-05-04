"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function MerchandisePage() {
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterCategory, setFilterCategory] = useState("all")

  // Mock data for merchandise
  const merchandise = [
    {
      id: 1,
      name: "CHERRYPOP T-SHIRT BLACK",
      price: "Rp 250.000",
      category: "Clothing",
      stock: 50,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "CHERRYPOP T-SHIRT WHITE",
      price: "Rp 250.000",
      category: "Clothing",
      stock: 35,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "CHERRYPOP HOODIE",
      price: "Rp 450.000",
      category: "Clothing",
      stock: 20,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "CHERRYPOP TOTE BAG",
      price: "Rp 200.000",
      category: "Accessories",
      stock: 40,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "CHERRYPOP CAP",
      price: "Rp 175.000",
      category: "Accessories",
      stock: 25,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "CHERRYPOP COMPILATION CD",
      price: "Rp 150.000",
      category: "Music",
      stock: 0,
      status: "Out of Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      name: "CHERRYPOP VINYL RECORD",
      price: "Rp 350.000",
      category: "Music",
      stock: 15,
      status: "In Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      name: "CHERRYPOP POSTER",
      price: "Rp 100.000",
      category: "Accessories",
      stock: 5,
      status: "Low Stock",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Filter merchandise based on category
  const filteredMerchandise = merchandise.filter((item) => {
    if (filterCategory === "all") return true
    return item.category === filterCategory
  })

  // Sort merchandise
  const sortedMerchandise = [...filteredMerchandise].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    if (sortField === "price") {
      const aPrice = Number.parseFloat(a.price.replace(/[^\d]/g, ""))
      const bPrice = Number.parseFloat(b.price.replace(/[^\d]/g, ""))
      return sortDirection === "asc" ? aPrice - bPrice : bPrice - aPrice
    }
    if (sortField === "category") {
      return sortDirection === "asc" ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category)
    }
    if (sortField === "stock") {
      return sortDirection === "asc" ? a.stock - b.stock : b.stock - a.stock
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

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-500/20 text-green-500"
      case "Low Stock":
        return "bg-yellow-500/20 text-yellow-500"
      case "Out of Stock":
        return "bg-red-500/20 text-red-500"
      default:
        return "bg-accent/20 text-muted-foreground"
    }
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Merchandise Management</h1>
          <p className="text-muted-foreground">Manage merchandise items for Cherrypop Festival</p>
        </div>
        <Link
          href="/admin/dashboard/merchandise/add"
          className="mt-4 md:mt-0 flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Item
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Total Items</p>
          <p className="text-3xl font-bold">{merchandise.length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">In Stock</p>
          <p className="text-3xl font-bold">{merchandise.filter((item) => item.status === "In Stock").length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Low Stock</p>
          <p className="text-3xl font-bold">{merchandise.filter((item) => item.status === "Low Stock").length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Out of Stock</p>
          <p className="text-3xl font-bold">{merchandise.filter((item) => item.status === "Out of Stock").length}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search merchandise..."
            className="w-full p-2 pl-10 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          >
            <option value="all">All Categories</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Music">Music</option>
          </select>
        </div>
      </div>

      {/* Merchandise Table */}
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
                  onClick={() => handleSort("price")}
                >
                  <div className="flex items-center">Price {getSortIcon("price")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("category")}
                >
                  <div className="flex items-center">Category {getSortIcon("category")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("stock")}
                >
                  <div className="flex items-center">Stock {getSortIcon("stock")}</div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedMerchandise.map((item) => (
                <tr key={item.id} className="hover:bg-accent/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-10 h-10">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(item.status)}`}>
                      {item.status}
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
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
          <span className="font-medium">8</span> results
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
