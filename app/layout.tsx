import Modal from '@/components/Modal'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trello 2.0C Clone',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>
        {children}
        <Modal />
        </body>
    </html>
  )
}
