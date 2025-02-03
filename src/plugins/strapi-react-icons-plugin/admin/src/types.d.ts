interface IIconLibrary {
  id: string;
  name: string;
  abbreviation:
    | 'ai'
    | 'bs'
    | 'bi'
    | 'ci'
    | 'di'
    | 'fi'
    | 'fc'
    | 'fa'
    | 'gi'
    | 'go'
    | 'gr'
    | 'hi'
    | 'im'
    | 'io'
    | 'md'
    | 'rx'
    | 'ri'
    | 'si'
    | 'sl'
    | 'tb'
    | 'tfi'
    | 'ti'
    | 'vsc'
    | 'wi'
    | 'cg';
  isEnabled: boolean;
}
