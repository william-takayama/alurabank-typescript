System.register(["../models/index", "../views/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegociacaoController, WeekDay;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                add(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.value.replace(/-/g, ','));
                    if (!this._isBusinessDay(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor.');
                        return;
                    }
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
                _isBusinessDay(data) {
                    return data.getDay() !== WeekDay.sun || WeekDay.sat;
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValue", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (WeekDay) {
                WeekDay[WeekDay["sun"] = 0] = "sun";
                WeekDay[WeekDay["mon"] = 1] = "mon";
                WeekDay[WeekDay["tue"] = 2] = "tue";
                WeekDay[WeekDay["wed"] = 3] = "wed";
                WeekDay[WeekDay["thur"] = 4] = "thur";
                WeekDay[WeekDay["fri"] = 5] = "fri";
                WeekDay[WeekDay["sat"] = 6] = "sat";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
