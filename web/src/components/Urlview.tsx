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
import { useGlobalState } from "../Context";

export default function UrlView(props: FlexProps) {
  const [state, dispatch] = useGlobalState(); 

  return (
    <Flex {...props} align="center" justify="center" h="100vh">
    <Box  {...props} border='1px'   p={6} rounded="md">
        <VStack spacing={4} align="flex-start">
          
            <FormLabel htmlFor="email">Shrinked URL</FormLabel>
            <Input
              readOnly
              id="url"
              name="url"
              type="url"
              placeholder="Type Url to shrink...."
              variant="filled"
              // onChange={changeHandler}
              value={state.Surl}
            />
         
          <Box>
            Link Expires in: 30 days
          </Box>
          <Tooltip  hasArrow label='Copy Link' >
            <Button colorScheme="purple" isFullWidth >Copy Link</Button>
          </Tooltip>

        </VStack>
    </Box>
  </Flex>
  );
}

