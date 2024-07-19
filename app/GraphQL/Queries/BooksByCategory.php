<?php

namespace App\GraphQL\Queries;

use App\Models\Book;

final class BooksByCategory
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        return Book::where('category_id', $args['category_id'])->get();
    }
}
