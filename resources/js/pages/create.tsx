import AppLayout from "@/layouts/app-layout";
import { router } from "@inertiajs/react";
import { useState } from "react"

export default function Create() {

    const [values, setValues] = useState({
        titre: '',
        realisateur: '',
        annee: '',
        temps: '',
        genre: ''
    });

    const creation = (e) => {
        e.preventDefault()
        router.post('/poster/film', values)
        router.get('/')
    }

    return (
        <AppLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <form onSubmit={creation} className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-md text-white space-y-4">
                    <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Ajouter un film</h2>

                    <div>
                        <label className="block text-sm font-medium mb-1">Titre</label>
                        <input type="text" name="titre" onChange={(e) => setValues({ ...values, titre: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Réalisateur</label>
                        <input type="text" name="realisateur" onChange={(e) => setValues({ ...values, realisateur: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Année</label>
                        <input type="number" name="annee" onChange={(e) => setValues({ ...values, annee: parseInt(e.target.value) })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Temps</label>
                        <input type="number" name="temps" onChange={(e) => setValues({ ...values, temps: parseInt(e.target.value) })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Genre</label>
                        <input type="text" name="genre" onChange={(e) => setValues({ ...values, genre: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition">Ajouter</button>
                </form>
            </div>

        </AppLayout>
    )
}