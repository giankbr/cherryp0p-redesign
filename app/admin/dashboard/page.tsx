import Link from "next/link"
import { Calendar, ShoppingBag, FileText, Users, TrendingUp, Clock, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      name: "Total Artists",
      value: "24",
      change: "+4",
      icon: <Calendar className="h-6 w-6 text-primary" />,
    },
    {
      name: "Merchandise Items",
      value: "36",
      change: "+2",
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    },
    {
      name: "News Articles",
      value: "18",
      change: "+3",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
      name: "Admin Users",
      value: "5",
      change: "+1",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ]

  const recentArticles = [
    {
      title: "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES",
      date: "10 JANUARI 2025",
      status: "Published",
    },
    {
      title: "INTERVIEW WITH HINDIA",
      date: "5 JANUARI 2025",
      status: "Published",
    },
    {
      title: "REKAM SKENA: DOKUMENTASI MUSIK LOKAL",
      date: "28 DESEMBER 2024",
      status: "Published",
    },
    {
      title: "NEW MERCHANDISE COLLECTION PREVIEW",
      date: "15 DESEMBER 2024",
      status: "Draft",
    },
  ]

  const upcomingTasks = [
    {
      task: "Publish lineup announcement",
      due: "Tomorrow",
      priority: "High",
    },
    {
      task: "Update merchandise inventory",
      due: "Jan 15, 2025",
      priority: "Medium",
    },
    {
      task: "Review artist contracts",
      due: "Jan 20, 2025",
      priority: "High",
    },
    {
      task: "Prepare social media campaign",
      due: "Jan 25, 2025",
      priority: "Medium",
    },
  ]

  return (
    <div className="p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to Cherrypop CMS</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-accent/5 border border-border p-6 rounded-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground mb-1">{stat.name}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="p-2 bg-accent/10 rounded-md">{stat.icon}</div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Recent Articles */}
        <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Articles</h2>
            <Link href="/admin/dashboard/news" className="text-primary hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentArticles.map((article, index) => (
              <div key={index} className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium mb-1">{article.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      article.status === "Published"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {article.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="text-xl font-bold">Upcoming Tasks</h2>
            <button className="text-primary hover:underline">Add Task</button>
          </div>
          <div className="divide-y divide-border">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium mb-1">{task.task}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Due: {task.due}
                  </div>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === "High" ? "bg-red-500/20 text-red-500" : "bg-blue-500/20 text-blue-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-accent/5 border border-border rounded-md overflow-hidden mb-10">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">Quick Actions</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/dashboard/news/add"
            className="flex flex-col items-center justify-center p-6 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md text-center"
          >
            <FileText className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Add New Article</span>
          </Link>
          <Link
            href="/admin/dashboard/lineup/add"
            className="flex flex-col items-center justify-center p-6 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md text-center"
          >
            <Calendar className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Add Artist</span>
          </Link>
          <Link
            href="/admin/dashboard/merchandise/add"
            className="flex flex-col items-center justify-center p-6 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md text-center"
          >
            <ShoppingBag className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Add Merchandise</span>
          </Link>
          <Link
            href="/admin/dashboard/users/add"
            className="flex flex-col items-center justify-center p-6 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md text-center"
          >
            <Users className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Add User</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">New article published</p>
                <p className="text-sm text-muted-foreground">
                  Admin published "CHERRYPOP FESTIVAL ANNOUNCES 2025 DATES"
                </p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Lineup updated</p>
                <p className="text-sm text-muted-foreground">Admin added 2 new artists to the lineup</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Merchandise inventory updated</p>
                <p className="text-sm text-muted-foreground">Admin updated stock levels for 5 items</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">New user added</p>
                <p className="text-sm text-muted-foreground">Admin added a new content editor user</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
