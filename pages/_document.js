/**
 * @summary This page is only executed on the server side so one of
 * the actions we can do is get it signed cookie.
 */

import Document, { Head, Main, NextScript } from "next/document";
import { getServerSideToken, getUserScript } from "../lib/auth";

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const props = await Document.getInitialProps(context);
    const userData = await getServerSideToken(context.req);

    return { ...props, ...userData };
  }

  render() {
    const { user = {} } = this.props;

    return (
      <html>
        <Head />
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{
              __html: getUserScript(user),
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
