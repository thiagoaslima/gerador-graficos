import { Formulario, FileUploader } from '../formulario';

const formEl = document.createElement('form');

export const formulario = new Formulario(formEl, {
    order: ['fileUploader'],
    fileUploader: new FileUploader(formEl)
});