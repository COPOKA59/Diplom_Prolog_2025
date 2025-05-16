<template>
    <v-row>
        <v-col cols="12" lg="2" md="2" sm="12" :class="{'input-label': inputType === 'input' }"> 
            <label>{{label}}</label>
        </v-col>

        <v-col v-if="inputType === 'input'" cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
            <!-- <InputText :id="inputId"/> -->
            <InputText />
        </v-col>

        <v-col v-else-if="inputType === 'checkbox'" cols="12" lg="10" md="10" sm="12" class="default-form-btns"> 
            <CheckboxGroup>
                <div v-for="option of options" :key="option.value">
                    <!-- <Checkbox :inputId="option.inputId" :value="option.value"/>
                    <label :for="option.inputId"> {{option.label}} </label> -->
                    <Checkbox :value="option.value"/>
                    <label> {{option.label}} </label>
                </div>
            </CheckboxGroup>
        </v-col>

        <v-col v-else-if="inputType === 'radiobutton'" cols="12" lg="10" md="10" sm="12" class="default-form-btns"> 
            <RadioButtonGroup v-model="props.modelValue">
                <div v-for="option of options" :key="option.value">
                    <!-- <RadioButton :inputId="option.inputId" :value="option.value"/>
                    <label :for="option.inputId"> {{option.label}} </label> -->
                    <RadioButton :value="option.value"/>
                    <label> {{option.label}} </label>
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
    // inputId: String,
    inputType: String,
    options: Array,
    modelValue: String
});
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