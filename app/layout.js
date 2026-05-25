import './globals.css'

export const metadata = {
  title: 'Mass Consultants | Precision Machining & Engineering Solutions | Dewas, M.P.',
  description: 'Mass Consultants is an engineering company based in Dewas, Madhya Pradesh, established in 2013, offering CNC machining, hydraulic stacker manufacturing, and ISO consultancy services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
