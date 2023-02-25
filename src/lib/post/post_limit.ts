import { ValidId } from '../general/valid_id'
import { ValidText } from '../general/valid_text'

export class PostLimit {
	private readonly _limit: number

	public constructor(limit: number) {
		const valid_limit = new ValidId(limit)

		this._limit = valid_limit.id
	}

	public static from_string(limit_string: string | undefined): PostLimit {
		const valid_limit = new ValidText(limit_string)
		const id_number = Number(valid_limit.text)
		const post_limit = new PostLimit(id_number)

		return post_limit
	}

	public get limit(): number {
		return this._limit
	}
}
