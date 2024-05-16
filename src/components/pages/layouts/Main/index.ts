import { FamContainer, FamTitle } from "fam-code-ui";
import { css, html } from "iares";
type Props = {
  title: string;
  body: string;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => {
  console.log(props);
  return html`
<div class="header-ctx">
  <${FamContainer}>
    <slot target="content">
      <${FamTitle}>
        <slot target="content">
          <h1> > ${props.title} </h1>
        </slot>
      </> 
    </slot>
  </>
</div>
<div class="content-ctx">
  <${FamContainer}>
    <slot target="content" ctx="main-page-layout">
      <div class="grid-ctx">
        ${props.body}
      </div>
    </slot>
  </>
</div>
`;
};

export const MainPageLayout = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  main-page-layout {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    position: relative;
  }

  .header-ctx,
  .content-ctx {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 0 2em;
  }

  .header-ctx {
    padding: 2.2em 2em;
  }

  .content-ctx {
    margin-bottom: 2em;
    max-height: 770px;
    overflow-y: scroll;
  }

  .grid-ctx {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.8em 1em;
    width: 100%;
  }
`;
