// @flow
import * as React from 'react';
import {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clocks',
    component: Clock
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}

