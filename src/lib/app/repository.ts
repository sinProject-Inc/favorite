import type { PostRepository } from '$lib/post/post_repository'
import { PostRepositoryPrisma } from '$lib/post/post_repository_prisma'
import { PrismaClient } from '@prisma/client'

export class Repository {
	private static _context = new PrismaClient()

	public static get context(): PrismaClient {
		return Repository._context
	}

	public static post: PostRepository = new PostRepositoryPrisma(this._context)
}
