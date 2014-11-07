'use strict';

angular
    .module('appApp')
    .directive('ghPreview', function($compile) {
        return {
            link: function(scope, element, attrs) {
                var previewScope = scope.$new();

                $(element).keyup(function() {
                    var content = '<div>'+$(this).val()+'</div>';
                    var target = attrs.ghPreview;
                    console.log(content);

                    var linkFn = $compile(content);
                    var element = linkFn(previewScope);

                    $(target).html(element);
                });
            }
        };
    })
;
