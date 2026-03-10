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

type Field = {
  id: string
  label: string
  type: "text" | "number" | "textarea" | "single" | "multi" | "file"
  required?: boolean
  options?: string[]
}

type Section = {
  title: string
  fields: Field[]
}

const FORM_SECTIONS: Section[] = [
  {
    title: "Kontaktinformationen",
    fields: [
      {
        id: "salutation",
        label: "Anrede",
        type: "single",
        required: true,
        options: ["Herr", "Frau"],
      },
      { id: "firstName", label: "Vorname", type: "text", required: true },
      { id: "lastName", label: "Nachname", type: "text", required: true },
      { id: "company", label: "Firmenname", type: "text" },
      { id: "phone", label: "Telefonnummer", type: "text", required: true },
      { id: "email", label: "E-Mail", type: "text", required: true },
    ],
  },
  {
    title: "Adresse",
    fields: [
      { id: "street", label: "Straße", type: "text", required: true },
      { id: "houseNumber", label: "Hausnummer", type: "text", required: true },
      { id: "zip", label: "PLZ", type: "text", required: true },
      { id: "city", label: "Ort / Stadt", type: "text", required: true },
    ],
  },
  {
    title: "Energieverbrauch",
    fields: [
      {
        id: "houseConsumption",
        label: "Stromverbrauch Haushalt (kWh)",
        type: "number",
        required: true,
      },
      {
        id: "heatingConsumption",
        label: "Stromverbrauch Heizung (kWh)",
        type: "number",
      },
      {
        id: "heatingInfo",
        label: "Zusätzliche Informationen zur Heizung",
        type: "textarea",
      },
      {
        id: "objectDetails",
        label: "Details zum Objekt",
        type: "textarea",
      },
    ],
  },
  {
    title: "Anlagenpräferenzen",
    fields: [
      {
        id: "priority",
        label: "Das ist mir wichtig",
        type: "single",
        required: true,
        options: [
          "gute Wirtschaftlichkeit",
          "maximale Leistung",
          "gute Optik der Anlage auf dem Dach",
          "etwas anderes",
        ],
      },
      {
        id: "extraOptions",
        label: "Diese Zusatzoptionen sind interessant",
        type: "multi",
        options: [
          "Stromspeicher",
          "Wallbox",
          "Notstromversorgung",
          "Warmwassererzeugung",
          "Einbindung einer vorhandenen Anlage",
        ],
      },
    ],
  },
  {
    title: "Bilder hochladen",
    fields: [
      {
        id: "roofPhotos",
        label: "Fotos der Dachfläche",
        type: "file",
        required: true,
      },
      {
        id: "buildingPhotos",
        label: "Fotos vom Gebäude",
        type: "file",
      },
      {
        id: "meterPhotos",
        label: "Fotos vom Zählerschrank",
        type: "file",
      },
      {
        id: "documents",
        label: "Zusätzliche Dokumente",
        type: "file",
      },
    ],
  },
  {
    title: "Sonstiges",
    fields: [
      {
        id: "referral",
        label: "Wie haben Sie von uns gehört?",
        type: "single",
        options: [
          "Empfehlung",
          "Zeitung",
          "Social Media",
          "Plakatwerbung",
          "Postsendung",
          "Supermarktwerbung",
          "Anderes",
        ],
      },
    ],
  },
]

export function ContactForm() {
  const { toast } = useToast()

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const section = FORM_SECTIONS[step]

  const updateAnswer = (id: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setErrors((prev) => ({ ...prev, [id]: false }))
  }

  const toggleMulti = (id: string, option: string) => {
    const current = answers[id] || []

    if (current.includes(option)) {
      updateAnswer(
        id,
        current.filter((o: string) => o !== option)
      )
    } else {
      updateAnswer(id, [...current, option])
    }
  }

  const validateSection = () => {
    const newErrors: Record<string, boolean> = {}

    section.fields.forEach((field) => {
      if (!field.required) return

      const value = answers[field.id]

      if (
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0) ||
        (value instanceof FileList && value.length === 0)
      ) {
        newErrors[field.id] = true
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0]
      document
        .getElementById(firstError)
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateSection()) return

    setIsSubmitting(true)

    const formData = new FormData()

    Object.entries(answers).forEach(([key, value]) => {
      if (value instanceof FileList) {
        Array.from(value).forEach((file) => formData.append(key, file))
      } else if (Array.isArray(value)) {
        // Join array as JSON string to send correctly to DRF ListField
        formData.append(key, JSON.stringify(value))
      } else {
        formData.append(key, value)
      }
    })

    try {
      const res = await fetch("http://localhost:8000/api/contact/create/", {
        method: "POST",
        body: formData, 
      })

      if (!res.ok) {
        throw new Error("Server error")
      }

      toast({
        title: "Erfolgreich gesendet",
        description: "Wir haben Ihre Anfrage erhalten.",
      })

      setAnswers({})
      setStep(0)
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden ist ein Fehler aufgetreten.",
      })
    }

    setIsSubmitting(false)
  }

  const isLast = step === FORM_SECTIONS.length - 1

  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">
        {section.title} ({step + 1}/{FORM_SECTIONS.length})
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {section.fields.map((field) => (
          <div key={field.id} className="space-y-2">

            <Label htmlFor={field.id}>
              {field.label} {field.required && "*"}
            </Label>

            {field.type === "text" && (
              <Input
                id={field.id}
                value={answers[field.id] || ""}
                onChange={(e) => updateAnswer(field.id, e.target.value)}
                className={errors[field.id] ? "border-red-500" : ""}
              />
            )}

            {field.type === "number" && (
              <Input
                id={field.id}
                type="number"
                value={answers[field.id] || ""}
                onChange={(e) => updateAnswer(field.id, e.target.value)}
                className={errors[field.id] ? "border-red-500" : ""}
              />
            )}

            {field.type === "textarea" && (
              <Textarea
                id={field.id}
                value={answers[field.id] || ""}
                onChange={(e) => updateAnswer(field.id, e.target.value)}
                className={errors[field.id] ? "border-red-500" : ""}
              />
            )}

            {field.type === "single" && (
              <Select
                value={answers[field.id] || ""}
                onValueChange={(val) => updateAnswer(field.id, val)}
              >
                <SelectTrigger
                  id={field.id}
                  className={errors[field.id] ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Bitte auswählen" />
                </SelectTrigger>

                <SelectContent>
                  {field.options?.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {field.type === "multi" && (
              <div className="space-y-2">
                {field.options?.map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <Checkbox
                      checked={answers[field.id]?.includes(opt)}
                      onCheckedChange={() => toggleMulti(field.id, opt)}
                    />
                    <Label>{opt}</Label>
                  </div>
                ))}
              </div>
            )}

            {field.type === "file" && (
              <Input
                id={field.id}
                type="file"
                multiple
                onChange={(e) => updateAnswer(field.id, e.target.files)}
                className={errors[field.id] ? "border-red-500" : ""}
              />
            )}

            {errors[field.id] && (
              <p className="text-sm text-red-500">
                Dieses Feld ist erforderlich
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-8">
        {step > 0 ? (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        ) : (
          <div />
        )}

        {!isLast ? (
          <Button
            onClick={() => {
              if (validateSection()) setStep(step + 1)
            }}
          >
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
    </Card>
  )
}