import React from 'react'
import { Button } from "@chakra-ui/core";
import { text, boolean } from "@storybook/addon-knobs";

const ChakraButtonStory = {
    title: "Chakra/Button",
    component: Button,
    argTypes: {
        variantColor: { 
            description: "Change de background color of the button, using chakra ui",
            defaultValue: { summary: "green"},
            control: {
                type: 'select',
                options: ['green', "red", 'teal'],
            }
        },
        children: { 
            description: "Content of the button",
            defaultValue: { summary: "Button"},
            control: "text"
        },
        disabled: {
            description: "Turn off the button",
            control: "boolean"
        },
        onClick: { 
            action: "clicked",
            description: "Function on the onclick",
        }
    }
}

const Template = args => <Button { ...args }/>

export const Success = Template.bind({})
Success.args = {
    variantColor: "green",
    children: "Sucess"
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: "red",
    children: "Danger"
}

export const Log = Template.bind({})
Log.args = {
    variantColor: "teal",
    children: "log",
    onClick: () => console.log("Click in log")
}

export const Knobs = Template.bind({})
Knobs.args = {
    variantColor: "red",
    children: text("Label", "Button label"),
}

export default ChakraButtonStory