export interface Items {
    title: string
    rows: Row[]
  }
  
  export interface Row {
    title?: string
    description?: string
    imageHref?: string
  }