import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta content=" Bely's Bakery Panadería Venezolana" name="description" />
                    <link href="/icon-light.png" rel="icon" />
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link
                        crossOrigin={"crossorigin"}
                        href="https://fonts.gstatic.com"
                        rel="preconnect"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
