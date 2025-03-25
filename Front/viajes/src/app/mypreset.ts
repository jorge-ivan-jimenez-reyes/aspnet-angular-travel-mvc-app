import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e6f2ff',
            100: '#cce5ff',
            200: '#99caff',
            300: '#66b0ff',
            400: '#3395ff',
            500: '#007bff',
            600: '#0062cc',
            700: '#004999',
            800: '#003166',
            900: '#001833',
            950: '#000c1a'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#007bff',
                    inverseColor: '#ffffff',
                    hoverColor: '#0062cc',
                    activeColor: '#004999'
                },
                highlight: {
                    background: '#cce5ff',
                    focusBackground: '#99caff',
                    color: '#004999',
                    focusColor: '#003166'
                }
            },
            dark: {
                primary: {
                    color: '#66b0ff',
                    inverseColor: '#000c1a',
                    hoverColor: '#99caff',
                    activeColor: '#cce5ff'
                },
                highlight: {
                    background: 'rgba(0, 123, 255, 0.16)',
                    focusBackground: 'rgba(0, 123, 255, 0.24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    },
    components: {
        dropdown: {
            colorScheme: {
                light: {
                    root: {
                        background: '#ffffff',
                        color: '#007bff'
                    },
                    item: {
                        color: '#007bff',
                        hoverColor: '#004999',
                        hoverBackground: '#e6f2ff'
                    }
                },
                dark: {
                    root: {
                        background: '#001833',
                        color: '#66b0ff'
                    },
                    item: {
                        color: '#66b0ff',
                        hoverColor: '#cce5ff',
                        hoverBackground: '#003166'
                    }
                }
            }
        },
        inputtext: {
            colorScheme: {
                light: {
                    root: {
                        color: '#007bff'
                    }
                },
                dark: {
                    root: {
                        color: '#66b0ff'
                    }
                }
            }
        },
        tag: {
            colorScheme: {
                light: {
                    root: {
                        background: '#cce5ff',
                        color: '#004999'
                    }
                },
                dark: {
                    root: {
                        background: '#004999',
                        color: '#cce5ff'
                    }
                }
            }
        }
    },
    extend: {
        my: {
            transition: {
                normal: '0.3s'
            }
        }
    },
    css: ({ dt }: { dt: (token: string) => string }) => `
        /* Global CSS */
        body {
            transition: background-color ${dt('my.transition.normal')}, color ${dt('my.transition.normal')};
        }

        .p-datatable-filter-overlay-popover {
            background-color: #ffffff;
            color: #007bff;
        }

        .p-select-overlay {
            background-color: #f8f9fa;
            color: #007bff;
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .p-datatable-filter-overlay-popover .p-select-option,
        .p-select-overlay .p-select-option {
            color: #007bff;
            transition: background-color ${dt('my.transition.normal')}, color ${dt('my.transition.normal')};
        }

        .p-datatable-filter-overlay-popover .p-select-option:hover,
        .p-select-overlay .p-select-option:hover {
            background-color: #e6f2ff;
            color: #004999;
        }

        .p-datatable-filter-overlay-popover .p-select-option.p-highlight,
        .p-select-overlay .p-select-option.p-highlight {
            background-color: #cce5ff;
            color: #004999;
        }

        .p-select-overlay .p-select-items {
            padding: 0.5rem 0;
        }
    `
});

export default MyPreset;
