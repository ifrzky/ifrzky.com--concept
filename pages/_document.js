import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const InitialProps = await Document.getInitialProps(ctx)
        return { ...InitialProps}
    }

    render() {
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument