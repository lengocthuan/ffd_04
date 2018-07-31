<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailOrder extends Model
{
    protected $fillable = [
        'order_id',
        'product_id',
        'amount',
    ];

    public function product() 
    {
        return $this->belongsTo(Product::Class);
    }

    public function order() 
    {
        return $this->belongsTo(Order::Class);
    }
}
