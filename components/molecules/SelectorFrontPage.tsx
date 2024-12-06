'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AuthBackground from '@/assets/images/auth-background.webp'
import { getAllCharacters } from '@/libs/api_general'
import { Character } from '@/types/api-general';
import { CardFrontPage } from '../organisms/CardFrontPage'

const imagenes = [
  AuthBackground
]

interface SelectorPortadaProps {
  selectedImage: string
  onSelectImage: (image: string) => void
}

export default function SelectorPortada({ selectedImage, onSelectImage }: SelectorPortadaProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getAllCharacters()
    .then((data: Character[]) => {
      setCharacters(data)
    })
    .catch((e) => {
      alert('Error al consultar la informacion del api')
    })
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full h-12"
        >
          {selectedImage ? 'Cambiar portada' : 'Seleccionar portada'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Seleccionar portada</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4">
          {characters.map((imagen, index) => (
            <div 
              key={index}
              className="relative h-[150px] cursor-pointer overflow-hidden rounded-lg border-2 hover:border-primary transition-colors"
              onClick={() => {
                onSelectImage(imagen.nombre)
                setIsOpen(false)
              }}
            >
              <CardFrontPage
                  key={imagen.id}
                  character={imagen}
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

