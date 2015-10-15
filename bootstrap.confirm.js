; (function ($, window, document, undefined) {

    'use strict';
    var
    pluginName = 'bsModalConfirm',
	defaults = {
	    template: '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header bg-danger text-danger"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 id="mySmallModalLabel" class="modal-title">{{title}}</h4></div><div class="modal-body">{{message}}</div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Cancelar</button><button class="btn btn-danger" data-trigger="confirm">Confirmar</button></div></div></div></div>',
	    title: 'Confirm',
	    message: ''
	};


    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options, $(element).data());
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        renderTemplate: function () {
            var
                settings = this.settings,
                templateString = settings.template;
            for (var option in settings) {
                if (typeof (settings[option]) === 'string' && option !== 'template' && settings.hasOwnProperty(option)) {
                    templateString = templateString.replace('{{' + option.trim() + '}}', settings[option]);
                }
            }

            return templateString;
        },
        init: function () {
            var
                $this = $(this.element),
                settings = this.settings,
                nodeName = this.element.nodeName.toLowerCase(),
                inputType = this.element.type,
                $modal = $($.parseHTML(this.renderTemplate())),
                handler;

            if (nodeName == 'a') {
                var that = this;
                handler = function (e) {
                    window.location.href = that.element.href;
                    $modal.modal('hide');
                };
            } else if (inputType == 'submit') {
                var form = $this.closest('form')[0];

                $(form).submit(function (e) {
                    e.preventDefault();
                });

                handler = function (e) {
                    form.submit();
                    $modal.modal('hide');

                };

            } else {
                handler = function () { };
            }

            $modal.find('[data-trigger="confirm"]').click(handler);

            $this.click(function (e) {
                e.preventDefault();
                $modal.modal();
            });

        }
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
    $('[data-toggle="confirm"]').bsModalConfirm();
})(jQuery, window, document);
