export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-3xl p-8">
        <h1 className="text-4xl md:text-5xl font-bold">IPIndia.ai</h1>
        <p className="mt-4 text-gray-700 text-lg">
          AI-powered IP Intelligence for India &amp; Global Markets — weekly filings digest, watchlists,
          prior-art &amp; similarity insights.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Subscribe to the weekly digest</h2>
          <p className="text-gray-600 mt-1">No spam. Unsubscribe anytime.</p>

          {/* Replace the iframe src with your Beehiiv embed URL once your publication is set up. */}
          <div className="mt-4 rounded-lg border">
            <iframe
              src="https://embeds.beehiiv.com/YOUR-PUBLICATION-EMBED-KEY"
              data-test-id="beehiiv-embed"
              height="320"
              width="100%"
              frameBorder="0"
              title="Subscribe"
            />
          </div>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          <a href="https://www.linkedin.com/company/ipindia-ai" target="_blank" rel="noreferrer" className="underline">
            Follow us on LinkedIn
          </a>
          {" "}•{" "}
          <a href="mailto:support@ipindia.ai" className="underline">Contact</a>
        </footer>
      </div>
    </main>
  );
}
