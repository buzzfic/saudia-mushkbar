/**
 * Renders a JSON-LD block. Server-rendered so structured data is present in the
 * initial HTML rather than injected after hydration.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          // JSON.stringify output is escaped for the `</script>` sequence only;
          // every value comes from our own constants, never from user input.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
