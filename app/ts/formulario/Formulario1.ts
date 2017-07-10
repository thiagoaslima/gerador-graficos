import { FileUploader } from './FileUploader';

export class Formulario {
    private _fileUploader: FileUploader;

    constructor(
        private _formEl: HTMLFormElement,
        opts?: {
            order: string[],
            fileUploader: FileUploader
        }
    ) { 
        this._fileUploader = (opts && opts.fileUploader) || null;

        this.order.forEach(key => {
            opts[key].render();
        });
    }

    appendInput(inputs: {order?: string, [elemento: string]: any}) {
        if (inputs.fileUploader) {
            this._fileUploader = inputs.fileUploader);
        }


        if (inputs.order) {
            inputs.order.forEach(key => {
                inputs[key]['render']();
            });
        }
    }
    
}