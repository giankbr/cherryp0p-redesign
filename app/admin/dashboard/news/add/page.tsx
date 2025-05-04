"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ImageIcon, Calendar, Clock, Tag, Save, X } from "lucide-react"

export default function AddNewsPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    publishDate: "",
    readTime: "",
    featuredImage: null,
    status: "draft",
  })

  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, featuredImage: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Form submitted:", formData)
    // For demo purposes, just show an alert
    alert("Article saved successfully!")
  }

  const categories = [
    "Announcements",
    "Interviews",
    "Programs",
    "Recaps",
    "Behind The Scenes",
    "Community",
    "Artist Spotlight",
    "Merchandise",
  ]

  return (
    <div className="p-6 md:p-10">
      <div className="flex items-center mb-8">
        <Link href="/admin/dashboard/news" className="mr-4 hover:text-primary">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">Add New Article</h1>
          <p className="text-muted-foreground">Create a new news article for Cherrypop Festival</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Article Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter article title"
                className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
              />
            </div>

            {/* Excerpt */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                placeholder="Brief summary of the article"
                rows={3}
                className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
              ></textarea>
            </div>

            {/* Content */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                Content
              </label>
              <div className="border border-border mb-2 p-2 flex flex-wrap gap-2">
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  B
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md italic">
                  I
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md underline">
                  U
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  H1
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  H2
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  Link
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  <ImageIcon className="h-4 w-4" />
                </button>
                <button type="button" className="p-1 hover:bg-accent/10 rounded-md">
                  List
                </button>
              </div>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write your article content here..."
                rows={15}
                className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
              ></textarea>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <h2 className="text-lg font-bold mb-4">Publish</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="publishDate" className="block text-sm font-medium mb-2">
                    Publish Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="publishDate"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleChange}
                      className="w-full p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <label htmlFor="readTime" className="block text-sm font-medium mb-2">
                    Read Time (minutes)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      min="1"
                      className="w-full p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-md"
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <h2 className="text-lg font-bold mb-4">Featured Image</h2>
              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage(null)
                      setFormData((prev) => ({ ...prev, featuredImage: null }))
                    }}
                    className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-md p-8 text-center">
                  <ImageIcon className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">Drag and drop an image, or click to browse</p>
                  <input
                    type="file"
                    id="featuredImage"
                    name="featuredImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="featuredImage"
                    className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md cursor-pointer"
                  >
                    Select Image
                  </label>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <h2 className="text-lg font-bold mb-4">Category</h2>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="mt-2 text-right">
                <Link href="/admin/dashboard/news/categories" className="text-sm text-primary hover:underline">
                  Manage Categories
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-accent/5 border border-border rounded-md p-6">
              <h2 className="text-lg font-bold mb-4">Tags</h2>
              <div className="relative">
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Add tags separated by commas"
                  className="w-full p-2 pl-8 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                />
                <Tag className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Example: festival, music, interview, yogyakarta</p>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 flex justify-between lg:hidden">
          <button type="button" className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
            Save Draft
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-md"
          >
            <Save className="h-4 w-4 mr-2 inline" /> Publish
          </button>
        </div>
      </form>
    </div>
  )
}
