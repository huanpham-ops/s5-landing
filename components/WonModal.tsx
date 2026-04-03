'use client'

import { Center, Image, Modal } from '@mantine/core'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  opened: boolean
  widthFactor: number
}

const DEFAULT_URL = 'https://www.s5.com/en/signup?aff=xd'

const URL_MAP: Record<string, string> = {
  's5-landing-3.vercel.app': 'https://www.s5casino.ph/en/signup?aff=OCV50',
  's5-landing-4.vercel.app': 'https://www.s5casino.ph/en/signup?aff=OCV67',
  's5-landing-5.vercel.app': 'https://www.s5casino.ph/en/signup?aff=OCV68',
}

export default function WonModal({ opened, widthFactor }: Props) {
  const [href, setHref] = useState(DEFAULT_URL)

  useEffect(() => {
    const hostname = window.location.hostname
    setHref(URL_MAP[hostname] || DEFAULT_URL)
  }, [])

  return (
    <Modal
      opened={opened}
      withCloseButton={false}
      onClose={() => {}}
      styles={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        inner: { paddingTop: 223.5, paddingLeft: 0, paddingRight: 0 },
        body: { padding: 0, background: 'transparent' },
        content: { background: 'transparent' },
      }}
    >
      <Center component={Link} href={href}>
        <Image src='/you-won.svg' alt='you-won' w={416 * widthFactor} />
      </Center>
    </Modal>
  )
}
