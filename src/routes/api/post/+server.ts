import { Repository } from '$lib/app/repository'
import { PostLimit } from '$lib/post/post_limit'
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ url }): Promise<Response> => {
	console.info(url.href)

	try {
		const limit_string = url.searchParams.get('limit')
		const limit = limit_string ? PostLimit.from_string(limit_string) : undefined

		const posts = await Repository.post.find_many(limit)
		const response = json(posts)

		return response
	} catch (error) {
		console.error(error)
		return json({ error: (error as Error).message })
	}
}
