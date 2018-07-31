<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'order_id',
        'payment_method',
        'status',
        'total',
    ];

    public function detailOrders() 
    {
        return $this->hasMany(DetailOrder::Class);
    }

    public function user() 
    {
        return $this->belongsTo(User::Class);
    }
}
