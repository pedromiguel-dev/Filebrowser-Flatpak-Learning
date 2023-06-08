import Gtk from 'gi://Gtk'
import GObject from 'gi://GObject'

export const FbrApplication = GObject.registerClass(
    {
        GTypeName: 'FbrApplication',
    },
    class extends Gtk.Application {
        vfunc_activate() {
            console.log('Hello World!');

            const window = new Gtk.ApplicationWindow({ application: this, title: 'Welcome to Flatpak Builder' });
            const label = new Gtk.Label({ label: 'Hello World!' });

            window.set_child(label);
            window.present();
        }
    }
)