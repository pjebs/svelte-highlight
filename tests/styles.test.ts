import { expect, test } from "vitest";
import * as styles from "../src/styles";

test("Styles", () => {
  const styleNames = Object.keys(styles);

  // @ts-expect-error
  expect(styles.default).toBeUndefined();
  expect(styleNames.length).toMatchInlineSnapshot("248");
  expect(styleNames).toMatchInlineSnapshot(`
    [
      "_3024",
      "a11yDark",
      "a11yLight",
      "agate",
      "anOldHope",
      "androidstudio",
      "apathy",
      "apprentice",
      "arduinoLight",
      "arta",
      "ascetic",
      "ashes",
      "atelierCave",
      "atelierCaveLight",
      "atelierDune",
      "atelierDuneLight",
      "atelierEstuary",
      "atelierEstuaryLight",
      "atelierForest",
      "atelierForestLight",
      "atelierHeath",
      "atelierHeathLight",
      "atelierLakeside",
      "atelierLakesideLight",
      "atelierPlateau",
      "atelierPlateauLight",
      "atelierSavanna",
      "atelierSavannaLight",
      "atelierSeaside",
      "atelierSeasideLight",
      "atelierSulphurpool",
      "atelierSulphurpoolLight",
      "atlas",
      "atomOneDark",
      "atomOneDarkReasonable",
      "atomOneLight",
      "base16Github",
      "base16IrBlack",
      "base16Monokai",
      "base16Nord",
      "bespin",
      "blackMetal",
      "blackMetalBathory",
      "blackMetalBurzum",
      "blackMetalDarkFuneral",
      "blackMetalGorgoroth",
      "blackMetalImmortal",
      "blackMetalKhold",
      "blackMetalMarduk",
      "blackMetalMayhem",
      "blackMetalNile",
      "blackMetalVenom",
      "brewer",
      "bright",
      "brogrammer",
      "brownPaper",
      "brushTrees",
      "brushTreesDark",
      "chalk",
      "circus",
      "classicDark",
      "classicLight",
      "codepenEmbed",
      "codeschool",
      "colorBrewer",
      "colors",
      "cupcake",
      "cupertino",
      "danqing",
      "darcula",
      "dark",
      "darkViolet",
      "darkmoss",
      "darktooth",
      "decaf",
      "_default",
      "defaultDark",
      "defaultLight",
      "devibeans",
      "dirtysea",
      "docco",
      "dracula",
      "edgeDark",
      "edgeLight",
      "eighties",
      "embers",
      "equilibriumDark",
      "equilibriumGrayDark",
      "equilibriumGrayLight",
      "equilibriumLight",
      "espresso",
      "eva",
      "evaDim",
      "far",
      "felipec",
      "flat",
      "foundation",
      "framer",
      "fruitSoda",
      "gigavolt",
      "github",
      "githubDark",
      "githubDarkDimmed",
      "gml",
      "googleDark",
      "googleLight",
      "googlecode",
      "gradientDark",
      "gradientLight",
      "grayscale",
      "grayscaleDark",
      "grayscaleLight",
      "greenScreen",
      "gruvboxDarkHard",
      "gruvboxDarkMedium",
      "gruvboxDarkPale",
      "gruvboxDarkSoft",
      "gruvboxLightHard",
      "gruvboxLightMedium",
      "gruvboxLightSoft",
      "hardcore",
      "harmonic16Dark",
      "harmonic16Light",
      "heetchDark",
      "heetchLight",
      "helios",
      "hopscotch",
      "horizonDark",
      "horizonLight",
      "humanoidDark",
      "humanoidLight",
      "hybrid",
      "iaDark",
      "iaLight",
      "icyDark",
      "idea",
      "intellijLight",
      "irBlack",
      "isblEditorDark",
      "isblEditorLight",
      "isotope",
      "kimber",
      "kimbieDark",
      "kimbieLight",
      "lightfair",
      "lioshi",
      "londonTube",
      "macintosh",
      "magula",
      "marrakesh",
      "materia",
      "material",
      "materialDarker",
      "materialLighter",
      "materialPalenight",
      "materialVivid",
      "mellowPurple",
      "mexicoLight",
      "mocha",
      "monoBlue",
      "monokai",
      "monokaiSublime",
      "nebula",
      "nightOwl",
      "nnfxDark",
      "nnfxLight",
      "nord",
      "nova",
      "obsidian",
      "ocean",
      "oceanicnext",
      "oneLight",
      "onedark",
      "outrunDark",
      "pandaSyntaxDark",
      "pandaSyntaxLight",
      "papercolorDark",
      "papercolorLight",
      "paraiso",
      "paraisoDark",
      "paraisoLight",
      "pasque",
      "phd",
      "pico",
      "pojoaque",
      "pop",
      "porple",
      "purebasic",
      "qtcreatorDark",
      "qtcreatorLight",
      "qualia",
      "railscasts",
      "rainbow",
      "rebecca",
      "rosPine",
      "rosPineDawn",
      "rosPineMoon",
      "routeros",
      "sagelight",
      "sandcastle",
      "schoolBook",
      "setiUi",
      "shadesOfPurple",
      "shapeshifter",
      "silkDark",
      "silkLight",
      "snazzy",
      "solarFlare",
      "solarFlareLight",
      "solarizedDark",
      "solarizedLight",
      "spacemacs",
      "srcery",
      "stackoverflowDark",
      "stackoverflowLight",
      "summercamp",
      "summerfruitDark",
      "summerfruitLight",
      "sunburst",
      "synthMidnightTerminalDark",
      "synthMidnightTerminalLight",
      "tango",
      "tender",
      "tokyoNightDark",
      "tokyoNightLight",
      "tomorrow",
      "tomorrowNight",
      "tomorrowNightBlue",
      "tomorrowNightBright",
      "twilight",
      "unikittyDark",
      "unikittyLight",
      "vs",
      "vs2015",
      "vulcan",
      "windows10",
      "windows10Light",
      "windows95",
      "windows95Light",
      "windowsHighContrast",
      "windowsHighContrastLight",
      "windowsNt",
      "windowsNtLight",
      "woodland",
      "xcode",
      "xcodeDusk",
      "xt256",
      "zenburn",
    ]
  `);
});
