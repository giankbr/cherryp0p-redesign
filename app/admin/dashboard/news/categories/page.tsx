"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, Edit, Trash2, Save, X, GripVertical, Search } from "lucide-react"

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Announcements", slug: "announcements", count: 8 },
    { id: 2, name: "Interviews", slug: "interviews", count: 5 },
    { id: 3, name: "Programs", slug: "programs", count: 4 },
    { id: 4, name: "Recaps", slug: "recaps", count: 3 },
    { id: 5, name: "Behind The Scenes", slug: "behind-the-scenes", count: 2 },
    { id: 6, name: "Community", slug: "community", count: 2 },
    { id: 7, name: "Artist Spotlight", slug: "artist-spotlight", count: 3 },
    { id: 8, name: "Merchandise", slug: "merchandise", count: 1 },
  ])

  const [editingCategory, setEditingCategory] = useState<number | null>(null)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [addingCategory, setAddingCategory] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleEdit = (id: number, name: string) => {
    setEditingCategory(id)
    setNewCategoryName(name)
  }

  const handleSave = (id: number) => {
    if (newCategoryName.trim() === "") return

    setCategories(
      categories.map((category) =>
        category.id === id
          ? {
              ...category,
              name: newCategoryName,
              slug: newCategoryName.toLowerCase().replace(/\s+/g, "-"),
            }
          : category,
      ),
    )
    setEditingCategory(null)
    setNewCategoryName("")
  }

  const handleCancel = () => {
    setEditingCategory(null)
    setNewCategoryName("")
    setAddingCategory(false)
  }

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((category) => category.id !== id))
    }
  }

  const handleAddCategory = () => {
    if (newCategoryName.trim() === "") return

    const newId = Math.max(...categories.map((c) => c.id)) + 1
    setCategories([
      ...categories,
      {
        id: newId,
        name: newCategoryName,
        slug: newCategoryName.toLowerCase().replace(/\s+/g, "-"),
        count: 0,
      },
    ])
    setAddingCategory(false)
    setNewCategoryName("")
  }

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-6 md:p-10">
      <div className="flex items-center mb-8">
        <Link href="/admin/dashboard/news" className="mr-4 hover:text-primary">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">Categories</h1>
          <p className="text-muted-foreground">Manage news categories for Cherrypop Festival</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Categories List */}
        <div className="lg:col-span-2">
          <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-bold">All Categories</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 pl-8 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="divide-y divide-border">
              {filteredCategories.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">No categories found</div>
              ) : (
                filteredCategories.map((category) => (
                  <div key={category.id} className="p-4 hover:bg-accent/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GripVertical className="h-5 w-5 text-muted-foreground mr-2 cursor-move" />
                        {editingCategory === category.id ? (
                          <input
                            type="text"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                            autoFocus
                          />
                        ) : (
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-muted-foreground">Slug: {category.slug}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs bg-accent/10 rounded-full">
                          {category.count} {category.count === 1 ? "article" : "articles"}
                        </span>
                        {editingCategory === category.id ? (
                          <>
                            <button
                              onClick={() => handleSave(category.id)}
                              className="p-1 hover:bg-accent/10 rounded-md text-green-500"
                            >
                              <Save className="h-4 w-4" />
                            </button>
                            <button onClick={handleCancel} className="p-1 hover:bg-accent/10 rounded-md text-red-500">
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEdit(category.id, category.name)}
                              className="p-1 hover:bg-accent/10 rounded-md"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(category.id)}
                              className="p-1 hover:bg-accent/10 rounded-md"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Add Category */}
        <div>
          <div className="bg-accent/5 border border-border rounded-md p-6">
            <h2 className="text-xl font-bold mb-6">{addingCategory ? "Add New Category" : "Categories"}</h2>
            {addingCategory ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="categoryName" className="block text-sm font-medium mb-2">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    placeholder="Enter category name"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddCategory}
                    className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-md"
                  >
                    Add Category
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Categories help organize your content and make it easier for visitors to find related articles.
                </p>
                <button
                  onClick={() => setAddingCategory(true)}
                  className="w-full px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md flex items-center justify-center"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Category
                </button>
              </div>
            )}
          </div>

          <div className="bg-accent/5 border border-border rounded-md p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Category Tips</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use clear, descriptive names for categories</li>
              <li>• Keep the number of categories manageable</li>
              <li>• Categories should be broad enough to contain multiple articles</li>
              <li>• For more specific grouping, consider using tags instead</li>
              <li>• Regularly review and consolidate categories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
