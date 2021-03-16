import React from 'react'
// import Center from '../Center/Center'
import Button from './Button'

const ButtonStory = {
    // title: "Form/Control/Button",
    title: "Form/Button",
    args: {
        children: "Button"
    },
    // decorators: [
    //     Story => <Center>{ <Story /> }</Center>
    // ],
    component: Button
} 

export const Primary = () => <Button variant = "primary">Primary</Button>

export const Secondary = () => <Button variant = "secondary">Secondary</Button>

export const Success = () => <Button variant = "success">Success</Button>

export const Danger = () => <Button variant = "danger">Danger</Button>

const Template = args => <Button { ...args } />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: "primary",
    // children: "Primary args"    
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: "secondary",
    // children: "Secondary args"    
}

export default ButtonStory;