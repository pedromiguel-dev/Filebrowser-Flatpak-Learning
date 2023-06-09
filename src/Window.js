import GObject from 'gi://GObject'
import Gtk from 'gi://Gtk?version=4.0'

export const Window = GObject.registerClass({
    GTypeName: 'FbrWindow',
    Template: 'resource:///org/example/filebrowser/ui/Window.ui',
    InternalChildren: ['viewStack'],
}, class extends Gtk.ApplicationWindow {
    vfunc_close_request() {
        super.vfunc_close_request();
        this.run_dispose();
    }

    onWelcomeButtonClicked(_widget) {
        this._viewStack.visibleChildName = 'files';
    }
})