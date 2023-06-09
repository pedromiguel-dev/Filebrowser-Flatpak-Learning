import GObject from 'gi://GObject'
import Gtk from 'gi://Gtk?version=4.0'

export const WelcomeWidget  = GObject.registerClass({
    GTypeName: 'FbrWelcomeWidget',
    CssName: 'welcome',
    Template: 'resource:///org/example/filebrowser/ui/WelcomeWidget.ui',
    Properties: {
        WelcomeText: GObject.ParamSpec.string(
            'welcome-text', // name
            'Welcome Text', // nick is a short name
            'The text to display in the welcome widget', // blurb is a short description
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        )
    },
    InternalChildren: ['welcomeLabel'],
    Signals: {
        'button-clicked': {}
    }
}, class extends Gtk.Widget {

    get welcomeText() {
        return this._welcomeText || '';
    }

    set welcomeText(value) {
        // Do nothing if the new value is the same as the old one
        if (this._welcomeText === value)
            return;
        // Store the value in an internal property
        this._welcomeText = value;
        // Hide the label if no text is set
        this._welcomeLabel.visible = !!value;
        // Notify that the value has changed
        this.notify('welcome-text');
    }

    //onButtonClicked(_button) {
      //  this.emit('button-clicked');
    //}
})