'use client'
 
export default function GlobalError({
  reset,
}: {
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2> مشکلی رخ داده است 🥲</h2>
        <button onClick={() => reset()}>تلاش مجدد 🤭</button>
      </body>
    </html>
  )
}