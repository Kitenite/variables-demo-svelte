export class Spacing {
    static Standard = class {
        public static readonly SPACING_XL = 32;
        public static readonly SPACING_LG = 24;
        public static readonly SPACING_SM = 12;
        public static readonly SPACING_MD = 16;
        public static readonly SPACING_XS = 8;
    }
    static Expanded = class {
        public static readonly SPACING_XL = 64;
        public static readonly SPACING_LG = 48;
        public static readonly SPACING_SM = 24;
        public static readonly SPACING_MD = 32;
        public static readonly SPACING_XS = 16;
    }
    static Condensed = class {
        public static readonly SPACING_XL = 16;
        public static readonly SPACING_LG = 12;
        public static readonly SPACING_SM = 4;
        public static readonly SPACING_MD = 8;
        public static readonly SPACING_XS = 2;
    }
}
export class Themes {
    static Light = class {
        static Parent = class  {
            static Child = class  {
                public static readonly RTL = false;
                public static readonly BACKGROUND_PRIMARY = '#FFFFFF';
                public static readonly COLOR_TEXT_PRIMARY = '#000000';
                public static readonly COLOR_BUTTON_BACKGROUND = '#000000';
                public static readonly COLOR_BUTTON_TEXT = '#FFFFFF';
                public static readonly COLOR_BRAND = '#000000';
            }
        }
    }
    static Dark = class {
        static Parent = class  {
            static Child = class  {
                public static readonly RTL = false;
                public static readonly BACKGROUND_PRIMARY = '#000000';
                public static readonly COLOR_TEXT_PRIMARY = '#FFFFFF';
                public static readonly COLOR_BUTTON_BACKGROUND = '#FFFFFF';
                public static readonly COLOR_BUTTON_TEXT = '#000000';
                public static readonly COLOR_BRAND = '#FFFFFF';
            }
        }
    }
}
