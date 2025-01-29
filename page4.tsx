"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    onlyfansUrl: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We'll be in touch soon!",
    })
    // Reset form after submission
    setFormData({ name: "", email: "", onlyfansUrl: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-softPink py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12">Work With Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-roseGold/20 mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="onlyfansUrl" className="block text-sm font-medium text-gray-700">
                OnlyFans URL
              </label>
              <Input
                type="url"
                id="onlyfansUrl"
                name="onlyfansUrl"
                value={formData.onlyfansUrl}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-roseGold text-white hover:bg-roseGold/80 transition-colors">
              Submit Application
            </Button>
          </form>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Prefer to email us directly?</h2>
          <p className="text-gray-600 mb-6">
            You can reach us at{" "}
            <a href="mailto:hushly@gmail.com" className="text-roseGold hover:underline">
              hushly@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

