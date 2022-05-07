import { environment } from '@env/environment';
import { RotaModel } from '@shared/models/rota.model';

export class MapRotasIgnoradas {
  public static buscarRotasIgnoradas(): RotaModel[] {
    return [
      {
        rota: environment.api.autenticar,
      },
    ] as RotaModel[];
  }
}
