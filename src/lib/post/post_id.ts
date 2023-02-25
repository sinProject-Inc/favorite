import { ValidText } from '../general/valid_text'
import { ValidId } from '../general/valid_id'

export class PostId {
	private readonly _id: number

	public constructor(id: number) {
		const valid_id = new ValidId(id)

		this._id = valid_id.id
	}

	public static from_string(id_string: string | undefined): PostId {
		const valid_text = new ValidText(id_string)
		const id_number = Number(valid_text.text)
		const post_id = new PostId(id_number)

		return post_id
	}

	public get id(): number {
		return this._id
	}
}
