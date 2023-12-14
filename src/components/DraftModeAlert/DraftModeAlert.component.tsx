import React from 'react'
import { Alert, Space } from '@mantine/core'
import { draftMode } from 'next/headers'
import { ExitDraftModeLink } from '~/components'

export function DraftModeAlert() {
  const isDraftModeEnabled = draftMode().isEnabled

  return (
    isDraftModeEnabled && (
      <Alert variant="filled" color="red" title="Draft Mode Engaged: Adventures in the Contentful Realm!">
        Heads up, Contentful Crew! The Draft Mode is on, so you might bump into some unfinished content pieces or
        surprise edits. Navigate with creativity!
        <Space h={'xl'} />
        <ExitDraftModeLink />
      </Alert>
    )
  )
}
