import React from 'react';
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from "@storybook/addon-a11y";
// import Center from '../src/components/Center/Center'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// Agregar un decorador o un componente que funcionará para todos los componentes
export const decorators = [
  Story => (
    <ThemeProvider theme = { theme }>
      <CSSReset />
      <Box m = "4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
  withKnobs,
  withA11y,
  (storyFn, context) => withConsole()(storyFn)(context),
]