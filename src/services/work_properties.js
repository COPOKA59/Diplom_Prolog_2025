const workData = {
    workDirection: {
        label: 'Направление',
        options: [
        {
            label: 'гет',
            value: 'get'
        },
        {
            label: 'джен',
            value: 'gen'
        },
        {
            label: 'статья',
            value: 'article'
        },
        ],
    },
    workRating: {
        label: 'Рейтинг',
        options: [
        {
            label: 'G',
            value: 'G'
        },
        {
            label: 'PG-13',
            value: 'PG-13'
        },
        {
            label: 'R',
            value: 'R'
        },
        {
            label: 'NC-17',
            value: 'NC-17'
        },
        {
            label: 'NC-21',
            value: 'NC-21'
        },
        ],
    },
    workSize: {
        label: 'Размер',
        options: [
        {
            label: 'драббл',
            value: 'drabble'
        },
        {
            label: 'мини',
            value: 'mini'
        },
        {
            label: 'миди',
            value: 'midi'
        },
        {
            label: 'макси',
            value: 'maxi'
        },
        ],
    },
    workStatus: {
        label: 'Статус',
        options: [
        {
            label: 'в процессе',
            value: 'in-progress'
        },
        {
            label: 'завершено',
            value: 'complete'
        },
        ],
    },
};

import { ref } from "vue";
const selectedWorkType = ref('original');
const selectedTranslation = ref('no-translation');

const selectedWorkDirection = ref('get');
const selectedWorkRating = ref('G');
const selectedWorkSize = ref('drabble');
const selectedWorkStatus = ref('in-progress');

const resetWorkProps = () => {
    selectedWorkType.value = 'original';
    selectedTranslation.value = 'no-translation';
    
    selectedWorkDirection.value = 'get';
    selectedWorkRating.value = 'G';
    selectedWorkSize.value = 'drabble';
    selectedWorkStatus.value = 'in-progress';
}

export default { workData, resetWorkProps,
    selectedWorkType, selectedTranslation, selectedWorkDirection,
    selectedWorkRating, selectedWorkSize, selectedWorkStatus,};