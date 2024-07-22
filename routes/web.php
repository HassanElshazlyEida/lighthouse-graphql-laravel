<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Softonic\GraphQL\ClientBuilder;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/books/create', function () {
    return Inertia::render('AddBook');
 })->name('books.create');
Route::get('/books/{id}', function ($id) {
    return Inertia::render('Book', ['bookId' => $id]);
})->name('books.show');

Route::get("test",function(){
    // guzzle client
    $client = new \GuzzleHttp\Client();
    $response = $client->post(env('APP_URL').'/graphql', [
        'json' => [
            'query' => 'query {
                books {
                    id
                    title
                    author
                    category {
                        id
                        name
                    }
                }
            }'
        ]
    ]);
    $response = $response->getBody()->getContents();
    dd(json_decode($response));
    // Softonic client builder 
    $client = ClientBuilder::build(env('APP_URL').'/graphql');
    $query = 'query {
        books {
            id
            title
            author
            category {
                id
                name
            }
        }
    }';
    $response = $client->query($query);
    dd($response->getData());
});