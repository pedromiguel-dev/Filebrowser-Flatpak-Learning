import 'gi://Gdk?version=4.0';
import 'gi://Gtk?version=4.0';

import { FbrApplication } from './Application.js';

export function main(argv) {
	return new FbrApplication({ 'application-id': pkg.name }).run(argv);
}