import { VideoProvider } from '../context/VideoContext';
import './/globals.css';

export const metadata = {
  title: 'Soundscape',
  description: 'A soundscape webapp to enjoy 10-second videos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <VideoProvider>{children}</VideoProvider>
      </body>
    </html>
  );
}
