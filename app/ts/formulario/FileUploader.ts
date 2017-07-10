export class FileUploader {
    private _el: HTMLInputElement;
    private _form: HTMLFormElement;

    private _nomeArquivo = 'file';
    set nomeArquivo(nome: string): void {
        this._nomeArquivo = nome;
        this._el.setAttribute('name', nome);
    }
    get nomeArquivo() {
        return this._nomeArquivo;
    }

    constructor(formEl: HTMLFormElement) {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        this._el = input;
        this._form: formEl;
    }

    render(): void {
        this._form.appendChild(this._el);
    }
}