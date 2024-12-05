'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import SelectorFrontPage from "@/components/molecules/SelectorFrontPage"

export default function FormularioCreacion() {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [portada, setPortada] = useState('')
  const [explicacion, setExplicacion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario
    console.log({ titulo, descripcion, portada, explicacion })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="titulo">Título</Label>
        <Input
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Portada</Label>
        <SelectorFrontPage
          selectedImage={portada}
          onSelectImage={setPortada}
        />
      </div>
      <div>
        <Label htmlFor="explicacion">Explicación</Label>
        <Textarea
          id="explicacion"
          value={explicacion}
          onChange={(e) => setExplicacion(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  )
}

