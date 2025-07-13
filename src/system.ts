"use client"

import { createSystem, defaultConfig } from "@chakra-ui/react"
import { COLOR_ERROR, COLOR_NEUTRAL_ONE, COLOR_NEUTRAL_TWO, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_SUCCESS, COLOR_WARNING } from "./config"

const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            // fonts: {
            //     heading: { value: "Inter Variable" },
            //     body: { value: "Inter Variable" },
            // },
            colors: {
                brand: {
                    primary: { value: COLOR_PRIMARY },
                    secondary: { value: COLOR_SECONDARY },
                    success: { value: COLOR_SUCCESS },
                    warning: { value: COLOR_WARNING },
                    error: { value: COLOR_ERROR },
                    neutralOne: { value: COLOR_NEUTRAL_ONE },
                    neutralTwo: { value: COLOR_NEUTRAL_TWO },
                },
            },

        },
    },
})
export default system