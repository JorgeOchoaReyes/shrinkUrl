import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  VStack
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function UrlView(props: FlexProps) {
  
  return (
    <Flex {...props} align="center" justify="center" h="100vh">
    <Box  {...props}    p={6} rounded="md">
        <ArrowRightIcon w={10} h={10} /> 
        <ArrowRightIcon w={10} h={10}/> 
        <ArrowRightIcon w={10} h={10} />
        <ArrowRightIcon w={10} h={10} /> 
    </Box>
  </Flex>
  );
}