import { GoogleAnalytics } from '@next/third-parties/google'

export default function GoogleTag() {
  return (
    <>
      <GoogleAnalytics gaId='G-GGQF5KZ3E6' />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-GGQF5KZ3E6');
          `,
        }}
      />
    </>
  )
}
