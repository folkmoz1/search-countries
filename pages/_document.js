import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body
                className={
                    "dark:bg-dark-blue-background bg-light-gray min-h-screen"
                }
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
