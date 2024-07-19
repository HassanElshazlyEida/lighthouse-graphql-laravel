<?php

namespace App\GraphQL\Queries;

use App\Models\Book;

final class BooksByFeatured
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        return Book::where('featured', $args['featured'])->get();
    }
}
