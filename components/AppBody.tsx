'use client'

import { Box, Image } from '@mantine/core'
import { motion } from 'motion/react'
import { useElementSize } from '@mantine/hooks'
import { useState } from 'react'
import { Suspense } from 'react'
import WonModal from './WonModal'

const SPIN_DURATION = 5
const WHEEL_FRAME_DEFAULT_WIDTH = 440

export default function AppBody() {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinned, setSpinned] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)

  const { ref: wheelFrameRef, width: wheelFrameWidth } = useElementSize()

  const widthFactor = wheelFrameWidth
    ? wheelFrameWidth / WHEEL_FRAME_DEFAULT_WIDTH
    : 1

  function onSpin() {
    if (isSpinning || spinned) return
    setIsSpinning(true)
    setSpinned(true)
    setRotation(10 * 360)

    setTimeout(() => {
      setIsSpinning(false)
      setModalOpened(true)
    }, SPIN_DURATION * 1000)
  }

  return (
    <>
      <Suspense>
        <WonModal opened={modalOpened} widthFactor={widthFactor} />
      </Suspense>
      {/* <Box pt={19} >
        <Image
          alt='logo'
          src='/theme-tet/site-logo.png'
          w={300 * widthFactor}
          height={'auto'}
          mx='auto'
        />
      </Box> */}
      <Box pos='relative' pt={6}>
        <Image
          alt='xmas-top'
          src='/theme-tet/xmas-top-2.webp'
          w={448 * widthFactor}
          h={'auto'}
          mx='auto'
        />
        <Box pos="absolute" bottom={'15%'} left={'50%'} style={{transform: 'translateX(-50%)'}}>
          <motion.div
            animate={
              isSpinning || spinned
                ? { scale: 1, filter: 'drop-shadow(0 0 0 rgba(255, 210, 77, 0))' }
                : {
                    scale: [1, 1.06, 1],
                    filter: [
                      'drop-shadow(0 0 0 rgba(255, 210, 77, 0))',
                      'drop-shadow(0 0 18px rgba(255, 210, 77, 0.45))',
                      'drop-shadow(0 0 0 rgba(255, 210, 77, 0))',
                    ],
                  }
            }
            whileHover={isSpinning || spinned ? undefined : { scale: 1.08 }}
            whileTap={isSpinning || spinned ? undefined : { scale: 0.96 }}
            transition={{
              duration: 1.4,
              repeat: isSpinning || spinned ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: `${wheelFrameWidth / 448 * 232}px`,
              cursor: isSpinning || spinned ? 'default' : 'pointer',
            }}
            onClick={onSpin}
          >
            <Image
              alt='xmas-top'
              src='/theme-tet/spin-button.png'
              w='100%'
              h='auto'
              mx='auto'
            />
          </motion.div>
        </Box>
      </Box>
      <Box pos='relative'>
       <Image
          ref={wheelFrameRef}
          alt='wheel-frame'
          src='/theme-tet/wheel-frame.png'
          w='100%'
          maw={WHEEL_FRAME_DEFAULT_WIDTH}
          mah={700}
          mx='auto'
          height={'auto'}
          mt={-90 * widthFactor}
        />
        {wheelFrameWidth !== 0 && <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: SPIN_DURATION, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: widthFactor * 150,
            left: 4,
            right: 0,
            zIndex: -1,
            width: 232 * widthFactor,
            height: 232 * widthFactor,
            margin: '0 auto',
          }}
        >
          <Image alt='wheel' src='/theme-tet/wheel-6.webp' style={{ objectFit: 'cover' }} />
        </motion.div>}
        {/* <Image
          alt='pin'
          src='/theme-tet/wheel-nail.png'
          maw={40 * widthFactor}
          w='100%'
          mx='auto'
          pos='absolute'
          top={250 * widthFactor}
          left={0}
          right={0}
        /> */}
      </Box>
      <Box pos='relative'>
        {/* <Image
          alt='spin-now'
          src='/spin-now.svg'
          pos='absolute'
          top={-100}
          maw={369}
          left={0}
          right={0}
          mx='auto'
          style={{ cursor: 'pointer', zIndex: 1 }}
          onClick={onSpin}
        /> */}
        {/* <Flex
          pos='relative'
          justify='space-between'
          align='center'
          maw={369}
          mx='auto'
          mt={-55 * widthFactor}
          h={35}
          pl='sm'
          pr='md'
        >
          <Image alt='1spin' src='/1spin.svg' w={62.26} h={24} />
          <Image
            alt='more-details'
            src='/more-details.svg'
            h={13.8}
            w={78.84}
            mr={-13}
          />
        </Flex> */}
      </Box>
    </>
  )
}
