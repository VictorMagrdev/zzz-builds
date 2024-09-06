import React from 'react'
import TierRow from './tier-row'

enum TierColums {
    SS = "S+",
    A = "A",
    B = "B",
    C = "C",
  }

export default function TableTier() {
  return (
    <div className="grid grid-flow-col grid-rows-4 gap-8">
      <TierRow title ={TierColums.SS}></TierRow>
      <TierRow title ={TierColums.A}></TierRow>
      <TierRow title ={TierColums.B}></TierRow>
      <TierRow title ={TierColums.C}></TierRow>
    </div>
  )
}