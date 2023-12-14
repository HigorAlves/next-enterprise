'use client'

import { Button } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ExitDraftModeLink() {
  const pathname = usePathname()

  return (
    <Link href={`/api/disable-draft?redirect=${pathname}`}>
      <Button color="red" variant="default">
        Exit Draft Mode
      </Button>
    </Link>
  )
}
