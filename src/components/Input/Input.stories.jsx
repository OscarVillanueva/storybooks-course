import React from 'react'
import Input from './Input'

const InputStory = {
    title: "Form/Input",
    component: Input
}

export const Full = () => <Input variant = "full" />
export const Mid = () => <Input variant = "mid" />

export const Small = () => <Input variant = "small" />
Small.storyName = "Small input"


export default InputStory