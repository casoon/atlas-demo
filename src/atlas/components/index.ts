/**
 * CASOON Atlas Components
 *
 * Premium headless UI components with micro-interactions.
 * Framework-agnostic, accessible, and SSR-safe.
 */

export {
  type AccordionOptions,
  type AccordionState,
  createAccordion,
} from './accordion/index';
export {
  type ButtonHoverEffect,
  type ButtonOptions,
  type ButtonState,
  type ButtonVisualState,
  createButton,
} from './button/index';
export {
  type CardHoverEffect,
  type CardOptions,
  type CardState,
  createCard,
  staggerCards,
} from './card/index';
export {
  createDrawer,
  type DrawerOptions,
  type DrawerSide,
  type DrawerState,
} from './drawer/index';
export {
  createDropdown,
  type DropdownOptions,
  type DropdownState,
} from './dropdown/index';
export { createForm, type FormField, type FormOptions } from './form/index';
// Components
export { createModal, type ModalOptions, type ModalState } from './modal/index';
// Progress indicators
export {
  createProgress,
  createStepProgress,
  type ProgressOptions,
  type ProgressState,
  type ProgressType,
  type ProgressVisualState,
  type StepProgressOptions,
  type StepProgressState,
} from './progress/index';
// Shared utilities
export * from './shared';
export {
  createInlineSkeleton,
  createSkeleton,
  type SkeletonAnimation,
  type SkeletonOptions,
  type SkeletonState,
  type SkeletonType,
} from './skeleton/index';
// Stagger animations
export {
  createStaggerAnimation,
  type StaggerAnimation,
  type StaggerCleanup,
  type StaggerGridOptions,
  type StaggerOptions,
  type StaggerOrder,
  type StaggerTrigger,
  stagger,
  staggerGrid,
} from './stagger/index';
// Legacy components (kept for backwards compatibility)
export { createTabs, type TabsOptions, type TabsState } from './tabs/index';
export {
  createToastManager,
  type ToastAction,
  type ToastItem,
  type ToastManager,
  type ToastManagerOptions,
  type ToastOptions,
  type ToastPosition,
  type ToastType,
} from './toast/index';
export {
  createTooltip,
  type TooltipOptions,
  type TooltipState,
} from './tooltip/index';

// Package version
export const VERSION = '0.0.3';
