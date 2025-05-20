<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('films')->insert([
            [
                'titre' => 'Jhon Wick',
                'realisateur' => 'Jhon Wick',
                'annee' => 2014,
                'temps' => 101,
                'genre' => 'Action'
            ],
            [
                'titre' => 'Hollywoo',
                'realisateur' => 'Frédéric Berthe',
                'annee' => 2011,
                'temps' => 90,
                'genre' => 'Comédie'
            ],
            [
                'titre' => 'Titanic',
                'realisateur' => 'James Cameron',
                'annee' => 1997,
                'temps' => 194,
                'genre' => 'Drame'
            ],
            [
                'titre' => 'Star Wars',
                'realisateur' => 'George Lucas',
                'annee' => 1977,
                'temps' => 121,
                'genre' => 'Sience-fiction'
            ],
            [
                'titre' => '13th',
                'realisateur' => 'Ava DuVernay',
                'annee' => 2016,
                'temps' => 100,
                'genre' => 'Documentaire'
            ]
        ]);
    }
}
