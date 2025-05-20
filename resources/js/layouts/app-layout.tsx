import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <nav className="bg-gray-800 px-6 py-4 flex items-center justify-between shadow-md">
                <div className="text-2xl font-bold text-red-600">
                    CineScope
                </div>

                <div className="space-x-6 text-sm md:text-base">
                    <a href="/" className="hover:text-red-400 transition">Films</a>
                    <a href="/create/film" className="hover:text-red-400 transition">Create</a>
                    <a href="#" className="hover:text-red-400 transition">Mon compte</a>
                </div>
            </nav>

            <main className='px-5'>
                {children}
            </main>
        </div>
    );
}