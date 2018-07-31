<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'comment',
        'rate',
    ];

    public function product() 
    {
        return $this->belongsTo(Product::Class);
    }

    public function user() 
    {
        return $this->belongsTo(User::Class);
    }
}
