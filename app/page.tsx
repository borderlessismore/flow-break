// "/" is rewritten to /app.html (see next.config.mjs), which holds the full prototype.
// This page is only a fallback if the rewrite is ever removed.
export default function Page() {
  return (
    <iframe
      src="/app.html"
      title="Flow Break"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100dvh', border: 0 }}
    />
  )
}
