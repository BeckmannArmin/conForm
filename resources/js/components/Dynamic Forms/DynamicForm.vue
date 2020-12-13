<template>
<div>
    <div class="container">
        <button class="btn btn-success mt-5 mb-5" @click="addNewField">New input field</button>
        <div class="card mb-3"
        v-for="(field,index) in fields" :key="index">
        <div class="card-body">
            <span class="float-right" style="cursor:pointer" @click="removeField(index)">x</span>
            <h4 class="card-title">Add input field (index: {{ index }} ) </h4>

            <div class="field-form">
                <input type="text" class="form-control mb-2" placeholder="Name" v-model="field.name">
                <textarea class="form-control" cols="30" rows="10" placeholder="Features" v-model="field.features"></textarea>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
       return {
           fields: [
               {
                   name: '',
                   features: ''
               }
           ]
       }
    },
    methods: {
        addNewField() {
            this.fields.push({
                name: '',
                fetures: ''
            });
        },
        removeField(index) {
            this.fields.splice(index, 1);
        }
    }
}
</script>

<style scoped>

</style>