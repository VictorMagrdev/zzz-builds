import type { Metadata } from "next";
import Header from "@/components/molecules/Header";

export const metadata: Metadata= {
  title: 'Guides',
  description: 'Guides description',
}

export default function Guides() {
    return (
      <Header/>
    );
  }
  