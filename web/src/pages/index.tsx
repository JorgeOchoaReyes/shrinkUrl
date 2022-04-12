import {
  Box,
  Flex,
  Link,
  Text
} from '@chakra-ui/react'
import Form from '../components/Form'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import UrlView from '../components/Urlview';
import About from '../components/About';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Arrow from '../components/Arrow';



const Index = () => (
   <Container backgroundImage="linear-gradient(to bottom, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)" height="auto">
      <Flex>
        <Box fontSize={45}> 
          <ArrowRightIcon fontSize={30} />
          Shrink URLs 
          <ArrowLeftIcon fontSize={30}/>
        </Box>
      </Flex>

      <Main>
        <Flex direction="column" >
          <Flex direction="row" justify='space-evenly'>
            <Form /> 
            <Arrow />
            <UrlView />
          </Flex>
          <About />
        </Flex>
      </Main>


      <Footer>
        <Text>Made with Chakra, Next.js, Formik, Node, and Express ❤️</Text>
      </Footer>

  </Container>
)

export default Index
