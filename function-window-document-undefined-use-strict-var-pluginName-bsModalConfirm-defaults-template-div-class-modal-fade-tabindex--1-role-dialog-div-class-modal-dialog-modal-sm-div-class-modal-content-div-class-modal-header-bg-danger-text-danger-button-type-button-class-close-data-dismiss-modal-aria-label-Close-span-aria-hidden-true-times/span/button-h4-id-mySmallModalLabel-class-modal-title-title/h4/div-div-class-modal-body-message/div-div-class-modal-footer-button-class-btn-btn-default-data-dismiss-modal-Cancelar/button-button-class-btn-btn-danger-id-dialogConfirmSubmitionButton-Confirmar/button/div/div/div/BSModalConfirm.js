;(function ( $, window, document, undefined ) {

	'use strict';
		var 
        pluginName = 'bsModalConfirm',
		defaults = {
			template: '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header bg-danger text-danger"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 id="mySmallModalLabel" class="modal-title">{{title}}</h4></div><div class="modal-body">{{message}}</div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Cancelar</button><button class="btn btn-danger" id="dialogConfirmSubmitionButton">Confirmar</button></div></div></div></div>'
		};
    
    
		function Plugin ( element, options ) {
				this.element = element;
            
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}
    
		$.extend(Plugin.prototype, {
				init: function () {
                    var 
                    	$this = $(this.element),
                        nodeName = this.element.nodeName.toLowerCase(),
                        inputType = this.element.type,
                    	$modal = $($.parseHTML(this.settings.template)),
                        handler;
                    
                    if(nodeName == 'a'){
                        handler = function(e){
                            window.location.href = this.element.href;
                        };
                    }else if(inputType == 'submit'){
                        console.log('1');
                        var form = $this.closest('form')[0];
                        
                        $(form).submit(function (e) {
                            e.preventDefault();
                        });
                        
                        handler = function (e){
                            console.log('1');
                            form.submit();
                            $modal.modal('hide');
                                     
                        };
                        
                    }else{
                        handler = function () {};
                    }
                    
                    $modal.find('#dialogConfirmSubmitionButton').click(handler);
                    
                    $this.click(function (e) {
						e.preventDefault();
                        $modal.modal();
                    });
                    
				}
		});
    
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};
	$('[data-toggle="confirm"]').bsModalConfirm();
})( jQuery, window, document );
