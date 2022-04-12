import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Input,
  VStack, Text, Select
} from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useGlobalState } from "../Context";

export default function Form(props: FlexProps) {
  const [state, dispatch] = useGlobalState(); 
  const formik = useFormik({
    initialValues: {
      url: "",
      alias: "",
      days: 1
    },
    onSubmit: async (values) => {
      const res = await useFetch('post', values.url);
      console.log(res); 
      dispatch({Surl: "http://localhost:3001/" + res})
    }
  });
  return (
    <Flex {...props} align="center" justify="center" h="100vh">
      <Box  {...props} border='1px'   p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack  spacing={4} align="flex-start">
            <FormControl isRequired>
              <VStack spacing={4} align="flex-start"> 
                <FormLabel htmlFor="link">URL</FormLabel>
                <Input
                  id="url"
                  name="url"
                  type="url"
                  placeholder="Type Url to shrink...."
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.url}
                />
                <Text> 
                  URL outpout: www.Smurl/--------.com
                </Text>
              </VStack>
            </FormControl>

            {/* <FormControl >
              <VStack spacing={4} align="flex-start"> 
                <FormLabel htmlFor="name">Custom Alias *Optional* </FormLabel>
                <Input
                  id="alias"
                  name="alias"
                  type="alias"
                  placeholder="Type custom alias...."
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.alias}
                />
                </VStack>
            </FormControl>

            <FormControl isRequired>
              <VStack spacing={4} align="flex-start"> 
                <FormLabel htmlFor="days"> Experitaion day </FormLabel>
                <Select id='days' name="days"
                   value={formik.values.days} onChange={formik.handleChange}>
                  <option value={1}>1</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                </Select>
                </VStack>
            </FormControl> */}

            <Button type="submit" colorScheme="purple" isFullWidth>
                  Shrink Url!
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}