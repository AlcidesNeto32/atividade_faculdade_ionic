import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha:string = '';
  
  senhasArray: { SP: string[], SG: string[], SE: string[] } = {
    SP: [],
    SG: [],
    SE: []
  };

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  novaSenha(tipoSenha: string = '') {
    const ano = new Date().getFullYear().toString().substring(2, 4);
    const mes = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const dia = new Date().getDate().toString().padStart(2, '0');
    const prefixo = ano + mes + dia + '-' + tipoSenha;

    if (tipoSenha === 'SG') {
      this.somaGeral();
      this.inputNovaSenha = prefixo + (this.senhasArray.SG.length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha === 'SP') {
      this.somaPrior();
      this.inputNovaSenha = prefixo + (this.senhasArray.SP.length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
    } else if (tipoSenha === 'SE') {
      this.somaExame();
      this.inputNovaSenha = prefixo + (this.senhasArray.SE.length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
    }

    console.log(this.senhasArray);
  }


}
