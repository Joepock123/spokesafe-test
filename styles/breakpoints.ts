import { css, FlattenSimpleInterpolation } from "styled-components";

export const min = {
  mobile: (styles: FlattenSimpleInterpolation) => css`
    @media only screen and (min-width: 800px) {
      ${styles};
    }
  `,
};
