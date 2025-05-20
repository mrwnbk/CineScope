import AppLayout from "@/layouts/app-layout";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Modifier({ film, genres }) {

    const [values, setValues] = useState({
        titre: film.titre,
        realisateur: film.realisateur,
        annee: film.annee,
        temps: film.temps,
        genre: film.genre
    })

    const modifier = (e) => {
        e.preventDefault()
        router.put(`/update/film/${film.id}`, values)
        router.get(`/detail/film/${film.id}`)
    }

    return (
        <AppLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <form onSubmit={modifier} className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-md text-white space-y-4">
                    <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Modifier le film</h2>

                    <div>
                        <label className="block text-sm font-medium mb-1">Titre</label>
                        <input type="text" name="titre" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Réalisateur</label>
                        <input type="text" name="realisateur" value={values.realisateur} onChange={(e) => setValues({ ...values, realisateur: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Année</label>
                        <input type="number" name="annee" value={values.annee} onChange={(e) => setValues({ ...values, annee: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Temps</label>
                        <input type="number" name="temps" value={values.temps} onChange={(e) => setValues({ ...values, temps: e.target.value })} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>

                    {/* <div>
                        <label className="block text-sm font-medium mb-1">Genre</label>
                        <input type="text" name="genre" value={values.genre} onChange={(e) => setValues({...values, genre: e.target.value})} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div> */}

                    <div>
                        <label className="block text-sm font-medium mb-1">Choisir un genre</label>
                        <select className="bg-gray-700 rounded-md p-1" name="genre" id="" onChange={(e) => setValues({ ...values, genre: e.target.value })} value={values.genre}>
                            {genres.map((item) => (
                                <option key={item.id} value={item.nom}>{item.nom}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition">Modifier</button>
                </form>
            </div>
        </AppLayout>
    )
}