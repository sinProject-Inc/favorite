import { Md5 } from 'ts-md5';

export class GravatarUrl {
	public constructor(
		private readonly _email: string,
  ) {}

	public get url(): URL {
    const hash = Md5.hashStr(this._email)
    const url = new URL(`https://www.gravatar.com/avatar/${hash}?d=identicon`)
    
    return url
  }
}
