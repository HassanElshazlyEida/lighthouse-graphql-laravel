<?php

namespace App\GraphQL\Queries;

class LatestPost
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return \App\Models\Post::latest()->first();
    }
}
