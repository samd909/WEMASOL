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

const SECTIONS = [
  {
    title: "Kontaktinformationen",
    fields: [
      { id: "salutation", label: "Anrede", type: "select", options: ["Herr", "Frau"] },
      { id: "firstName", label: "Vorname", type: "text" },
      { id: "lastName", label: "Nachname", type: "text" },
      { id: "company", label: "Firmenname", type: "text" },
      { id: "phone", label: "Telefonnummer", type: "text" },
      { id: "email", label: "E-Mail", type: "text" },
    ],
  },
  {
    title: "Adresse",
    fields: [
      { id: "street", label: "Straße", type: "text" },
      { id: "houseNumber", label: "Hausnummer", type: "text" },
      { id: "zip", label: "PLZ", type: "text" },
      { id: "city", label: "Ort / Stadt", type: "text" },
    ],
  },
  {
    title: "Energieverbrauch",
    fields: [
      { id: "houseConsumption", label: "Stromverbrauch Haushalt (kWh)", type: "number" },
      { id: "heatingConsumption", label: "Stromverbrauch Heizung (kWh)", type: "number" },
      { id: "heatingInfo", label: "Zusätzliche Informationen zur Heizung", type: "textarea" },
      { id: "objectDetails", label: "Details zum Objekt", type: "textarea" },
    ],
  },
  {
    title: "Anlagenpräferenzen",
    fields: [
      {
        id: "priority",
        label: "Das ist mir wichtig",
        type: "select",
        options: [
          "gute Wirtschaftlichkeit",
          "maximale Leistung",
          "gute Optik der Anlage auf dem Dach",
          "etwas anderes",
        ],
      },
    ],
  },
  {
    title: "Zusatzoptionen",
    fields: [
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
      { id: "required_file", label: "Foto Dachfläche", type: "file", required: true },
      { id: "optional_file", label: "Zusätzliches Foto", type: "file" },
    ],
  },
]

export function ContactForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<any>({
    extraOptions: [],
  })

  const section = SECTIONS[step]

  const update = (id: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [id]: value }))
  }

  const toggleMulti = (id: string, option: string) => {
    const current = form[id] || []
    if (current.includes(option)) {
      update(id, current.filter((o: string) => o !== option))
    } else {
      update(id, [...current, option])
    }
  }

  const handleSubmit = async () => {
  const formData = new FormData()

    Object.entries(form).forEach(([key, value]: any) => {
      if (value === undefined || value === null || value === "") return

      // Send numbers as strings
      if (key === "houseConsumption" || key === "heatingConsumption") {
        formData.append(key, String(value))
        return
      }

      // Send multi-select properly
      if (Array.isArray(value)) {
        value.forEach((v: any) => formData.append(`${key}[]`, v))
        return
      }

      // File upload
      if (value instanceof File) {
        formData.append(key, value)
        return
      }

      // Regular fields
      formData.append(key, value)
    })

    const res = await fetch("http://localhost:8000/api/leads/create/", {
      method: "POST",
      body: formData,
    })

    if (!res.ok) {
      const err = await res.json()
      console.error("Backend error:", err)
      alert("Error submitting form")
      return
    }

    alert("Form submitted successfully!")
    setForm({ extraOptions: [] })
    setStep(0)
  }

  const isLast = step === SECTIONS.length - 1

  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">
        {section.title} ({step + 1}/{SECTIONS.length})
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {section.fields.map((field: any) => (
          <div key={field.id} className="space-y-2">
            <Label>{field.label}</Label>

            {field.type === "text" && (
              <Input
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "number" && (
              <Input
                type="number"
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "textarea" && (
              <Textarea
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "select" && (
              <Select value={form[field.id] || ""} onValueChange={(val) => update(field.id, val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Bitte auswählen" />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((opt: string) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {field.type === "multi" && (
              <div className="space-y-2">
                {field.options?.map((opt: string) => (
                  <div key={opt} className="flex items-center gap-2">
                    <Checkbox
                      checked={form[field.id]?.includes(opt)}
                      onCheckedChange={() => toggleMulti(field.id, opt)}
                    />
                    <Label>{opt}</Label>
                  </div>
                ))}
              </div>
            )}

            {field.type === "file" && (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) update(field.id, file)
                }}
              />
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
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </Card>
  )
}