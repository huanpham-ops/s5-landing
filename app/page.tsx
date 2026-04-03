import AppBody from '@/components/AppBody'
import { Box, Image } from '@mantine/core'

export default async function Home() {
  return (
    <main>
      <Box pos='relative' h='100vh' mih={956} style={{ overflow: 'hidden' }}>
        <Image
          src='/theme-tet/bg.png'
          alt='bg'
          pos='absolute'
          h='100%'
          style={{ zIndex: -2, objectFit: 'cover', objectPosition: 'bottom' }}
        />
        {/* <Image
          src='/xmas-bottom.svg'
          alt='xmas-bottom'
          pos='absolute'
          bottom={0}
          mah={69}
          style={{ zIndex: -1, objectFit: 'contain', objectPosition: 'bottom' }}
        /> */}
        <AppBody />
      </Box>
    </main>
  )
}
