import type { PrismaClient, Posts, Users } from '@prisma/client'
import type { PostRepository } from './post_repository'
import type { PostLimit } from './post_limit'
import type { PostId } from './post_id'

export class PostRepositoryPrisma implements PostRepository {
	public constructor(private readonly _prisma_client: PrismaClient) {}

	public async find(post_id: PostId): Promise<Posts | null> {
		const post = await this._prisma_client.posts.findUnique({ where: { id: post_id.id } })

		return post
	}

	public async find_many(limit?: PostLimit): Promise<(Posts & { user: Users;})[]> {
		const posts = await this._prisma_client.posts.findMany({
			orderBy: { updated_at: 'desc' },
			...(limit && { take: limit.limit }),
			include: {
				user: true,
			},
		})	

		return posts
	}
}
