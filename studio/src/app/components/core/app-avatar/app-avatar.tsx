import {Component, Prop, h} from '@stencil/core';


@Component({
    tag: 'app-avatar',
    styleUrl: 'app-avatar.scss',
    shadow: true
})
export class AppAvatar {

    @Prop() src: string;

    render() {
        if (this.src) {
            return <ion-avatar>
                <img src={this.src}/>
            </ion-avatar>
        } else {
            return <ion-avatar>
                <ion-icon name="person" md="md-person" ios="md-person"></ion-icon>
            </ion-avatar>
        }
    }

}
