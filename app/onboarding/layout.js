import Skip from '../components/skipButton'
import Stepper from '../components/stepper'



export const metadata = {
  title: 'Fintech SME',
  description: 'Fintech app to help small businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Skip name="Skip" />
        {children}
        <Stepper />
    </body>
    </html>
  )
}
