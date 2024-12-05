'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import SelectorFrontPage from "@/components/molecules/SelectorFrontPage"

const obtenerNombreAutor = () => "Nombre del Autor"

export default function FormularioGuia() {
  const [titulo, setTitulo] = useState('')
  const [portada, setPortada] = useState('')
  const [explicacion, setExplicacion] = useState('')
  const autor = obtenerNombreAutor()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ titulo, autor, portada, explicacion })
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Preview Section */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          {portada ? (
            <div className="absolute inset-0">
              <img
                src={portada}
                alt="Portada"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-transparent">
                <div className="p-6 text-white max-w-2xl">
                  <h1 className="text-3xl font-bold break-words">{titulo || 'Título de tu guía'}</h1>
                  <p className="mt-2">Por {autor}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center text-white">
              <p>Selecciona una imagen de portada</p>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <Label htmlFor="titulo" className="text-lg">Título</Label>
            <Input
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="text-lg"
              placeholder="Escribe el título de tu guía"
              required
            />
          </div>
          
          <div>
            <Label className="text-lg">Portada</Label>
            <SelectorFrontPage
              selectedImage={portada}
              onSelectImage={setPortada}
            />
          </div>

          <div>
            <Label htmlFor="explicacion" className="text-lg">Explicación</Label>
            <Textarea
              id="explicacion"
              value={explicacion}
              onChange={(e) => setExplicacion(e.target.value)}
              className="min-h-[200px]"
              placeholder="Escribe una explicación detallada de tu guía..."
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Guardar
          </Button>
        </div>
      </form>
    </div>
  )
}

