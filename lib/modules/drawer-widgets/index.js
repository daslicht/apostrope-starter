module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Drawer',
    addFields: [{
            type: 'string',
            name: 'title',
            label: 'Title'
        },
        {
            type: 'area',
            name: 'content',
            label: 'Content',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: ['Bold', 'Italic']
                    },
                    'apostrophe-images': {}
                }
            }
        }
    ],
    construct: function(self, options) {
        var superPushAssets = self.pushAssets;
        self.pushAssets = function() {
            superPushAssets();
            self.pushAsset('stylesheet', 'always', { when: 'always' });
        };
    }
};