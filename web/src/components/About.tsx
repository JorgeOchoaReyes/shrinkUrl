import { useFormik } from "formik";
import {
  Box,
  Flex,
  FlexProps,

  HStack,
  VStack
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function About(props: FlexProps) {
  
  return (
    <Flex {...props} align="center" justify="center" wrap="wrap">
    <Box  {...props}   p={6} rounded="md" >
        <Box fontSize={40}> How its done:</Box>
          
        <HStack spacing={4} direction="column" wrap="wrap" fontSize={22}>
          <Box>
           You give us a url: https://exampleLink.com/
          </Box>
          <Box>
            <ArrowRightIcon />
          </Box>
          <Box>
            Link is hashed to a 8 digit number or custom alias
          </Box>
          <Box>
            <ArrowRightIcon />
          </Box>
          <Box>
            Output: https://smallUrl/--------.com
          </Box>
        </HStack>
    </Box>
  </Flex>
  );
}