import { injectGlobal } from "emotion";
import normalize from "normalize.css";
import { GLOBAL_FONT_FAMILY, GLOBAL_BODY_BACKGROUND_COLOR } from "./utils";

injectGlobal`
  ${normalize}

  /**
   * A very simple reset that sits on top of Normalize.css
   */
  body,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin: 0;
    padding: 0;
  }

  /**
   * Remove trailing margins from nested lists.
   */
  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  /**
   * Remove default table spacing.
   */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * 1. Reset Chrome and Firefox behaviour which sets a 'min-width: min-content;'
   *    on fieldsets.
   */
  fieldset {
    min-width: 0; /* [1] */
    border: 0;
  }

  html {
    box-sizing: border-box;
    font-family: ${GLOBAL_FONT_FAMILY};
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body,
  html,
  #root {
    height: 100%;

    background-color: ${GLOBAL_BODY_BACKGROUND_COLOR}
  }
`;
