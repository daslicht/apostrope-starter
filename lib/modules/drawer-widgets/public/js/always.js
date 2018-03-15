// in lib/modules/drawer-widgets/public/js/always.js

// Example of a widget manager with a play method

apos.define('drawer-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
        self.play = function($widget, data, options) {
            $widget.find('[data-drawer-title]').click(function() {
                $widget.find('[data-drawer]').toggle();
                // Stop bubbling and default behavior for jQuery event
                return false;
            });
        };
    }
});