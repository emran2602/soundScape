'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToSoundscape = () => {
    router.push('/soundscape');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#3B2F2F] via-[#4A3F35] to-[#5A4B41] text-gray-100 overflow-hidden px-4">
      <h1 className="text-5xl font-bold mb-6 text-gray-100 text-center">
        A Journey Through Afghanistan
      </h1>
      <p className="text-lg mb-8 text-gray-300 text-center">
        Discover glimpses of memory and the essence of home.
      </p>
      <button
        onClick={navigateToSoundscape}
        className="px-6 py-3 bg-[#7A1F33] text-gray-100 font-semibold rounded-lg hover:bg-[#9A2D45] transition duration-300 shadow-lg border border-gray-600"
      >
        Begin
      </button>
      <div className="fixed bottom-4 right-4 bg-gray-800 text-gray-100 py-1 px-3 rounded-lg shadow-lg">
        Emran Majidy
      </div>
    </div>
  );
}
