/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs ? '#docs-root' : 'html';

    changeBackgroundMode(selector, { darkMode, isInDocs });
  }, [darkMode]);

  return StoryFn();
};

const changeBackgroundMode = (selector, state) => {
  const [{ prefix }] = useGlobals();
  const rootElement = document.querySelector(selector);
  const className = prefix ? `${prefix}dark`: "dark" 
  if (state.darkMode) {
    rootElement.classList.add(className);
  } else {
    rootElement.classList.remove(className)
  }
}
