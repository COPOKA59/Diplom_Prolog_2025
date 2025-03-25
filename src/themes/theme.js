import { definePreset } from '@primeuix/themes';
import Aura from "@primeuix/themes/aura";

function getCssVar(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: getCssVar('--main-blue-color'),
            100: getCssVar('--main-blue-color'),
            200: getCssVar('--main-blue-color'),
            300: getCssVar('--main-blue-color'),
            400: getCssVar('--main-blue-color'),
            500: getCssVar('--main-blue-color'),
            600: getCssVar('--main-blue-color'),
            700: getCssVar('--main-blue-color'),
            800: getCssVar('--main-blue-color'),
            900: getCssVar('--main-blue-color'),
            950: getCssVar('--main-blue-color')
        },
        secondary: {
            50: getCssVar('--main-dark-color'),
            100: getCssVar('--main-dark-color'),
            200: getCssVar('--main-dark-color'),
            300: getCssVar('--main-dark-color'),
            400: getCssVar('--main-dark-color'),
            500: getCssVar('--main-dark-color'),
            600: getCssVar('--main-dark-color'),
            700: getCssVar('--main-dark-color'),
            800: getCssVar('--main-dark-color'),
            900: getCssVar('--main-dark-color'),
            950: getCssVar('--main-dark-color')
        },
        accent: {
            50: 'red',
            100: 'red',
            200: 'red',
            300: 'red',
            400: 'red',
            500: 'red',
            600: 'red',
            700: 'red',
            800: 'red',
            900: 'red',
            950: 'red'
        },
        background: {
            50: getCssVar('--main-dark-color'),
            100: getCssVar('--main-dark-color'),
            200: getCssVar('--main-dark-color'),
            300: getCssVar('--main-dark-color'),
            400: getCssVar('--main-dark-color'),
            500: getCssVar('--main-dark-color'),
            600: getCssVar('--main-dark-color'),
            700: getCssVar('--main-dark-color'),
            800: getCssVar('--main-dark-color'),
            900: getCssVar('--main-dark-color'),
            950: getCssVar('--main-dark-color')
        },
        text: {
            50: getCssVar('--main-light-color'),
            100: getCssVar('--main-light-color'),
            200: getCssVar('--main-light-color'),
            300: getCssVar('--main-light-color'),
            400: getCssVar('--main-light-color'),
            500: getCssVar('--main-light-color'),
            600: getCssVar('--main-light-color'),
            700: getCssVar('--main-light-color'),
            800: getCssVar('--main-light-color'),
            900: getCssVar('--main-light-color'),
            950: getCssVar('--main-light-color')
        }
    },

    colorScheme: {
        light: {
          primary: {
            color: '{primary.500}',
            contrastColor: '#ffffff',
            hoverColor: '{primary.600}',
            activeColor: '{primary.700}',
          },
          secondary: {
            color: '{secondary.500}',
            contrastColor: '#ffffff',
            hoverColor: '{secondary.600}',
            activeColor: '{secondary.700}',
          },
          highlight: {
            background: '{primary.50}',
            focusBackground: '{primary.100}',
            color: '{primary.700}',
            focusColor: '{primary.800}',
          },
        },
        dark: {
            primary: {
                color: '{primary.500}',
                contrastColor: '#ffffff',
                hoverColor: '{primary.600}',
                activeColor: '{primary.700}',
              },
              secondary: {
                color: '{secondary.500}',
                contrastColor: '#ffffff',
                hoverColor: '{secondary.600}',
                activeColor: '{secondary.700}',
              },
              highlight: {
                background: '{primary.50}',
                focusBackground: '{primary.100}',
                color: '{primary.700}',
                focusColor: '{primary.800}',
              },
        },
      },
    /* components: {
        paginator: {
            colorScheme: {
                light: {
                    root: {
                        background: '{secondary.500}',
                        color: '{secondary.500}'
                    },
                },
                dark: {
                    root: {
                        background: '{secondary.500}',
                        color: '{secondary.500}'
                    },
                }
            }
        },
        button: {
            css: ({ dt }) => `
            .p-button.p-button-outlined.p-button-primary {
            outline: 4px solid var(--main-blue-color);
            outline-offset: -4px;
            }
            `,
            colorScheme: {
                light: {
                    primary: {color: '{primary.500}',},
                    secondary: {color: '{primary.500}',},
                },
                dark: {
                    primary: {background: '{primary.500}',},
                    secondary: {background: '{primary.500}',},
                }
            }
        }
    } */
});

export { MyPreset };