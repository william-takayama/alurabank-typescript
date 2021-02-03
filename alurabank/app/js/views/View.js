System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    this._element.html(this.template(model));
                }
            };
            exports_1("View", View);
        }
    };
});
