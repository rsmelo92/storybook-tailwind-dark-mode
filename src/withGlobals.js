/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode, prefix }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs ? '#docs-root' : 'html';

    changeBackgroundMode(selector, { darkMode, isInDocs, prefix });
  }, [darkMode]);

  return StoryFn();
};

const changeBackgroundMode = (selector, state) => {
  const rootElement = document.querySelector(selector);
  const darkModeClass = state.prefix ? `${state.prefix}dark` : "dark"
  if (state.darkMode) {
    rootElement.classList.add(darkModeClass);
  } else {
    rootElement.classList.remove(darkModeClass)
  }
}
