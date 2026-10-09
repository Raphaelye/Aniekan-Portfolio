import { createContext, useContext } from 'react'

export const ContactSheetContext = createContext<(() => void) | null>(null)

export function useContactSheet() {
  const open = useContext(ContactSheetContext)
  if (!open) throw new Error('useContactSheet must be used inside ContactSheetProvider')
  return open
}
