import { definePreset } from '@primeuix/themes';
import Aura from "@primeuix/themes/aura";

function getCssVar(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

const MyPreset2 = definePreset(Aura, {
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
                    0: '#ffffff',
                    50: '{secondary.50}',
                    100: '{secondary.100}',
                    200: '{secondary.200}',
                    300: '{secondary.300}',
                    400: '{secondary.400}',
                    500: '{secondary.500}',
                    600: '{secondary.600}',
                    700: '{secondary.600}',
                    800: '{secondary.600}',
                    900: '{secondary.500}',
                    950: '{secondary.500}'
                },
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#ffffff',
                    100: '#ffffff',
                    200: '#ffffff',
                    300: '#ffffff',
                    400: '#ffffff',
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
            color: var(--main-dark-color)
            }
            .p-inputtext.login-input:hover {
            border: 1px solid var(--main-dark-color);
            }
            `,
        },
        divider: {
            border: {
                color: getCssVar('--main-light-color'),
            }
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
            }
        },
        button: {
            css: ({ dt }) => `
            .p-button.p-button-outlined.p-button-primary {
            outline: 4px solid var(--main-blue-color);
            outline-offset: -4px;
            color: var(--main-light-color);
            } 
            .p-button.p-button-primary {
            color: var(--main-light-color);
            }
            .p-button.p-button-primary:hover {
            color: var(--main-light-color);
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
        }
    }
})

export { MyPreset2 };