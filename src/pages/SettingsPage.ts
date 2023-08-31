import BlockComponent from "../components/WeekComponent/BlockMenuComponent";
import AccountComponent from "../components/WeekComponent/AccountBlockComponent";
import ThemeComponent from "../components/WeekComponent/ThemeBlockComponent";

export default function SettingsPage(props: ComponentProps): Component {
  let menu: HTMLDivElement | null = null;
  let blockAccountContainer: HTMLDivElement | null = null;
  let blockThemeContainer: HTMLDivElement | null = null;

  const componentsBlock: Component[] = [];
  return {
    render() {
      props.parentEl.innerHTML = `
        <div class="BlockMenu" id="block-menu">
          <button class="account"> Аккаунт </button>
          <button class="theme"> Темы </button>
        </div>

        <div class="BigBlock">
        <div class="AccountBlock" id="account-block">
          <div class="AccountAvatar"></div>
          <div class="AccountName"></div>
        </div>
        
        <div class="ThemeBlock" id="theme-block">
          <button class="DarkTheme"></button>
          <button class="LightTheme"></button>
        </div>
      `;
    },
    onRender() {
      menu = props.parentEl.querySelector("#block-menu");
      blockAccountContainer = props.parentEl.querySelector("#account-block");
      blockThemeContainer = props.parentEl.querySelector("#theme-block");

      if (menu) {
        const menuComponent = BlockComponent({
          id: "block-menu",
          parentEl: BlockComponent,
        });
        menuComponent.render();
        menuComponent.onRender();
        componentsBlock.push(menuComponent)


          if (blockAccountContainer) {
            const accountComponent = AccountComponent({
              id: "account-block",
              parentEl: AccountComponent,
            });
            accountComponent.render();
            accountComponent.onRender();
            componentsBlock.push(accountComponent)
          }

        if (blockThemeContainer) {
          const themeComponent = ThemeComponent({
            id: "theme-block",
            parentEl: ThemeComponent,
          });
          themeComponent.render();
          themeComponent.onRender();
          componentsBlock.push(themeComponent)
        }
      }

      onDelete() {
        componentsBlock.forEach((c) => c.onDelete());
      };
    },
  }
}
