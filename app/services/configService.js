angular.module('gdga')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Allahabad',
        'id'            : '102753048484564707718',
        'googleApi'     : 'AIzaSyCs1QlwMYMfMUd5UX9BhDS7F_LssCT8mPM',
        'pwaId'         : '', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://gdga.github.io',
        'twitter'       : 'GDGAllahabad',
        'facebook'      : 'GDGAllahabad',
        'youtube'       : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
