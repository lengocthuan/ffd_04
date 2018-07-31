<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'numberphone',
        'birthday',
        'delivery_address',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 
        'remember_token',
    ];

    public function orders() 
    {
        return $this->hasMany(Order::Class);
    }

    public function images() 
    {
        return $this->hasMany(Image::Class);
    }

    public function reviews() 
    {
        return $this->hasMany(Review::Class);
    }

    public function socialAccounts() 
    {
        return $this->hasMany(SocialAccount::Class);
    }

    public function roles() 
    {
        return $this->belongsToMany(Role::Class);
    }
}
