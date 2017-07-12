/**
 * Created by chuck on 26/03/17.
 */
$(document).ready(function () {
    var message = "", description = "";
    $('area').click(function () {
        switch(this.id){
            case "Head":
                message = "Loading Head";
                description = "Whoa! It's too huge!";
                break;
            case "Smile":
                message = "His Smile... :)";
                description = "The coolest of all...";
                break;
            case "Heart":
                message = "Loading Heart";
                description = "Whoa! It's so big!";
                break;
            case "Left_biceps":
                message = "Biceps!";
                description = "Stronger than steel!";
                break;
            case "Right_biceps":
                message = "Biceps!";
                description = "Stronger than steel!";
                break;
            case "Six_Pack":
                message = "Loading Six Pack";
                description = "You can't see, but it's hiding in there.";
                break;
            case "Restricted_Area":
                message = "Restricted Area";
                description = "Sorry! Trespassing prohibited.";
                break;
            case "Left_hand":
                message = "Hand";
                description = "The hand that makes miracles.";
                break;
            case "Right_hand":
                message = "Hand";
                description = "The hand that makes miracles.";
                break;
            default:
                message = "---";
                description = "What have you done!";
                break;
        }
        waitingDialog.show(message, description);
        setTimeout(function () {
            waitingDialog.update(description + '\nJust few more seconds..');
        }, 1000);
        setTimeout(function () {
            waitingDialog.update(description + '\nAlmost done...');
        }, 2000);
        setTimeout(function () {
            waitingDialog.hide();
        }, 3000);
    });

});

var waitingDialog = waitingDialog || (function ($) {
        'use strict';

        // Creating modal dialog's DOM
        var $dialog = $(
            '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
            '<div class="modal-dialog modal-m">' +
            '<div class="modal-content">' +
            '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
            '<div class="modal-body">' +
            '<p></p>' +
            '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
            '</div>' +
            '</div></div></div>');

        return {
            /**
             * Opens our dialog
             * @param message Custom message
             * @param options Custom options:
             *                  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
             *                  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
             */
            show: function (message, description, options) {
                // Assigning defaults
                if (typeof options === 'undefined') {
                    options = {};
                }
                if (typeof message === 'undefined') {
                    message = 'Loading';
                }
                var settings = $.extend({
                    dialogSize: 'm',
                    progressType: '',
                    onHide: null // This callback runs after the dialog was hidden
                }, options);

                // Configuring dialog
                $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
                $dialog.find('.progress-bar').attr('class', 'progress-bar');
                if (settings.progressType) {
                    $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
                }
                $dialog.find('h3').text(message);
                $dialog.find('p').text(description);
                // Adding callbacks
                if (typeof settings.onHide === 'function') {
                    $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                        settings.onHide.call($dialog);
                    });
                }
                // Opening dialog
                $dialog.modal();
            },

            update: function (new_text){
                $dialog.find('p').text(new_text);
            },
            /**
             * Closes dialog
             */
            hide: function () {
                $dialog.modal('hide');
            }
        };

    })(jQuery);
