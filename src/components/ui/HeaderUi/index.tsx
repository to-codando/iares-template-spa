import { FamContainer } from 'fam-code-ui';
import { css, html } from 'iares';
import { ButtonUi } from '@/components/ui';
import { SearchUi } from './SearchUi';
import type { Params } from './types';

const template = ({ props }: Params) => html`
  <${FamContainer}>
    <slot target="content" ctx="header-ui">
      <div class="content-ctx">
        <div class="menu-ctx">
          <${ButtonUi}
            icon="menu"
            emitter=${props.eventDrive}
            eventName="toggle-sidebar-menu"
          />
        </div>
        <div class="search-ctx">
          <${SearchUi} />
        </div>
        <div class="control-ctx">
          <div class="buttons">
            <${ButtonUi}
              icon="delete"
              emitter=${props.eventDrive}
              eventName="remove-charging-stations"
            />
            <${ButtonUi}
              icon="add"
              emitter=${props.eventDrive}
              eventName="show-charging-station-form"
            />
          </div>
        </div>
      </div>
    </slot>
  <//>
`;

export const HeaderUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  .xpto {
    color: red;
  }
  header-ui {
    display: flex;
    align-items: center;
    width: 100%;
    height: 75px;
    padding: 0 1em;
    background: #0084ff;
  }

  .content-ctx {
    display: grid;
    grid-template-columns: 48px 280px 1fr;
    grid-template-rows: 1fr;
    gap: 1em;
    width: 100%;
  }

  .menu-ctx,
  .search-ctx,
  .control-ctx {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .control-ctx {
    justify-content: flex-end;
  }

  .control-ctx > .buttons {
    display: grid;
    grid-template-columns: repeat(2, 48px);
    grid-template-rows: 1fr;
    gap: 1em;
    max-width: 120px;
  }
`;
