import { FileUploader } from './FileUploader';

export class Formulario {
    private _charset = 'UTF-8';
    set charset(charset: string) {
        this.formEl.setAttribute('accept-charset', charset);
        this._charset = charset;  
    }
    get charset() {
        return this._charset;
    } 
    
    private _enctype="multipart/form-data"
    set enctype(enctype: string) {
        this.formEl.setAttribute('enctype', enctype);
        this._enctype = enctype;  
    }
    get enctype() {
        return this._enctype;
    } 

    private _fileUploader: FileUploader;

    constructor(
        public formEl: HTMLFormElement,
        opts?: {
            order: string[],
            fileUploader: FileUploader
        }
    ) {
        this._fileUploader = (opts && opts.fileUploader) || null;

        opts.order.forEach(key => {
            opts[key].render();
        });

        this.charset = this.formEl.getAttribute('accept-charset') || this._charset;
        this.enctype = this.formEl.getAttribute('enctype') || this._enctype;
    }

    appendInput(inputs: { order?: string[], [elemento: string]: any }) {
        if (inputs.fileUploader) {
            this._fileUploader = inputs.fileUploader;
        }

        if (inputs.order) {
            inputs.order.forEach(key => {
                inputs[key]['render']();
            });
        }
    }

}