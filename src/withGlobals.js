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
  const rootElement = document.querySelector(selector);
  if (state.darkMode) {
    rootElement.dataset.mode = "surfe-dark"
  } else {
    rootElement.dataset.mode = ""
  }
}
