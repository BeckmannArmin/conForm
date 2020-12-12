<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Http\Controllers\TaskCategoryController;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
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

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function conceptPapers()
    {
        return $this->hasMany(ConceptPaper::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function statuses()
    {
        return $this->hasMany(Status::class)->orderBy('order');
    }

    protected static function booted()
    {
        static::created(function ($user) {
            // Create default statuses
            $user->statuses()->createMany([
                [
                    'title' => 'Backlog',
                    'slug' => 'backlog',
                    'order' => 1
                ],
                [
                    'title' => 'Up Next',
                    'slug' => 'up-next',
                    'order' => 2
                ],
                [
                    'title' => 'In Progress',
                    'slug' => 'in-progress',
                    'order' => 3
                ],
                [
                    'title' => 'Done',
                    'slug' => 'done',
                    'order' => 4
                ]
            ]);
        });
    }
    
}
