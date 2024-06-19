import { RefObject } from 'react'

export interface Section {
  section: string
  sectionRef: RefObject<HTMLDivElement>
}
