angular.module('gdga')
.directive('gplusNoAttachments', function () {
    return {
        scope: { article: '=' },
        templateUrl: '/app/news/components/gplusNoAttachments.html'
    };
});
