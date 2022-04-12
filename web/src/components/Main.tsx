import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing="1rem"
    width="100%"
    mt="-45vh"
    pt="14rem"
    px="1rem"
    {...props}
  />
)
