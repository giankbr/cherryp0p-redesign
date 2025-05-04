"use client"

import { useState } from "react"
import { Globe, Mail, Bell, Shield, Database, Smartphone, Save, RefreshCw, Trash2, Check, X, Plus } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [saveStatus, setSaveStatus] = useState<null | "saving" | "success" | "error">(null)

  const handleSave = () => {
    setSaveStatus("saving")
    // Simulate API call
    setTimeout(() => {
      setSaveStatus("success")
      // Reset status after 3 seconds
      setTimeout(() => {
        setSaveStatus(null)
      }, 3000)
    }, 1500)
  }

  const tabs = [
    { id: "general", label: "General", icon: <Globe className="h-5 w-5" /> },
    { id: "email", label: "Email", icon: <Mail className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
    { id: "security", label: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "database", label: "Database", icon: <Database className="h-5 w-5" /> },
    { id: "api", label: "API", icon: <Smartphone className="h-5 w-5" /> },
  ]

  return (
    <div className="p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your Cherrypop CMS settings</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
            <div className="divide-y divide-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center p-4 text-left hover:bg-accent/10 transition-colors ${
                    activeTab === tab.id ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {tab.icon}
                  <span className="ml-3">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-accent/5 border border-border rounded-md p-6">
            {/* General Settings */}
            {activeTab === "general" && (
              <div>
                <h2 className="text-xl font-bold mb-6">General Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="siteName" className="block text-sm font-medium mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      id="siteName"
                      defaultValue="Cherrypop Festival"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="siteDescription" className="block text-sm font-medium mb-2">
                      Site Description
                    </label>
                    <textarea
                      id="siteDescription"
                      defaultValue="Festival musik tahunan di Yogyakarta yang digagas oleh Swasembada Kreasi."
                      rows={3}
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="siteUrl" className="block text-sm font-medium mb-2">
                      Site URL
                    </label>
                    <input
                      type="url"
                      id="siteUrl"
                      defaultValue="https://cherrypop.id"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium mb-2">
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      defaultValue="Asia/Jakarta"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    >
                      <option value="Asia/Jakarta">Asia/Jakarta (GMT+7)</option>
                      <option value="Asia/Singapore">Asia/Singapore (GMT+8)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                      <option value="Australia/Sydney">Australia/Sydney (GMT+10)</option>
                      <option value="Europe/London">Europe/London (GMT+0)</option>
                      <option value="America/New_York">America/New_York (GMT-5)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dateFormat" className="block text-sm font-medium mb-2">
                      Date Format
                    </label>
                    <select
                      id="dateFormat"
                      defaultValue="DD MMMM YYYY"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    >
                      <option value="DD MMMM YYYY">DD MMMM YYYY (15 August 2025)</option>
                      <option value="MMMM DD, YYYY">MMMM DD, YYYY (August 15, 2025)</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY (15/08/2025)</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY (08/15/2025)</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD (2025-08-15)</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span>Enable maintenance mode</span>
                    </label>
                    <p className="text-sm text-muted-foreground mt-1 ml-6">
                      When enabled, the site will display a maintenance page to visitors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Email Settings */}
            {activeTab === "email" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Email Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="emailFrom" className="block text-sm font-medium mb-2">
                      From Email
                    </label>
                    <input
                      type="email"
                      id="emailFrom"
                      defaultValue="noreply@cherrypop.id"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="emailName" className="block text-sm font-medium mb-2">
                      From Name
                    </label>
                    <input
                      type="text"
                      id="emailName"
                      defaultValue="Cherrypop Festival"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="smtpHost" className="block text-sm font-medium mb-2">
                      SMTP Host
                    </label>
                    <input
                      type="text"
                      id="smtpHost"
                      defaultValue="smtp.example.com"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="smtpPort" className="block text-sm font-medium mb-2">
                        SMTP Port
                      </label>
                      <input
                        type="number"
                        id="smtpPort"
                        defaultValue="587"
                        className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="smtpEncryption" className="block text-sm font-medium mb-2">
                        Encryption
                      </label>
                      <select
                        id="smtpEncryption"
                        defaultValue="tls"
                        className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                      >
                        <option value="tls">TLS</option>
                        <option value="ssl">SSL</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="smtpUsername" className="block text-sm font-medium mb-2">
                      SMTP Username
                    </label>
                    <input
                      type="text"
                      id="smtpUsername"
                      defaultValue="user@example.com"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="smtpPassword" className="block text-sm font-medium mb-2">
                      SMTP Password
                    </label>
                    <input
                      type="password"
                      id="smtpPassword"
                      defaultValue="••••••••••••"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
                      <RefreshCw className="h-4 w-4 mr-2 inline" /> Test Connection
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">New User Registration</p>
                          <p className="text-sm text-muted-foreground">Receive an email when a new user registers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">New Article Published</p>
                          <p className="text-sm text-muted-foreground">
                            Receive an email when a new article is published
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Low Stock Alert</p>
                          <p className="text-sm text-muted-foreground">
                            Receive an email when merchandise stock is low
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">System Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Security Alerts</p>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications for security-related events
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">System Updates</p>
                          <p className="text-sm text-muted-foreground">Receive notifications for system updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Password Policy</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Minimum Password Length</p>
                          <p className="text-sm text-muted-foreground">Set the minimum length for user passwords</p>
                        </div>
                        <select
                          defaultValue="8"
                          className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                        >
                          <option value="6">6 characters</option>
                          <option value="8">8 characters</option>
                          <option value="10">10 characters</option>
                          <option value="12">12 characters</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Require Special Characters</p>
                          <p className="text-sm text-muted-foreground">
                            Require at least one special character in passwords
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Password Expiry</p>
                          <p className="text-sm text-muted-foreground">Force users to change passwords periodically</p>
                        </div>
                        <select
                          defaultValue="90"
                          className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                        >
                          <option value="never">Never</option>
                          <option value="30">30 days</option>
                          <option value="60">60 days</option>
                          <option value="90">90 days</option>
                          <option value="180">180 days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Login Security</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Require 2FA for all administrator accounts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Login Attempts</p>
                          <p className="text-sm text-muted-foreground">Maximum failed login attempts before lockout</p>
                        </div>
                        <select
                          defaultValue="5"
                          className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                        >
                          <option value="3">3 attempts</option>
                          <option value="5">5 attempts</option>
                          <option value="10">10 attempts</option>
                          <option value="unlimited">Unlimited</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                        <div>
                          <p className="font-medium">Session Timeout</p>
                          <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                        </div>
                        <select
                          defaultValue="30"
                          className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                          <option value="never">Never</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Database Settings */}
            {activeTab === "database" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Database Settings</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-yellow-500">
                    <p className="font-medium">Warning: Changing database settings may affect site functionality.</p>
                    <p className="text-sm mt-1">Please make sure you have a backup before making changes.</p>
                  </div>
                  <div>
                    <label htmlFor="dbHost" className="block text-sm font-medium mb-2">
                      Database Host
                    </label>
                    <input
                      type="text"
                      id="dbHost"
                      defaultValue="localhost"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dbName" className="block text-sm font-medium mb-2">
                        Database Name
                      </label>
                      <input
                        type="text"
                        id="dbName"
                        defaultValue="cherrypop_db"
                        className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="dbPort" className="block text-sm font-medium mb-2">
                        Database Port
                      </label>
                      <input
                        type="number"
                        id="dbPort"
                        defaultValue="3306"
                        className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dbUsername" className="block text-sm font-medium mb-2">
                      Database Username
                    </label>
                    <input
                      type="text"
                      id="dbUsername"
                      defaultValue="cherrypop_user"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="dbPassword" className="block text-sm font-medium mb-2">
                      Database Password
                    </label>
                    <input
                      type="password"
                      id="dbPassword"
                      defaultValue="••••••••••••"
                      className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
                      <RefreshCw className="h-4 w-4 mr-2 inline" /> Test Connection
                    </button>
                    <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
                      Backup Database
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* API Settings */}
            {activeTab === "api" && (
              <div>
                <h2 className="text-xl font-bold mb-6">API Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">API Access</h3>
                    <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                      <div>
                        <p className="font-medium">Enable API</p>
                        <p className="text-sm text-muted-foreground">Allow external applications to access the API</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">API Keys</h3>
                    <div className="bg-accent/5 border border-border rounded-md overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-accent/10">
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Key</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                              Created
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-accent/5">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">Mobile App</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <code className="px-2 py-1 bg-accent/10 rounded-md">••••••••••••••••</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">Jan 10, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <div className="flex justify-end space-x-2">
                                <button className="p-1 hover:bg-accent/10 rounded-md">
                                  <RefreshCw className="h-4 w-4" />
                                </button>
                                <button className="p-1 hover:bg-accent/10 rounded-md">
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-accent/5">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">Website Integration</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <code className="px-2 py-1 bg-accent/10 rounded-md">••••••••••••••••</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">Dec 15, 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <div className="flex justify-end space-x-2">
                                <button className="p-1 hover:bg-accent/10 rounded-md">
                                  <RefreshCw className="h-4 w-4" />
                                </button>
                                <button className="p-1 hover:bg-accent/10 rounded-md">
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
                        <Plus className="h-4 w-4 mr-2 inline" /> Generate New API Key
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Rate Limiting</h3>
                    <div className="flex items-center justify-between p-3 bg-accent/5 border border-border rounded-md">
                      <div>
                        <p className="font-medium">API Rate Limit</p>
                        <p className="text-sm text-muted-foreground">Maximum number of requests per minute</p>
                      </div>
                      <select
                        defaultValue="60"
                        className="p-2 bg-accent/5 border border-border focus:border-primary outline-none transition-colors rounded-md"
                      >
                        <option value="30">30 requests</option>
                        <option value="60">60 requests</option>
                        <option value="100">100 requests</option>
                        <option value="unlimited">Unlimited</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handleSave}
              disabled={saveStatus === "saving"}
              className={`px-6 py-2 bg-primary text-white rounded-md flex items-center ${
                saveStatus === "saving" ? "opacity-70" : "hover:bg-primary/90"
              } transition-colors`}
            >
              {saveStatus === "saving" ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Saving...
                </>
              ) : saveStatus === "success" ? (
                <>
                  <Check className="h-4 w-4 mr-2" /> Saved
                </>
              ) : saveStatus === "error" ? (
                <>
                  <X className="h-4 w-4 mr-2" /> Error
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" /> Save Changes
                </>
              )}
            </button>
            <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 transition-colors rounded-md">
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
