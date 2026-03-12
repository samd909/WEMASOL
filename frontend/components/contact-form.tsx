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

type Field = {
  id: string
  label: string
  type: "text" | "number" | "textarea" | "select" | "multi" | "file"
  required?: boolean
  options?: string[]
}

const SECTIONS: { title: string; fields: Field[] }[] = [
  {
    title: "Kontaktinformationen",
    fields: [
      { id: "salutation", label: "Anrede", type: "select", options: ["Herr", "Frau"], required: true },
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
      { id: "houseConsumption", label: "Stromverbrauch Haushalt (kWh)", type: "number", required: true },
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
        required: true,
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
  const [form, setForm] = useState<any>({ extraOptions: [] })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const section = SECTIONS[step]

  const update = (id: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [id]: value }))
    setErrors((prev) => ({ ...prev, [id]: false }))
  }

  const toggleMulti = (id: string, option: string) => {
    const current = form[id] || []

    if (current.includes(option)) {
      update(id, current.filter((o: string) => o !== option))
    } else {
      update(id, [...current, option])
    }
  }

  const validateSection = () => {
    const newErrors: Record<string, boolean> = {}

    section.fields.forEach((field) => {
      if (!field.required) return

      const value = form[field.id]

      if (
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        newErrors[field.id] = true
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0]
      document.getElementById(firstError)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }

    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateSection()) return
    setStep((prev) => prev + 1)
  }

  const handleSubmit = async () => {
    if (!validateSection()) return

    const formData = new FormData()

    Object.entries(form).forEach(([key, value]: any) => {
      if (value === undefined || value === null) return

      if (key === "extraOptions") {
        formData.append("extraOptions", JSON.stringify(value || []))
        return
      }

      if (value instanceof File) {
        formData.append(key, value)
        return
      }

      formData.append(key, value)
    })

    const res = await fetch("https://api.wemasol.sdict.nl/api/leads/create/", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()

    if (!res.ok) {
      console.error(data)
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
        {section.fields.map((field) => (
          <div key={field.id} className="space-y-2" id={field.id}>
            <Label className={errors[field.id] ? "text-red-600" : ""}>
              {field.label} {field.required && "*"}
            </Label>

            {field.type === "text" && (
              <Input
                className={errors[field.id] ? "border-red-500" : ""}
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "number" && (
              <Input
                type="number"
                className={errors[field.id] ? "border-red-500" : ""}
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "textarea" && (
              <Textarea
                className={errors[field.id] ? "border-red-500" : ""}
                value={form[field.id] || ""}
                onChange={(e) => update(field.id, e.target.value)}
              />
            )}

            {field.type === "select" && (
              <Select
                value={form[field.id] || ""}
                onValueChange={(val) => update(field.id, val)}
              >
                <SelectTrigger className={errors[field.id] ? "border-red-500" : ""}>
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
                className={errors[field.id] ? "border-red-500" : ""}
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
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </Card>
  )
}