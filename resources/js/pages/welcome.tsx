import AppLayout from "@/layouts/app-layout";
import { router } from "@inertiajs/react";

export default function Welcome({ films }) {

    const detail = (e, id) => {
        e.preventDefault()
        router.get(`/detail/film/${id}`)
    }

    return (
        <AppLayout>
            <div>

                <h1 className="text-4xl font-extrabold text-center text-gray-400 mt-10 mb-6">
                    Découvrez Nos Films
                </h1>


                <div className="flex justify-center flex-wrap gap-6 mt-10">
                    {films.map((item, index) => (
                        <div key={index} className="bg-gray-800 text-white rounded-xl shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300">
                            <h2 className="text-xl font-bold text-red-500 mb-2">{item.titre}</h2>
                            <p className="text-sm text-gray-300"><span className="font-semibold">Genre :</span> {item.genre}</p>

                            <button onClick={(e) => detail(e, item.id)} type="submit" className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                Détails
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </AppLayout>
    )
}