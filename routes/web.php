<?php

use App\Http\Controllers\FilmController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [FilmController::class, 'index']);
Route::get('/create/film', [FilmController::class, 'create']);
Route::post('/poster/film', [FilmController::class, 'store']);
Route::get('/detail/film/{id}', [FilmController::class, 'show']);
Route::get('/edit/film/{id}', [FilmController::class, 'edit']);
Route::put('/update/film/{id}', [FilmController::class, 'update']);
Route::delete('/delete/film/{id}', [FilmController::class, 'destroy']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
