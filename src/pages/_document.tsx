import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                {/* Make Color mode to persists when you refresh the page. */}
                <ColorModeScript/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
