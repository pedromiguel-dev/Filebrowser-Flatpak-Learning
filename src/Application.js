import Gtk from 'gi://Gtk?version=4.0'
import GObject from 'gi://GObject'

export const FbrApplication = GObject.registerClass(
    {
        GTypeName: 'FbrApplication',
    },
    class extends Gtk.Application {
        vfunc_activate() {
            console.log('Hello World!');

            const window = new Gtk.ApplicationWindow({ application: this, title: 'Welcome to Flatpak Builder' });
            const box = new Gtk.Box({ 
                orientation: Gtk.Orientation.VERTICAL,
                marginTop: 36,
                marginBottom: 36,
                marginStart: 36,
                marginEnd: 36,
                spacing: 18,
                valign: Gtk.Align.CENTER,
                halign: Gtk.Align.CENTER
            });
            
            const label = new Gtk.Label({ 
                label: 'Hello World!', 
                wrap: true 
            });
            const image = new Gtk.Image({
                iconName: 'system-file-manager-symbolic',
                iconSize: Gtk.IconSize.LARGE
            });
            const button = new Gtk.Button({
                label: 'Click me!',
                halign: Gtk.Align.CENTER
            })

            box.append(image);
            box.append(label);
            box.append(button);
        
            window.set_child(box);

            window.present();
        }
    }
)