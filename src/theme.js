// Função para extrair e atualizar cores do JSON para o tema
import themeJson from "./material-theme.json";

let colors
function updateThemeColors(json) {
    // Extraia as cores do JSON
    colors = {
        primary: json.schemes.light.primary,
        primaryLight: json.palettes.primary[80],
        primaryDark: json.schemes.light.primaryDark,
        primaryContrastText: json.schemes.light.onPrimary,
        secondary: json.schemes.light.secondary,
        secondaryLight: json.schemes.light.secondaryContainer,
        secondaryDark: json.schemes.light.secondaryFixed,
        secondaryContrastText: json.schemes.light.onSecondary,
        tertiary: json.schemes.light.tertiary,
        tertiaryLight: json.schemes.light.tertiaryContainer,
        tertiaryDark: json.schemes.light.tertiaryFixed,
        tertiaryContrastText: json.schemes.light.onTertiary,
        error: json.schemes.light.error,
        errorLight: json.schemes.light.errorContainer,
        errorDark: json.schemes.light.onError,
        errorContrastText: json.schemes.light.onError,
        background: json.schemes.light.background,
        backgroundContrast: json.schemes.light.onBackground,
        surface: json.schemes.light.surface,
        surfaceVariant: json.schemes.light.surfaceVariant,
        outline: json.schemes.light.outline,
        shadow: json.schemes.light.shadow,
        scrim: json.schemes.light.scrim,
        inverseSurface: json.schemes.light.inverseSurface,
        inverseOnSurface: json.schemes.light.inverseOnSurface,
        inversePrimary: json.schemes.light.inversePrimary,
        surfaceDim: json.schemes.light.surfaceDim,
        surfaceBright: json.schemes.light.surfaceBright,
        surfaceContainerLowest: json.schemes.light.surfaceContainerLowest,
        surfaceContainerLow: json.schemes.light.surfaceContainerLow,
        surfaceContainer: json.schemes.light.surfaceContainer,
        surfaceContainerHigh: json.schemes.light.surfaceContainerHigh,
        surfaceContainerHighest: json.schemes.light.surfaceContainerHighest,
    };

    // Atualize o tema com as cores extraídas
    return {
        palette: {
            primary: {
                main: colors.primary,
                light: colors.primaryLight,
                dark: colors.primaryDark,
                contrastText: colors.primaryContrastText,
            },
            secondary: {
                main: colors.secondary,
                light: colors.secondaryLight,
                dark: colors.secondaryDark,
                contrastText: colors.secondaryContrastText,
            },
            error: {
                main: colors.error,
                light: colors.errorLight,
                dark: colors.errorDark,
                contrastText: colors.errorContrastText,
            },
            background: {
                default: colors.background,
                paper: colors.background,
            },
            text: {
                primary: colors.backgroundContrast, // Ajuste conforme necessário
                secondary: colors.surface, // Ajuste conforme necessário
                disabled: colors.surfaceVariant, // Ajuste conforme necessário
            },
        },
    };
}

// Exemplo de uso com o JSON fornecido
// const themeJson = {
//     "description": "TYPE: CUSTOM\nMaterial Theme Builder export 2024-09-11 12:13:36",
//     "seed": "#CB2224",
//     "coreColors": {
//         "primary": "#CB2224"
//     },
//     "extendedColors": [],
//     "schemes": {
//         "light": {
//             "primary": "#904A44",
//             "surfaceTint": "#904A44",
//             "onPrimary": "#FFFFFF",
//             "primaryContainer": "#FFDAD6",
//             "onPrimaryContainer": "#3B0907",
//             "secondary": "#775653",
//             "onSecondary": "#FFFFFF",
//             "secondaryContainer": "#FFDAD6",
//             "onSecondaryContainer": "#2C1513",
//             "tertiary": "#715B2E",
//             "onTertiary": "#FFFFFF",
//             "tertiaryContainer": "#FEDFA6",
//             "onTertiaryContainer": "#261900",
//             "error": "#BA1A1A",
//             "onError": "#FFFFFF",
//             "errorContainer": "#FFDAD6",
//             "onErrorContainer": "#410002",
//             "background": "#FFF8F7",
//             "onBackground": "#231918",
//             "surface": "#FFF8F7",
//             "onSurface": "#231918",
//             "surfaceVariant": "#F5DDDB",
//             "onSurfaceVariant": "#534341",
//             "outline": "#857371",
//             "outlineVariant": "#D8C2BF",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#392E2D",
//             "inverseOnSurface": "#FFEDEA",
//             "inversePrimary": "#FFB4AC",
//             "primaryFixed": "#FFDAD6",
//             "onPrimaryFixed": "#3B0907",
//             "primaryFixedDim": "#FFB4AC",
//             "onPrimaryFixedVariant": "#73332E",
//             "secondaryFixed": "#FFDAD6",
//             "onSecondaryFixed": "#2C1513",
//             "secondaryFixedDim": "#E7BDB8",
//             "onSecondaryFixedVariant": "#5D3F3C",
//             "tertiaryFixed": "#FEDFA6",
//             "onTertiaryFixed": "#261900",
//             "tertiaryFixedDim": "#E0C38C",
//             "onTertiaryFixedVariant": "#584419",
//             "surfaceDim": "#E8D6D4",
//             "surfaceBright": "#FFF8F7",
//             "surfaceContainerLowest": "#FFFFFF",
//             "surfaceContainerLow": "#FFF0EF",
//             "surfaceContainer": "#FCEAE8",
//             "surfaceContainerHigh": "#F6E4E2",
//             "surfaceContainerHighest": "#F1DEDC"
//         },
//         "light-medium-contrast": {
//             "primary": "#6E302B",
//             "surfaceTint": "#904A44",
//             "onPrimary": "#FFFFFF",
//             "primaryContainer": "#AA6058",
//             "onPrimaryContainer": "#FFFFFF",
//             "secondary": "#593B38",
//             "onSecondary": "#FFFFFF",
//             "secondaryContainer": "#8F6C68",
//             "onSecondaryContainer": "#FFFFFF",
//             "tertiary": "#544015",
//             "onTertiary": "#FFFFFF",
//             "tertiaryContainer": "#897142",
//             "onTertiaryContainer": "#FFFFFF",
//             "error": "#8C0009",
//             "onError": "#FFFFFF",
//             "errorContainer": "#DA342E",
//             "onErrorContainer": "#FFFFFF",
//             "background": "#FFF8F7",
//             "onBackground": "#231918",
//             "surface": "#FFF8F7",
//             "onSurface": "#231918",
//             "surfaceVariant": "#F5DDDB",
//             "onSurfaceVariant": "#4E3F3E",
//             "outline": "#6C5B59",
//             "outlineVariant": "#897674",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#392E2D",
//             "inverseOnSurface": "#FFEDEA",
//             "inversePrimary": "#FFB4AC",
//             "primaryFixed": "#AA6058",
//             "onPrimaryFixed": "#FFFFFF",
//             "primaryFixedDim": "#8D4842",
//             "onPrimaryFixedVariant": "#FFFFFF",
//             "secondaryFixed": "#8F6C68",
//             "onSecondaryFixed": "#FFFFFF",
//             "secondaryFixedDim": "#745450",
//             "onSecondaryFixedVariant": "#FFFFFF",
//             "tertiaryFixed": "#897142",
//             "onTertiaryFixed": "#FFFFFF",
//             "tertiaryFixedDim": "#6F592C",
//             "onTertiaryFixedVariant": "#FFFFFF",
//             "surfaceDim": "#E8D6D4",
//             "surfaceBright": "#FFF8F7",
//             "surfaceContainerLowest": "#FFFFFF",
//             "surfaceContainerLow": "#FFF0EF",
//             "surfaceContainer": "#FCEAE8",
//             "surfaceContainerHigh": "#F6E4E2",
//             "surfaceContainerHighest": "#F1DEDC"
//         },
//         "light-high-contrast": {
//             "primary": "#44100D",
//             "surfaceTint": "#904A44",
//             "onPrimary": "#FFFFFF",
//             "primaryContainer": "#6E302B",
//             "onPrimaryContainer": "#FFFFFF",
//             "secondary": "#341C19",
//             "onSecondary": "#FFFFFF",
//             "secondaryContainer": "#593B38",
//             "onSecondaryContainer": "#FFFFFF",
//             "tertiary": "#2E2000",
//             "onTertiary": "#FFFFFF",
//             "tertiaryContainer": "#544015",
//             "onTertiaryContainer": "#FFFFFF",
//             "error": "#4E0002",
//             "onError": "#FFFFFF",
//             "errorContainer": "#8C0009",
//             "onErrorContainer": "#FFFFFF",
//             "background": "#FFF8F7",
//             "onBackground": "#231918",
//             "surface": "#FFF8F7",
//             "onSurface": "#000000",
//             "surfaceVariant": "#F5DDDB",
//             "onSurfaceVariant": "#2E211F",
//             "outline": "#4E3F3E",
//             "outlineVariant": "#4E3F3E",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#392E2D",
//             "inverseOnSurface": "#FFFFFF",
//             "inversePrimary": "#FFE7E4",
//             "primaryFixed": "#6E302B",
//             "onPrimaryFixed": "#FFFFFF",
//             "primaryFixedDim": "#521A16",
//             "onPrimaryFixedVariant": "#FFFFFF",
//             "secondaryFixed": "#593B38",
//             "onSecondaryFixed": "#FFFFFF",
//             "secondaryFixedDim": "#402623",
//             "onSecondaryFixedVariant": "#FFFFFF",
//             "tertiaryFixed": "#544015",
//             "onTertiaryFixed": "#FFFFFF",
//             "tertiaryFixedDim": "#3B2A02",
//             "onTertiaryFixedVariant": "#FFFFFF",
//             "surfaceDim": "#E8D6D4",
//             "surfaceBright": "#FFF8F7",
//             "surfaceContainerLowest": "#FFFFFF",
//             "surfaceContainerLow": "#FFF0EF",
//             "surfaceContainer": "#FCEAE8",
//             "surfaceContainerHigh": "#F6E4E2",
//             "surfaceContainerHighest": "#F1DEDC"
//         },
//         "dark": {
//             "primary": "#FFB4AC",
//             "surfaceTint": "#FFB4AC",
//             "onPrimary": "#561E1A",
//             "primaryContainer": "#73332E",
//             "onPrimaryContainer": "#FFDAD6",
//             "secondary": "#E7BDB8",
//             "onSecondary": "#442927",
//             "secondaryContainer": "#5D3F3C",
//             "onSecondaryContainer": "#FFDAD6",
//             "tertiary": "#E0C38C",
//             "onTertiary": "#3F2D04",
//             "tertiaryContainer": "#584419",
//             "onTertiaryContainer": "#FEDFA6",
//             "error": "#FFB4AB",
//             "onError": "#690005",
//             "errorContainer": "#93000A",
//             "onErrorContainer": "#FFDAD6",
//             "background": "#1A1110",
//             "onBackground": "#F1DEDC",
//             "surface": "#1A1110",
//             "onSurface": "#F1DEDC",
//             "surfaceVariant": "#534341",
//             "onSurfaceVariant": "#D8C2BF",
//             "outline": "#A08C8A",
//             "outlineVariant": "#534341",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#F1DEDC",
//             "inverseOnSurface": "#392E2D",
//             "inversePrimary": "#904A44",
//             "primaryFixed": "#FFDAD6",
//             "onPrimaryFixed": "#3B0907",
//             "primaryFixedDim": "#FFB4AC",
//             "onPrimaryFixedVariant": "#73332E",
//             "secondaryFixed": "#FFDAD6",
//             "onSecondaryFixed": "#2C1513",
//             "secondaryFixedDim": "#E7BDB8",
//             "onSecondaryFixedVariant": "#5D3F3C",
//             "tertiaryFixed": "#FEDFA6",
//             "onTertiaryFixed": "#261900",
//             "tertiaryFixedDim": "#E0C38C",
//             "onTertiaryFixedVariant": "#584419",
//             "surfaceDim": "#1A1110",
//             "surfaceBright": "#423735",
//             "surfaceContainerLowest": "#140C0B",
//             "surfaceContainerLow": "#231918",
//             "surfaceContainer": "#271D1C",
//             "surfaceContainerHigh": "#322826",
//             "surfaceContainerHighest": "#3D3231"
//         },
//         "dark-medium-contrast": {
//             "primary": "#FFBAB2",
//             "surfaceTint": "#FFB4AC",
//             "onPrimary": "#330404",
//             "primaryContainer": "#CC7B73",
//             "onPrimaryContainer": "#000000",
//             "secondary": "#EBC1BC",
//             "onSecondary": "#26100E",
//             "secondaryContainer": "#AD8884",
//             "onSecondaryContainer": "#000000",
//             "tertiary": "#E5C790",
//             "onTertiary": "#201400",
//             "tertiaryContainer": "#A78D5B",
//             "onTertiaryContainer": "#000000",
//             "error": "#FFBAB1",
//             "onError": "#370001",
//             "errorContainer": "#FF5449",
//             "onErrorContainer": "#000000",
//             "background": "#1A1110",
//             "onBackground": "#F1DEDC",
//             "surface": "#1A1110",
//             "onSurface": "#FFF9F9",
//             "surfaceVariant": "#534341",
//             "onSurfaceVariant": "#DCC6C3",
//             "outline": "#B39E9C",
//             "outlineVariant": "#927F7D",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#F1DEDC",
//             "inverseOnSurface": "#322826",
//             "inversePrimary": "#74352F",
//             "primaryFixed": "#FFDAD6",
//             "onPrimaryFixed": "#2C0102",
//             "primaryFixedDim": "#FFB4AC",
//             "onPrimaryFixedVariant": "#5E231F",
//             "secondaryFixed": "#FFDAD6",
//             "onSecondaryFixed": "#200B09",
//             "secondaryFixedDim": "#E7BDB8",
//             "onSecondaryFixedVariant": "#4B2F2C",
//             "tertiaryFixed": "#FEDFA6",
//             "onTertiaryFixed": "#190F00",
//             "tertiaryFixedDim": "#E0C38C",
//             "onTertiaryFixedVariant": "#463309",
//             "surfaceDim": "#1A1110",
//             "surfaceBright": "#423735",
//             "surfaceContainerLowest": "#140C0B",
//             "surfaceContainerLow": "#231918",
//             "surfaceContainer": "#271D1C",
//             "surfaceContainerHigh": "#322826",
//             "surfaceContainerHighest": "#3D3231"
//         },
//         "dark-high-contrast": {
//             "primary": "#FFF9F9",
//             "surfaceTint": "#FFB4AC",
//             "onPrimary": "#000000",
//             "primaryContainer": "#FFBAB2",
//             "onPrimaryContainer": "#000000",
//             "secondary": "#FFF9F9",
//             "onSecondary": "#000000",
//             "secondaryContainer": "#EBC1BC",
//             "onSecondaryContainer": "#000000",
//             "tertiary": "#FFFAF7",
//             "onTertiary": "#000000",
//             "tertiaryContainer": "#E5C790",
//             "onTertiaryContainer": "#000000",
//             "error": "#FFF9F9",
//             "onError": "#000000",
//             "errorContainer": "#FFBAB1",
//             "onErrorContainer": "#000000",
//             "background": "#1A1110",
//             "onBackground": "#F1DEDC",
//             "surface": "#1A1110",
//             "onSurface": "#FFFFFF",
//             "surfaceVariant": "#534341",
//             "onSurfaceVariant": "#FFF9F9",
//             "outline": "#DCC6C3",
//             "outlineVariant": "#DCC6C3",
//             "shadow": "#000000",
//             "scrim": "#000000",
//             "inverseSurface": "#F1DEDC",
//             "inverseOnSurface": "#000000",
//             "inversePrimary": "#4E1714",
//             "primaryFixed": "#FFE0DC",
//             "onPrimaryFixed": "#000000",
//             "primaryFixedDim": "#FFBAB2",
//             "onPrimaryFixedVariant": "#330404",
//             "secondaryFixed": "#FFE0DC",
//             "onSecondaryFixed": "#000000",
//             "secondaryFixedDim": "#EBC1BC",
//             "onSecondaryFixedVariant": "#26100E",
//             "tertiaryFixed": "#FFE3B3",
//             "onTertiaryFixed": "#000000",
//             "tertiaryFixedDim": "#E5C790",
//             "onTertiaryFixedVariant": "#201400",
//             "surfaceDim": "#1A1110",
//             "surfaceBright": "#423735",
//             "surfaceContainerLowest": "#140C0B",
//             "surfaceContainerLow": "#231918",
//             "surfaceContainer": "#271D1C",
//             "surfaceContainerHigh": "#322826",
//             "surfaceContainerHighest": "#3D3231"
//         }
//     },
//     "palettes": {
//         "primary": {
//             "0": "#000000",
//             "5": "#2D0001",
//             "10": "#410002",
//             "15": "#540004",
//             "20": "#690007",
//             "25": "#7D000A",
//             "30": "#93000D",
//             "35": "#A90011",
//             "40": "#BC141B",
//             "50": "#E03330",
//             "60": "#FF544C",
//             "70": "#FF897F",
//             "80": "#FFB4AC",
//             "90": "#FFDAD6",
//             "95": "#FFEDEA",
//             "98": "#FFF8F7",
//             "99": "#FFFBFF",
//             "100": "#FFFFFF"
//         },
//         "secondary": {
//             "0": "#000000",
//             "5": "#280404",
//             "10": "#360E0B",
//             "15": "#431815",
//             "20": "#51221E",
//             "25": "#5E2D29",
//             "30": "#6C3833",
//             "35": "#7A433E",
//             "40": "#884F49",
//             "50": "#A46761",
//             "60": "#C18079",
//             "70": "#DF9992",
//             "80": "#FEB4AC",
//             "90": "#FFDAD6",
//             "95": "#FFEDEA",
//             "98": "#FFF8F7",
//             "99": "#FFFBFF",
//             "100": "#FFFFFF"
//         },
//         "tertiary": {
//             "0": "#000000",
//             "5": "#190F00",
//             "10": "#261900",
//             "15": "#332300",
//             "20": "#402D00",
//             "25": "#4E3800",
//             "30": "#5C4200",
//             "35": "#6B4D00",
//             "40": "#7A5900",
//             "50": "#997005",
//             "60": "#B58A25",
//             "70": "#D3A43F",
//             "80": "#F1BF57",
//             "90": "#FFDEA2",
//             "95": "#FFEFD6",
//             "98": "#FFF8F2",
//             "99": "#FFFBFF",
//             "100": "#FFFFFF"
//         },
//         "neutral": {
//             "0": "#000000",
//             "5": "#15100F",
//             "10": "#201A19",
//             "15": "#2B2423",
//             "20": "#362F2E",
//             "25": "#413A39",
//             "30": "#4D4544",
//             "35": "#59504F",
//             "40": "#655C5B",
//             "50": "#7F7574",
//             "60": "#998E8D",
//             "70": "#B4A9A7",
//             "80": "#D0C4C2",
//             "90": "#EDE0DE",
//             "95": "#FBEEEC",
//             "98": "#FFF8F7",
//             "99": "#FFFBFF",
//             "100": "#FFFFFF"
//         },
//         "neutral-variant": {
//             "0": "#000000",
//             "5": "#190E0D",
//             "10": "#251917",
//             "15": "#302321",
//             "20": "#3B2D2C",
//             "25": "#473836",
//             "30": "#534341",
//             "35": "#5F4F4D",
//             "40": "#6B5A59",
//             "50": "#857371",
//             "60": "#A08C8A",
//             "70": "#BBA6A4",
//             "80": "#D8C2BF",
//             "90": "#F5DDDB",
//             "95": "#FFEDEA",
//             "98": "#FFF8F7",
//             "99": "#FFFBFF",
//             "100": "#FFFFFF"
//         }
//     }
// };

const theme2 = updateThemeColors(themeJson);

export {colors, theme2}
