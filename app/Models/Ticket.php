<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $table = 'ticket';


    protected $fillable = [
        'name',
        'email',
        'ip_address',
        'urgency',
        'subject',
        'details',
        'department',
        'assigned_name',
        'status',
        'attachment'
    ];

    public function comment(){
        return $this->hasMany(Comment::class);
    }
}