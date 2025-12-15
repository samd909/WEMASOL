"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

// 🔥 Your dynamic questions array
const QUESTIONS = [
  {
    id: "name",
    question: "What is your name?",
    type: "text",
    required: true,
  },
  {
    id: "email",
    question: "What is your email?",
    type: "text",
    required: true,
  },
  {
    id: "systemType",
    question: "What solar system are you interested in?",
    type: "single",
    required: true,
    options: ["Off-grid", "On-grid", "Hybrid", "Not sure"],
  },
  {
    id: "roofType",
    question: "What type of roof do you have?",
    type: "multi",
    required: false,
    options: ["Flat roof", "Pitched roof", "Metal roof", "Tile roof"],
  },
  {
    id: "comments",
    question: "Any additional info?",
    type: "textarea",
    required: false,
  },
]

export function ContactForm() {
  const { toast } = useToast()

  const [step, setStep] = useState(0) // current question index
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const current = QUESTIONS[step]

  const updateAnswer = (value: any) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
  }

  const toggleMulti = (option: string) => {
    const currentVals = answers[current.id] || []
    if (currentVals.includes(option)) {
      updateAnswer(currentVals.filter((o: string) => o !== option))
    } else {
      updateAnswer([...currentVals, option])
    }
  }

  const goNext = () => {
    if (current.required && !answers[current.id]) return
    setStep((s) => s + 1)
  }

  const goBack = () => setStep((s) => s - 1)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    console.log("Final submitted answers:", answers)

    await new Promise((res) => setTimeout(res, 1500))

    toast({
      title: "Submission complete",
      description: "We received your answers!",
    })

    setIsSubmitting(false)
  }

  const isLast = step === QUESTIONS.length - 1

  return (
    <Card className="p-6 md:p-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <h2 className="text-2xl font-bold mb-6">Questions ({step + 1}/{QUESTIONS.length})</h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-lg font-medium">
            {current.question} {current.required && "*"}
          </Label>

          {/* TEXT INPUT */}
          {current.type === "text" && (
            <Input
              value={answers[current.id] || ""}
              onChange={(e) => updateAnswer(e.target.value)}
              required={current.required}
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          )}

          {/* TEXTAREA */}
          {current.type === "textarea" && (
            <Textarea
              rows={5}
              value={answers[current.id] || ""}
              onChange={(e) => updateAnswer(e.target.value)}
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          )}

          {/* SINGLE SELECT */}
          {current.type === "single" && (
            <Select
              value={answers[current.id] || ""}
              onValueChange={(val) => updateAnswer(val)}
            >
              <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {current.options?.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* MULTI SELECT */}
          {current.type === "multi" && (
            <div className="space-y-2">
              {current.options?.map((opt) => (
                <div key={opt} className="flex items-center gap-2">
                  <Checkbox
                    checked={answers[current.id]?.includes(opt)}
                    onCheckedChange={() => toggleMulti(opt)}
                  />
                  <Label className="cursor-pointer">{opt}</Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between pt-4">
          {step > 0 ? (
            <Button variant="outline" onClick={goBack}>
              Back
            </Button>
          ) : (
            <div />
          )}

          {!isLast ? (
            <Button onClick={goNext} disabled={current.required && !answers[current.id]}>
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
