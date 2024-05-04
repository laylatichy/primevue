export default {
    colorScheme: {
        light: {
            blur: '1.5px',
            info: {
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: '{blue.200}',
                color: '{blue.600}',
                detailColor: '{surface.700}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{blue.100}'
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: '{green.200}',
                color: '{green.600}',
                detailColor: '{surface.700}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{green.100}'
                }
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: '{yellow.200}',
                color: '{yellow.600}',
                detailColor: '{surface.700}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{yellow.100}'
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: '{red.200}',
                color: '{red.600}',
                detailColor: '{surface.700}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{red.100}'
                }
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.200}',
                color: '{surface.600}',
                detailColor: '{surface.700}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.200}'
                }
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.950}',
                color: '{surface.50}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.800}'
                }
            }
        },
        dark: {
            blur: '10px',
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                color: '{blue.500}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)'
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                color: '{green.500}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)'
                }
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                color: '{yellow.500}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)'
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                color: '{red.500}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)'
                }
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.700}',
                color: '{surface.300}',
                detailColor: '{surface.0}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.700}'
                }
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.100}',
                color: '{surface.950}',
                detailColor: '{surface.950}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.100}'
                }
            }
        }
    }
};