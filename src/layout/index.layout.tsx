import React from 'react'
import { BasicLayout } from './basic.layout'

interface Props {
  layout: 'basic'
  main: React.ReactNode
}

export function Layout({ layout, main }: Props) {
  const layouts = {
    basic: <BasicLayout main={main} />,
  }

  return layouts[layout] || <BasicLayout main={main} />
}
