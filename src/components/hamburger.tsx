"use client";

import {
  CSSProperties,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
} from "react";

const area = 48;

interface Props {
  /** The color of the icon bars, accepts any CSS-parsable argument. */
  color?: string;
  /** The animation direction of the icon, left or right. */
  direction?: "left" | "right";
  /** The vertical distance between the lines. Small (sm), medium (md) or large (lg). */
  distance?: "sm" | "md" | "lg";
  /** The duration of the animation. Can be set to zero if no animation is desired. */
  duration?: number;
  /** A valid `transition-timing-function` CSS value, for example 'ease-out'. */
  easing?: string;
  /** Hides the default browser focus style. */
  hideOutline?: boolean;
  /** An ARIA label to improve accessibility. */
  label?: string;
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle?: (toggled: boolean) => any;
  /** Specifies if the icon bars should be rounded. */
  rounded?: boolean;
  /** A number between 12 and 48, which sets the size of the icon. */
  size?: number;
  /** A way to provide your own state action. Has to be used together with a state value (the `toggled` prop). */
  toggle?: Dispatch<SetStateAction<boolean>>;
  /** A way to provide your own state value. Can be used together with a state action (the `toggle` prop). */
  toggled?: boolean;
  lines?: number;
  className?: string;
}

export const Hamburger = (props: Props) => {
  const {
    color = "currentColor",
    direction = "right",
    distance = "md",
    duration = 0.4,
    easing = "cubic-bezier(0, 0, 0, 1)",
    hideOutline = true,
    label,
    lines = 3,
    onToggle,
    rounded = true,
    size = 32,
    toggle,
    toggled,
    className,
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);

  const width = Math.max(12, Math.min(area, size));
  const room = Math.round((area - width) / 2);

  const barHeightRaw = width / 12;
  const barHeight = Math.round(barHeightRaw);

  const space = distance === "lg" ? 0.25 : distance === "sm" ? 0.75 : 0.5;
  const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
  const margin = Math.round(marginRaw);

  const height = barHeight * lines + margin * (lines - 1);
  const topOffset = Math.round((area - height) / 2);

  const translate =
    lines === 3
      ? distance === "lg"
        ? 4.0425
        : distance === "sm"
        ? 5.1625
        : 4.6325
      : distance === "lg"
      ? 6.7875
      : distance === "sm"
      ? 8.4875
      : 7.6675;
  const deviation =
    (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2));
  const time = Math.max(0, duration);

  const burgerStyles: CSSProperties = {
    cursor: "pointer",
    height: `${area}px`,
    position: "relative",

    transition: `${time}s ${easing}`,
    userSelect: "none",
    width: `${area}px`,
  };

  const barStyles: CSSProperties = {
    background: color,
    height: `${barHeight + 0.5}px`,
    right: `${room}px`,
    position: "absolute",
  };

  if (hideOutline) {
    burgerStyles["outline"] = "none";
  }

  if (rounded) {
    barStyles["borderRadius"] = "9em";
  }

  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;

  const handler = () => {
    toggleFunction(!isToggled);

    if (typeof onToggle === "function") onToggle(!isToggled);
  };

  const isLeft = direction === "left";

  return (
    <div
      className={className}
      aria-label={label}
      aria-expanded={isToggled}
      data-testid="spin"
      onClick={handler}
      onKeyUp={(e) => e.key === "Enter" && handler()}
      role="button"
      style={{
        ...burgerStyles,
        transform: `${
          isToggled ? `rotate(${180 * (isLeft ? -1 : 1)}deg)` : "none"
        }`,
      }}
      tabIndex={0}
    >
      <div
        style={{
          ...barStyles,
          width: `${width}px`,
          top: `${topOffset}px`,
          transition: `${time}s ${easing}`,
          transform: `${
            isToggled
              ? `rotate(${45 * (isLeft ? -1 : 1)}deg) translate(${
                  move * (isLeft ? -1 : 1)
                }px, ${move}px)`
              : "none"
          }`,
        }}
      />

      <div
        style={{
          ...barStyles,
          width: `${width}px`,
          top: `${topOffset + barHeight + margin}px`,
          transition: `${time}s ${easing}`,
          opacity: `${isToggled ? "0" : "1"}`,
        }}
      />

      <div
        style={{
          ...barStyles,
          width: `${width}px`,
          top: `${topOffset + barHeight * 2 + margin * 2}px`,
          transition: `${time}s ${easing}`,
          transform: `${
            isToggled
              ? `rotate(${45 * (isLeft ? 1 : -1)}deg) translate(${
                  move * (isLeft ? -1 : 1)
                }px, ${move * -1}px)`
              : "none"
          }`,
        }}
      />
    </div>
  );
};
