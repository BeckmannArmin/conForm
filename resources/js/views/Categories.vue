<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">
                Dashboard
            </h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">
                    Categories
                </li>
            </ol>

            <div class="card mb-4">
                <div class="card-header d-flex">
                   <span>
                        <i class="fas fa-chart-area mr-1"></i>
                    Categories Managment
                   </span>
                   <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewCategoryModal">
                       <span>
                           <i class="fa fa-plus"/>
                       </span>
                       Create New</button>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shirt</td>
                                <td>Image</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-danger btn-sm">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <b-modal ref="newCategoryModal" hide-footer title="Add new category">
                <div class="d-block">
                    <form v-on:submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input type="email" v-model="categoryData.name" class="form-control" id="name" placeholder="Enter category name"/>
                        </div>
                        <div class="form-group">
                            <label for="image">Choose an image</label>
                            <input type="file" v-on:change="attachImage" class="form-control" id="image"/>
                        </div>

                        <hr>
                      <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span>Save</button>
                      </div>
                    </form>
                </div>
            </b-modal>
        </div>
    </main>
</template>

<script>
export default {
    name: "category",
    data() {
        return {
            categoryData: {
                name: "",
                image: ""
            }
        };
    },
    methods: {
        attachImage() {
            // to use file reader TODO:
        },
        hideNewCategoryModal() {
            this.$refs.newCategoryModal.hide();
        }, 
        showNewCategoryModal() {
            this.$refs.newCategoryModal.show();
        },
        createCategory() {
            console.log('form submitted')
        }
    }
};
</script>
