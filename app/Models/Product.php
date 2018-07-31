<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
        'status',
    ];

    public function reviews() 
    {
        return $this->hasMany(Review::Class);
    }

    public function detailOrders() 
    {
        return $this->hasMany(DetailOrder::Class);
    }

    public function images() 
    {
        return $this->hasMany(Image::Class);
    }

    public function category() 
    {
        return $this->belongsTo(Category::Class);
    }
}
