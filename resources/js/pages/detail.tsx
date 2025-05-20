import AppLayout from "@/layouts/app-layout";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Detail({ film }) {

    const modif = (e, id) => {
        e.preventDefault()
        router.get(`/edit/film/${id}`)
    }

    const supprimer = (e, id) => {
        e.preventDefault()
        router.delete(`/delete/film/${id}`)
        router.get('/')

    }

    return (
        <AppLayout>
            <div>
                <a href="/">
                    <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                        Retour
                    </button>
                </a>


                <div className="flex justify-center mt-20 bg-gray-900">
                    <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-xl font-bold text-red-500 mb-2">{film.titre}</h2>
                        <p className="text-sm text-gray-300"><span className="font-semibold mr-1">Réalisateur :</span>{film.realisateur}</p>
                        <p className="text-sm text-gray-300"><span className="font-semibold mr-1">Année :</span>{film.annee}</p>
                        <p className="text-sm text-gray-300"><span className="font-semibold mr-1">Temps :</span>{film.temps}</p>
                        <p className="text-sm text-gray-300"><span className="font-semibold mr-1">Genre :</span>{film.genre}</p>

                        <div className="flex justify-between">
                            <button onClick={(e) => modif(e, film.id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>

                            <button onClick={(e) => supprimer(e, film.id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </AppLayout >
    )
}