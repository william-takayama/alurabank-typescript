import { NegociacaoController } from './controllers/NegociacaoController'

const controller = new NegociacaoController();

$('.form').submit(controller.add.bind(controller));
// document
//     .querySelector('.form')
//     .addEventListener('submit', controller.add.bind(controller));