"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. We will get back to you within 24 hours.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <Card className="p-6 md:p-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="John"
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              placeholder="Doe"
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 XXX XXXXXXX"
            className="transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="e.g., Solar system inquiry"
            className="transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Your Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Describe your request..."
            className="resize-none transition-all duration-200 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
              I agree to the processing of my data in accordance with the privacy policy. *
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">* Required fields</p>
        </div>
      </form>
    </Card>
  )
}
