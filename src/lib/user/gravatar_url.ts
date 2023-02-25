import { ApiPath } from '../api/api_path'

export class GravatarUrl {
	public constructor(
		// TODO: Value Object
		private readonly _value: string,
	) {}

	public get url(): string {
		try {
			const api_path = ApiPath.api_directory
				.connect('gravatar')
				.connect_with_encoding(this._value)
			return api_path.path()
		} catch (error) {
			console.error(error)
			return ''
		}
	}
}
