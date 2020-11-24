<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class APITest extends TestCase
{
    /**
     * To run the unit tests: type ./vendor/bin/phpunit in the root directory of the project
     * 
     * 
     *  Here we are checking if the response is the status code 200 and 
     * if the returned structure matches what we expect.
     */
    public function testUserCreation()
    {
        $response = $this->json('POST', '/api/register', [
            'name' => 'Test User',
            'email' => str_random(10) . '@test.com',
            'password' => '12345',
        ]);

        $response->assertStatus(200)->assertJsonStructure([
            'success' => ['token', 'name']
        ]);
    }

    /**
     * Test if user endpoints works
     */
    public function testUserLogin()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'demo@test.com',
            'password' => 'secret'
        ]);

        $response->assertStatus(200)->assertJsonStructure([
            'success' => ['token']
        ]);
    }

    /**
     * Test if fetching of our task categories works
     */
    public function testCategoryFetch()
    {
        $user = \App\Models\User::find(1);

        $response = $this->actingAs($user, 'api')
            ->json('GET', '/api/taskcategory')
            ->assertStatus(200)->assertJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'created_at',
                    'updated_at',
                    'deleted_at'
                ]
            ]
        );
    }

    public function testCategoryCreation()
    {
        $this->withoutMiddleware();

        $response = $this->json('POST', '/api/taskcategory', [
            'name' => str_random(10),
        ]);

        $response->assertStatus(200)->assertJson([
            'status' => true,
            'message' => 'Category Created'
        ]);
    }

    /**
     * Test to delete some resources
     */
    public function testCategoryDeletion()
    {
        $user = \App\Models\User::find(1);

        $category = \App\Models\TaskCategory::create(['name' => 'To be deleted']);

        $response = $this->actingAs($user, 'api')
            ->json('DELETE', "/api/taskcategory/{$category->id}")
            ->assertStatus(200)->assertJson([
                'status' => true,
                'message' => 'Category Deleted'
            ]);
    }
}
