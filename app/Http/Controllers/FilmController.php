<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFilmRequest;
use App\Http\Requests\UpdateFilmRequest;
use App\Models\Film;
use App\Models\Genre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $films = Film::all();
        return Inertia::render('welcome', ['films' => $films]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $genres = Genre::all();
        return Inertia::render('create', ['genres' => $genres]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $film = new Film();
        $film->titre = $request->titre;
        $film->realisateur = $request->realisateur;
        $film->annee = $request->annee;
        $film->temps = $request->temps;
        $film->genre = $request->genre;
        $film->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $film = Film::find($id);
        return Inertia::render('detail', ['film' => $film]);
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $genres = Genre::all();
        $film = Film::find($id);
        return Inertia::render('modifier', ['film' => $film, 'genres' => $genres]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $film = Film::find($id);
        $film->titre = $request->titre;
        $film->realisateur = $request->realisateur;
        $film->annee = $request->annee;
        $film->temps = $request->temps;
        $film->genre = $request->genre;
        $film->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $film = Film::find($id);
        $film->delete();
    }
}
