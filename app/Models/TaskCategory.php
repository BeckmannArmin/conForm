<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskCategory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['name'];

    /**
     * Here, the tasks() function is to 
     * help define relationships between the Category model and the Task model 
     * as a one-to-many relationship. What this means is one category has many tasks.
     */
    
    public function tasks() {
        return $this->hasMany(Task::class);
    }
}
