<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    use HasFactory;
    protected $fillable = [
        'bidStampId ',
        'bidderId ',
        'bidTime',
        'startDate',
        'endDate',
        'favorites',
        'auctionCount'
    ];
}
