"use client"
import { useRef, useState } from "react"

type VerificationInputProps = {
  length?: number
  onChange?: (code: string) => void
}

const VerificationInput = ({ length = 7, onChange }: VerificationInputProps) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""))
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return // bara siffror

    const newValues = [...values]
    newValues[index] = value.slice(-1) // bara ett tecken
    setValues(newValues)
    onChange?.(newValues.join(""))

    // Hoppa till nästa input
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: 'space-between', margin: '0.5rem 0' }}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={el => { inputs.current[i] = el }}
          type="text"
          inputMode="numeric"
          value={val}
          onChange={e => handleChange(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          style={{
            width: "70px",
            height: "70px",
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "600",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            outline: "none",
            backgroundColor: 'lightgray'
          }}
        />
      ))}
    </div>
  )
}

export default VerificationInput