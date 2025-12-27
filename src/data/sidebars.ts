export interface NavItem {
    label: string;
    href: string;
    badge?: string;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const componentsSidebar: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            { label: "Installation", href: "/components" },
            { label: "Usage", href: "/components/usage" }
        ]
    },
    {
        title: "Actions",
        items: [
            { label: "Buttons", href: "/components/buttons" },
            { label: "Button Groups", href: "/components/button-groups" },
            { label: "Dropdowns", href: "/components/dropdowns" }
        ]
    },
    {
        title: "Forms",
        items: [
            { label: "Inputs", href: "/components/inputs" },
            { label: "Select", href: "/components/select" },
            { label: "Checkbox & Radio", href: "/components/checkbox-radio" },
            { label: "Toggle", href: "/components/toggle" },
            { label: "Range Slider", href: "/components/range" },
            { label: "File Upload", href: "/components/file-upload" }
        ]
    },
    {
        title: "Data Display",
        items: [
            { label: "Cards", href: "/components/cards" },
            { label: "Tables", href: "/components/tables" },
            { label: "Lists", href: "/components/lists" },
            { label: "Badges", href: "/components/badges" },
            { label: "Avatars", href: "/components/avatars" },
            { label: "Stats", href: "/components/stats" }
        ]
    },
    {
        title: "Feedback",
        items: [
            { label: "Alerts", href: "/components/alerts" },
            { label: "Toast", href: "/components/toast", badge: "New" },
            { label: "Progress", href: "/components/progress" },
            { label: "Skeleton", href: "/components/skeleton" },
            { label: "Spinner", href: "/components/spinner" }
        ]
    },
    {
        title: "Overlay",
        items: [
            { label: "Modals", href: "/components/modals" },
            { label: "Drawer", href: "/components/drawer" },
            { label: "Tooltip", href: "/components/tooltip" },
            { label: "Popover", href: "/components/popover" }
        ]
    },
    {
        title: "Navigation",
        items: [
            { label: "Navbar", href: "/components/navbar" },
            { label: "Sidebar", href: "/components/sidebar" },
            { label: "Tabs", href: "/components/tabs" },
            { label: "Breadcrumb", href: "/components/breadcrumb" },
            { label: "Pagination", href: "/components/pagination" },
            { label: "Steps", href: "/components/steps" }
        ]
    },
    {
        title: "Layout",
        items: [
            { label: "Container", href: "/components/container" },
            { label: "Grid", href: "/components/grid" },
            { label: "Divider", href: "/components/divider" },
            { label: "Spacer", href: "/components/spacer" }
        ]
    }
];

export const stylesSidebar: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            { label: "Installation", href: "/styles" },
            { label: "Configuration", href: "/styles/configuration" }
        ]
    },
    {
        title: "Core",
        items: [
            { label: "Colors", href: "/styles/colors" },
            { label: "Typography", href: "/styles/typography" },
            { label: "Spacing", href: "/styles/spacing" },
            { label: "Shadows", href: "/styles/shadows" }
        ]
    },
    {
        title: "Glassmorphism",
        items: [
            { label: "Glass Utilities", href: "/styles/glass" },
            { label: "Glass Cards", href: "/styles/glass-cards" },
            { label: "Glass Buttons", href: "/styles/glass-buttons" },
            { label: "Glass Inputs", href: "/styles/glass-inputs" }
        ]
    },
    {
        title: "Backgrounds",
        items: [
            { label: "Gradients", href: "/styles/gradients" },
            { label: "Patterns", href: "/styles/patterns" },
            { label: "Ambient Effects", href: "/styles/ambient" }
        ]
    },
    {
        title: "Animations",
        items: [
            { label: "Transitions", href: "/styles/transitions" },
            { label: "Keyframes", href: "/styles/keyframes" },
            { label: "Hover States", href: "/styles/hover" }
        ]
    }
];

export const effectsSidebar: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            { label: "Installation", href: "/effects" },
            { label: "Configuration", href: "/effects/configuration" }
        ]
    },
    {
        title: "Micro Interactions",
        items: [
            { label: "Ripple Effect", href: "/effects/ripple" },
            { label: "Hover Effects", href: "/effects/hover" },
            { label: "Click Effects", href: "/effects/click" }
        ]
    },
    {
        title: "3D Effects",
        items: [
            { label: "Tilt", href: "/effects/tilt" },
            { label: "Parallax", href: "/effects/parallax" },
            { label: "Perspective", href: "/effects/perspective" }
        ]
    },
    {
        title: "Cursor Effects",
        items: [
            { label: "Magnetic", href: "/effects/magnetic" },
            { label: "Glow", href: "/effects/glow" },
            { label: "Custom Cursor", href: "/effects/custom-cursor", badge: "New" }
        ]
    },
    {
        title: "Scroll Effects",
        items: [
            { label: "Scroll Reveal", href: "/effects/scroll-reveal" },
            { label: "Horizontal Scroll", href: "/effects/horizontal-scroll", badge: "New" },
            { label: "Sticky Elements", href: "/effects/sticky" }
        ]
    },
    {
        title: "Advanced",
        items: [
            { label: "Particles", href: "/effects/particles", badge: "New" },
            { label: "Confetti", href: "/effects/confetti", badge: "New" },
            { label: "Wave", href: "/effects/wave", badge: "New" },
            { label: "Typewriter", href: "/effects/typewriter", badge: "New" }
        ]
    }
];

export const webComponentsSidebar: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            { label: "Introduction", href: "/web-components" },
            { label: "Installation", href: "/web-components/installation" },
            { label: "Usage", href: "/web-components/usage" }
        ]
    },
    {
        title: "Form Elements",
        items: [
            { label: "atlas-input", href: "/web-components/input" },
            { label: "atlas-select", href: "/web-components/select" },
            { label: "atlas-checkbox", href: "/web-components/checkbox" },
            { label: "atlas-toggle", href: "/web-components/toggle" },
            { label: "atlas-otp", href: "/web-components/otp", badge: "New" }
        ]
    },
    {
        title: "Display",
        items: [
            { label: "atlas-card", href: "/web-components/card" },
            { label: "atlas-avatar", href: "/web-components/avatar" },
            { label: "atlas-badge", href: "/web-components/badge" },
            { label: "atlas-tooltip", href: "/web-components/tooltip" }
        ]
    },
    {
        title: "Feedback",
        items: [
            { label: "atlas-toast", href: "/web-components/toast" },
            { label: "atlas-progress", href: "/web-components/progress" },
            { label: "atlas-spinner", href: "/web-components/spinner" }
        ]
    },
    {
        title: "Layout",
        items: [
            { label: "atlas-modal", href: "/web-components/modal" },
            { label: "atlas-drawer", href: "/web-components/drawer" },
            { label: "atlas-tabs", href: "/web-components/tabs" },
            { label: "atlas-accordion", href: "/web-components/accordion" }
        ]
    },
    {
        title: "Advanced",
        items: [
            { label: "atlas-carousel", href: "/web-components/carousel" },
            { label: "atlas-resizable", href: "/web-components/resizable", badge: "New" }
        ]
    }
];
