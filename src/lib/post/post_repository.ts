import type { Posts } from '@prisma/client'
import type { PostId } from './post_id'
import type { PostLimit } from './post_limit'

export interface PostRepository {
	find(text_id: PostId): Promise<Posts | null>
	find_many(limit?: PostLimit): Promise<Posts[]>
}
