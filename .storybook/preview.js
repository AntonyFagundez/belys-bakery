import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "../pages/_app"
import { RecoilRoot } from "recoil";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withChakra = (StoryFn) => {

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <StoryFn />
      </ChakraProvider>
    </RecoilRoot>
  )
}


export const decorators = [withChakra]