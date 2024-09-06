import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <Header/>
    );
  }
  