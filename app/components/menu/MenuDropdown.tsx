import { MenuProvider } from '../../context/MenuContext';
import BaseDropdown from './Base';
import {
  FloatingOverlay,
  FloatingPortal,
  OffsetOptions,
  Placement,
  Strategy,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
  useTransitionStyles
} from '@floating-ui/react';
import { MutableRefObject } from 'react';
import { cn } from '@/lib/utils';

interface MenuDropdownProps {
  isMenuOpen: boolean;
  offsetValue?: OffsetOptions | undefined;
  setIsMenuOpen: (value: boolean) => void;
  triggerNode: React.ReactNode;
  triggerParentClass?: string;
  menuPlacement?: Placement;
  menuWidth?: number | 'auto';
  menuHeight?: number | 'auto';
  menuMaxHeight?: number | 'auto';
  menuMaxWidth?: number | 'auto';
  menuContainerClass?: string;
  children: React.ReactNode;
  zIndex?: number;
  menuRoot?: HTMLElement | MutableRefObject<HTMLElement | null> | null;
  menuStrategy?: Strategy;
  hasBaseStyles?: boolean;
  bgColorClassName?: string;
  paddingClassName?: string;
  disabled?: boolean;
  menuId?: string;
}

export default function MenuDropdown({
  triggerNode,
  triggerParentClass,
  menuPlacement,
  menuWidth = 254,
  menuHeight = 230,
  menuMaxHeight,
  menuMaxWidth,
  offsetValue = 4,
  menuContainerClass,
  isMenuOpen,
  setIsMenuOpen,
  zIndex = 999999,
  menuRoot,
  menuStrategy = 'absolute',
  hasBaseStyles = true,
  bgColorClassName,
  paddingClassName,
  children,
  disabled = false,
  menuId = 'menu-dropdown'
}: MenuDropdownProps) {
  const { refs, floatingStyles, context } = useFloating({
    strategy: menuStrategy,
    whileElementsMounted: autoUpdate,
    open: isMenuOpen,
    onOpenChange: setIsMenuOpen,
    placement: menuPlacement || 'bottom-start',
    middleware: [offset(offsetValue), flip(), shift()]
  });

  const click = useClick(context);
  const focus = useFocus(context);
  const floatingRole = useRole(context, {
    role: 'menu'
  });
  const dismiss = useDismiss(context, {
    outsidePress: true,
    escapeKey: true
  });
  const transitionStyles = useTransitionStyles(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, focus, floatingRole, dismiss]);

  const handleOptionsClick = (e: React.MouseEvent) => {
    if (disabled) return;
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <MenuProvider isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        onClick={handleOptionsClick}
        onKeyDown={handleKeyDown}
        role="button"
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}
        aria-controls={isMenuOpen ? menuId : undefined}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        className={cn(triggerParentClass, {
          'cursor-pointer': !disabled
        })}
      >
        {triggerNode}
      </div>
      {isMenuOpen && (
        <>
          <FloatingPortal root={menuRoot}>
            <FloatingOverlay
              style={{
                zIndex: zIndex - 1
              }}
              lockScroll
            />
            <div
              ref={refs.setFloating}
              id={menuId}
              role="menu"
              aria-orientation="vertical"
              style={{
                ...floatingStyles,
                zIndex
              }}
              {...getFloatingProps()}
            >
              {transitionStyles.isMounted && (
                <BaseDropdown
                  hasBaseStyles={hasBaseStyles}
                  paddingClassName={paddingClassName}
                  bgColorClassName={bgColorClassName}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    ...transitionStyles.styles,
                    width: menuWidth === 'auto' ? 'auto' : `${menuWidth}px`,
                    height: menuHeight === 'auto' ? 'auto' : `${menuHeight}px`,
                    maxHeight: menuMaxHeight ? `${menuMaxHeight}px` : 'auto',
                    maxWidth: menuMaxWidth ? `${menuMaxWidth}px` : 'auto'
                  }}
                  className={cn('flex flex-col text-brand-neutral-32 no-scrollbar-y', menuContainerClass)}
                >
                  {children}
                </BaseDropdown>
              )}
            </div>
          </FloatingPortal>
        </>
      )}
    </MenuProvider>
  );
}
