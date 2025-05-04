"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Search, Edit, Trash2, MoreHorizontal, ChevronDown, ChevronUp, Filter, Lock, Mail } from "lucide-react"

export default function UsersPage() {
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterRole, setFilterRole] = useState("all")

  // Mock data for users
  const users = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@cherrypop.id",
      role: "Administrator",
      status: "Active",
      lastLogin: "Today, 10:30 AM",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Content Editor",
      email: "editor@cherrypop.id",
      role: "Editor",
      status: "Active",
      lastLogin: "Yesterday, 3:45 PM",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Marketing Manager",
      email: "marketing@cherrypop.id",
      role: "Manager",
      status: "Active",
      lastLogin: "Jan 10, 2025, 9:15 AM",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Merchandise Staff",
      email: "merch@cherrypop.id",
      role: "Staff",
      status: "Active",
      lastLogin: "Jan 8, 2025, 2:20 PM",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Inactive User",
      email: "inactive@cherrypop.id",
      role: "Staff",
      status: "Inactive",
      lastLogin: "Dec 15, 2024, 11:05 AM",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Filter users based on role
  const filteredUsers = users.filter((user) => {
    if (filterRole === "all") return true
    return user.role === filterRole
  })

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    if (sortField === "email") {
      return sortDirection === "asc" ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)
    }
    if (sortField === "role") {
      return sortDirection === "asc" ? a.role.localeCompare(b.role) : b.role.localeCompare(a.role)
    }
    if (sortField === "status") {
      return sortDirection === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
    }
    if (sortField === "lastLogin") {
      return sortDirection === "asc" ? a.lastLogin.localeCompare(b.lastLogin) : b.lastLogin.localeCompare(a.lastLogin)
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
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage users and permissions for Cherrypop CMS</p>
        </div>
        <Link
          href="/admin/dashboard/users/add"
          className="mt-4 md:mt-0 flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" /> Add User
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Total Users</p>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Administrators</p>
          <p className="text-3xl font-bold">{users.filter((user) => user.role === "Administrator").length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Active Users</p>
          <p className="text-3xl font-bold">{users.filter((user) => user.status === "Active").length}</p>
        </div>
        <div className="bg-accent/5 border border-border p-6 rounded-md">
          <p className="text-muted-foreground mb-1">Inactive Users</p>
          <p className="text-3xl font-bold">{users.filter((user) => user.status === "Inactive").length}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 pl-10 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
          >
            <option value="all">All Roles</option>
            <option value="Administrator">Administrator</option>
            <option value="Editor">Editor</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-accent/10">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Avatar</th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center">Name {getSortIcon("name")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("email")}
                >
                  <div className="flex items-center">Email {getSortIcon("email")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("role")}
                >
                  <div className="flex items-center">Role {getSortIcon("role")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center">Status {getSortIcon("status")}</div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("lastLogin")}
                >
                  <div className="flex items-center">Last Login {getSortIcon("lastLogin")}</div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-accent/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-10 h-10">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.role === "Administrator"
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-muted-foreground"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "Active" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-accent/10 rounded-md">
                        <Lock className="h-4 w-4" />
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
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
          <span className="font-medium">5</span> results
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
