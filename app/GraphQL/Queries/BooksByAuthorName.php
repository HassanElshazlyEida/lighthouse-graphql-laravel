<?php

namespace App\GraphQL\Queries;

use App\Models\Book;

final class BooksByAuthorName
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
       return Book::where('author', 'like', '%'.$args['author'].'%')->get();

    }
}
