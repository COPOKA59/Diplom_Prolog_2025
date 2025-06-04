import { definePreset, dt } from '@primeuix/themes';
import Aura from "@primeuix/themes/aura";

function getCssVar(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#6c7d99',
            100: '#63738c',
            200: '#5a687f',
            300: '#515e72',
            400: '#485366',
            500: getCssVar('--main-blue-color'),
            600: '#363e4c',
            700: '#2d343f',
            800: '#242933',
            900: '#1b1e26',
            950: '#121419'
        },
        secondary: {
            50: '#626972',
            100: '#575d66',
            200: '#4c5259',
            300: '#41464c',
            400: '#363a3f',
            500: getCssVar('--main-dark-color'),
            600: '#202326',
            700: '#151719',
            800: '#0a0b0c',
            900: '#0a0b0c',
            950: '#000000'
        },
        
        colorScheme: {
            light: {
                surface: {
                    0: '{secondary.500}',
                    50: '{secondary.50}',
                    100: '{secondary.600}',
                    200: '{secondary.500}',
                    300: '{secondary.300}',
                    400: '{secondary.400}',
                    500: '{secondary.500}',
                    600: getCssVar('--main-light-color'),
                    700: getCssVar('--main-light-color'),
                    800: '{secondary.600}',
                    900: '{secondary.500}',
                    950: '{secondary.500}'
                },
            },
            dark: {
                surface: {
                    0: getCssVar('--main-light-color'),
                    50: getCssVar('--main-light-color'),
                    100: getCssVar('--main-light-color'),
                    200: getCssVar('--main-light-color'),
                    300: getCssVar('--main-light-color'),
                    400: getCssVar('--main-light-color'),
                    500: '{secondary.500}',
                    600: '{secondary.600}',
                    700: '{secondary.600}',
                    800: '{secondary.600}',
                    900: '{secondary.500}',
                    950: '{secondary.500}'
                },
            }
        },
    },
    components: {
        inputtext: {
            border: {
                color: getCssVar('--main-light-color'),
            },
            hover: {
                border: {
                    color: getCssVar('--main-light-color'),
                },
            },
            css: ({ dt }) => `
            .p-inputtext.login-input {
            background: #CCCCCC;
            border: 1px solid grey;
            color: var(--main-dark-color);
            }
            .p-inputtext.login-input:hover {
            border: 1px solid var(--main-dark-color);
            }
            .p-inputtext::placeholder {
                color: gray;
            }
            .p-inputtext {
                --p-inputtext-border-color: var(--main-light-color);
                --p-inputtext-hover-border-color: var(--main-light-color);
            }
            `,
        },
        password: {
            css: ({ dt }) => `
            .login-input .p-password-input {
                background: #CCCCCC;
                border: 1px solid grey;
                color: var(--main-dark-color);
            }
            .login-input .p-password-input::placeholder {
                color: gray;
            }
            .login-input .p-password-input:hover {
                border: 1px solid var(--main-dark-color);
            }
            .p-password-toggle-mask-icon {
                color: var(--main-dark-color);
            }
            /* .p-password .p-inputtext {
                border-color: var(--main-light-color);
            } */
            `,
        },
        divider: {
            border: {
                color: getCssVar('--main-light-color'),
            },
            css: ({ dt }) => `
            .p-divider {
            --p-divider-border-color: var(--main-light-color);
            }
            `,
        },
        radiobutton: {
            border: {
                color: getCssVar('--main-light-color'),
            },
            hover: {
                border: {
                    color: '{primary.500}',
                },
            },
            checked: {
                border: {
                    color: getCssVar('--main-light-color'),
                },
                background: getCssVar('--main-light-color'),
                
            },
            css: ({ dt }) => `
            .p-radiobutton {
                --p-radiobutton-border-color: var(--main-light-color);
                --p-radiobutton-hover-border-color: var(--main-blue-color);
                --p-radiobutton-checked-border-color: var(--main-light-color);
                --p-radiobutton-checked-background: var(--main-light-color);
                --p-radiobutton-icon-checked-color: var(--main-dark-color);
                --p-radiobutton-icon-checked-hover-color: var(--main-dark-color);
                --p-radiobutton-checked-hover-border-color: var(--main-blue-color);
                --p-radiobutton-checked-hover-background: var(--main-blue-color);
            }
            `,
            /*
            --p-radiobutton-icon-checked-color: #c20000;
            --p-radiobutton-icon-checked-hover-color: var(--p-primary-contrast-color); 
             */
        },
        checkbox: {
            border: {
                color: getCssVar('--main-light-color'),
            },
            hover: {
                border: {
                    color: '{primary.500}',
                },
            },
            checked: {
                hover: {
                    background: '{primary.500}',
                },
                background: getCssVar('--main-light-color'),
            },
            css: ({ dt }) => `
            .p-checkbox {
                --p-checkbox-border-color: var(--main-light-color);
                --p-checkbox-hover-border-color: var(--main-blue-color);
                --p-checkbox-checked-hover-background: var(--main-blue-color);
                --p-checkbox-checked-background: var(--main-light-color);
                --p-checkbox-icon-checked-color: var(--main-dark-color);
                --p-checkbox-icon-checked-hover-color: var(--main-light-color);
            }
            `,
        },
        button: {
            css: ({ dt }) => `
            .p-button.p-button-outlined.p-button-primary {
                outline: 4px solid var(--main-blue-color);
                outline-offset: -4px;
                color: var(--main-light-color);
            } 
            .p-button.p-button-primary,
            .p-button.p-button-primary:hover {
                color: var(--main-light-color);
            }
            .p-button.p-button-secondary {
                background: var(--main-dark-color);
                border-color: var(--main-dark-color);
            }
            .p-button.p-button-secondary:hover {
                background: var(--p-secondary-600);
                border-color: var(--p-secondary-600);
            }
            `,
        },
        textarea: {
            border: {
                color: getCssVar('--main-light-color'),
            },
            hover: {
                border: {
                    color: getCssVar('--main-light-color'),
                },
            },
            css: ({ dt }) => `
            .p-textarea {
                --p-textarea-border-color: var(--main-light-color);
                --p-textarea-hover-border-color: var(--main-light-color);
            }
            `,
        },
        drawer: {
            css: ({ dt }) => `
            .sidebar ul {
            /* Удаляем дефолтные стили для спсика */
            list-style-type: none;
            padding: 0;
            margin: 0;
            }

            .sidebar li {
            /* Расстояние между элементами списка */
            /* margin: 15px 0; */
            }

            .sidebar a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: var(--main-light-color);
            padding: 15px;
            border-radius: 4px;
            transition: background-color 0.2s;
            }

            .sidebar a:hover {
            background-color: var(--p-surface-600);
            }
            `,
        },
        panel: {
            css: ({ dt }) => `
            .default-form .input-label {
                margin-top: auto; 
                margin-bottom: auto;
            }
            .default-form .p-divider {
                margin-top: 40px;
                margin-bottom: 40px;
            }
            .default-form-input .p-inputtext, .p-datepicker, .p-textarea, .p-multiselect {
                width: 100%;
            }
            .default-form textarea {
                resize: none;
            }

            .default-form-btns .p-radiobutton-group, .p-checkbox-group {
                display: grid;
                gap: 20px;
            }
            .default-form-btns .p-radiobutton-group div {
                display: flex;
                gap: 10px;
            }
            .default-form-btns .p-radiobutton-group div .v-row {
                display: flex;
                gap: 10px;
            }
            .default-form .search-button, .save-button, .default-button {
                display: flex;
                justify-content: end;
                gap: 20px;
            }
            `,
        },
        editor: {
            toolbar: {
                border: {
                    color: getCssVar('--main-light-color'),
                },
            },
            overlay: {
                border: {
                    color: getCssVar('--main-light-color'),
                }
            },
            content: {
                border: {
                    color: getCssVar('--main-light-color'),
                }
            },
            css: ({ dt }) => `
            /* .p-editor .ql-snow.ql-toolbar button.ql-active {
                background: grey;
                border-radius: 10px;
            } */
            .p-editor {
                --p-editor-toolbar-item-color: var(--p-primary-200);
                --p-editor-toolbar-item-hover-color: var(--p-primary-50);
                --p-editor-toolbar-item-active-color: var(--main-light-color);
            }
            `,
        },
        tabs: {
            css: ({ dt }) => `
            .p-tabs {
                --p-tabs-tab-color: var(--p-primary-50);
                --p-tabs-tab-hover-color: var(--main-light-color);
                --p-tabs-tab-active-color: var(--main-light-color);
            }
            .p-tablist-active-bar {
                background: var(--main-light-color);
            }
            `
        },
        stepper: {
            css: ({ dt }) => `
            .p-stepper {
                --p-stepper-step-title-color: var(--p-primary-50);
                --p-stepper-step-number-border-color: var(--p-primary-50);
                --p-stepper-step-number-color: var(--p-primary-50);

                --p-stepper-step-title-active-color: var(--main-light-color);
                --p-stepper-step-number-active-color: var(--main-light-color);
                --p-stepper-step-number-active-border-color: var(--main-light-color);

                --p-stepper-separator-background: var(--p-secondary-600);
            }
            `
        },
        scrollpanel: {
            css: ({ dt }) => `
            .p-scrollpanel-bar {
                --p-scrollpanel-bar-background: var(--main-light-color);
            }
            .p-scrollpanel {
                border: 1px solid var(--main-light-color);
            }
            `
        },
        listbox: {
            css: ({ dt }) => `
            .p-listbox {
                --p-listbox-option-selected-background: var(--p-secondary-200);
                --p-listbox-option-selected-focus-background: var(--p-secondary-50);
                border: none;
            }
            `
        },
        select: {
            css: ({ dt }) => `
            .p-select {
                --p-select-border-color: var(--main-light-color);
                --p-select-hover-border-color: var(--main-light-color);
                --p-select-placeholder-color: grey;
            }
            .p-select-dropdown {
                color: var(--main-light-color);
            }
            .p-select-option {
                --p-select-option-selected-background: var(--main-blue-color);
                --p-select-option-selected-focus-background: var(--main-blue-color);
            }
            .p-select-option-label {
                color: var(--main-light-color);
            }
            `
        },
        multiselect: {
            css: ({ dt }) => `
            .p-multiselect {
                --p-multiselect-border-color: var(--main-light-color);
                --p-multiselect-hover-border-color: var(--main-light-color);
                --p-multiselect-placeholder-color: grey;
            }
            `
        },
        autocomplete: {
            css: ({ dt }) => `
            .p-autocomplete-option {
                 --p-autocomplete-option-focus-color: var(--main-light-color);
            }
            `
        },
        datepicker: {
            css: ({ dt }) => `
            .p-datepicker-day {
                /* --p-datepicker-date-hover-background */
                --p-datepicker-date-hover-color: var(--main-light-color);
            }
            `
        },
        paginator: {
            css: ({ dt }) => `
            .p-paginator-first, .p-paginator-prev, 
            .p-paginator-next, .p-paginator-last, 
            .p-paginator-page, .p-paginator-page.p-paginator-page-selected {
                color: var(--main-light-color);
            }
            .p-paginator-page.p-paginator-page-selected {
                background: var(--main-blue-color);
            }
            
            `
        }
    },
    
})

export { MyPreset };