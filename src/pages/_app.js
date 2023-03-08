// pages/_app.js
import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'

import "../styles/globals.scss"
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    secondary: "#8B57C6",
    primary: '#191919',
    bg: "",
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp