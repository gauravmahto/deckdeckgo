import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'app-navigation',
  styleUrl: 'app-navigation.scss',
  shadow: false
})
export class AppNavigation {
  @Prop() menuToggle: boolean = true;

  @Prop() user: boolean = true;

  @Prop() presentation: boolean = false;
  @Prop() publish: boolean = false;

  render() {
    return (<ion-header>
          <ion-toolbar>
            {this.renderLogo()}
            {this.renderMenuToggle()}
            {this.renderUser()}
          </ion-toolbar>
        </ion-header>
    );
  }

  private renderLogo() {
    return <ion-router-link onClick={() => this.closeMenu()} href="/" routerDirection="forward" class="logo">
      <div>
        <app-logo></app-logo>
        <span class="ion-text-uppercase">DeckDeckGo <mark>BETA</mark></span>
      </div>
    </ion-router-link>;
  }

  private closeMenu(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!document) {
        return;
      }

      const element: HTMLIonMenuElement = document.querySelector('ion-menu');

      if (!element) {
        resolve();
        return;
      }

      await element.close();

      resolve();
    });
  }

  private renderMenuToggle() {
    if (this.menuToggle) {
      return <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button>
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>;
    } else {
      return null;
    }
  }

  private renderUser() {
    if (this.user) {
      return <div slot="end">
        <app-navigation-actions presentation={this.presentation} publish={this.publish}></app-navigation-actions>
      </div>;
    } else {
      return null;
    }
  }

}
