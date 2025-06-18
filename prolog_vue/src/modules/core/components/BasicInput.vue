<template>
    <v-row>
        <v-col cols="12" lg="2" md="2" sm="12" :class="{'input-label': inputType === 'input' }"> 
            <label>{{label}}</label>
        </v-col>

        <v-col v-if="inputType === 'input'" cols="12" lg="10" md="10" sm="12" class="default-form-input">
            <InputText v-model="modelValue"/>
        </v-col>

        <v-col v-else-if="inputType === 'checkbox'" cols="12" lg="10" md="10" sm="12" class="default-form-btns"> 
            <CheckboxGroup v-model="modelValue">
                <div v-for="option of options" :key="option.id">
                    <Checkbox :value="option.id"/>
                    <label> {{option.name}} </label>
                </div>
            </CheckboxGroup>
        </v-col>

        <v-col v-else-if="inputType === 'radiobutton'" cols="12" lg="10" md="10" sm="12" class="default-form-btns"> 
            <RadioButtonGroup v-model="modelValue">
                <div v-for="option of options" :key="option.id">
                    <RadioButton :value="option.id"/>
                    <label> {{option.name}} </label>
                </div>
            </RadioButtonGroup>
        </v-col>
    </v-row>
</template>

<script setup>
import { VCol, VRow } from "vuetify/lib/components/index.mjs";
import { InputText, CheckboxGroup, Checkbox, RadioButtonGroup, RadioButton } from "primevue";

const props = defineProps({
    label: String,
    inputType: String,
    options: Array,
});
const modelValue = defineModel();
</script>

<style scoped>
.input-label {
    margin-top: auto; 
    margin-bottom: auto;
}
.default-form-input .p-inputtext, .p-datepicker {
    width: 100%;
}
.default-form-btns .p-checkbox-group {
    display: grid;
    gap: 20px;
}
.default-form-btns .p-checkbox-group div {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>