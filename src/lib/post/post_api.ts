import type { Posts, Users } from '@prisma/client'
import { Api } from '../api/api'
import { ApiPath } from '../api/api_path'

export class PostsApi {
	private readonly _api_path: ApiPath

	public constructor(limit?: number) {
		const limit_string = limit?.toString() ?? ''

		this._api_path = ApiPath.api_directory
			.connect('post')
			.connect_with_params({ limit: limit_string })
	}

	public async fetch(): Promise<(Posts & { user: Users;})[]> {
		const api = new Api(this._api_path)
		return await api.fetch<(Posts & { user: Users;})[]>()
	}
}
