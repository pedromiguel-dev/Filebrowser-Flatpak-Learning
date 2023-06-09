import Gtk from 'gi://Gtk?version=4.0'
import GObject from 'gi://GObject'
import Gdk from 'gi://Gdk';

import './WelcomeWidget.js';
import { Window } from './Window.js';

export const FbrApplication = GObject.registerClass(
    {
        GTypeName: 'FbrApplication',
    },
    class extends Gtk.Application {
        vfunc_startup() {
            super.vfunc_startup();
            this.#loadStylesheet();
        }
        #loadStylesheet() {
            const provider = new Gtk.CssProvider();
            provider.load_from_resource('/org/example/filebrowser/css/style.css');

            Gtk.StyleContext.add_provider_for_display(
                Gdk.Display.get_default(),
                provider,
                Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
            );
        }
        vfunc_activate() {
            const window = new Window({ application: this });
            window.present();
        }
    }
)