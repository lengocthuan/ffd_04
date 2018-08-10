<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'name',
        'description',
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
