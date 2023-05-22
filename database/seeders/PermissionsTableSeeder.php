<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions

        Permission::create(['name' => 'view-user-menu']);
        Permission::create(['name' => 'view-user']);
        Permission::create(['name' => 'add-user']);
        Permission::create(['name' => 'update-user']);
        Permission::create(['name' => 'delete-user']);


        $superAdminRole = Role::create(['name' => 'super-admin']);
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);


        // create roles and assign existing permissions

        $adminRole->givePermissionTo('view-user-menu');
        $adminRole->givePermissionTo('view-user');
        $adminRole->givePermissionTo('add-user');
        $adminRole->givePermissionTo('update-user');
        $adminRole->givePermissionTo('delete-user');

        $superAdmin = \App\Models\User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@email.com',
            'is_active' => true,
            'is_default_password' => false,
        ]);

        $superAdmin->assignRole($superAdminRole);

        $admin = \App\Models\User::factory()->create([
            'name' => 'Manuel Adjei',
            'email' => 'admin@email.com',
            'is_active' => true,
            'is_default_password' => true,
        ]);

        $admin->assignRole($adminRole);

    }
}